import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';
import ProductCard from './ProductCard';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();

        const savedCart = [];
        // step 1 : get id of the storedCart

        for (const id in storedCart) {
            // get product from the products state by using id
            const addedProducts = products.find((el) => el.id === id);

            // get quantity from the addedProducts
            if (addedProducts) {
                const quantity = storedCart[id];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
        }
        setCart(savedCart);
    }, [products]);

    const fetchData = async () => {
        const fetchUrl = await fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json');
        const data = await fetchUrl.json();
        setProducts(data);
    };

    const handleAddtoCart = (details) => {
        // const newCart = [...cart, details];
        let newCart = [];

        const exists = cart.find((pd) => pd.id === details.id);

        if (!exists) {
            details.quantity = 1;
            newCart = [...cart, details];
        } else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter((pd) => pd.id !== details.id);
            newCart = [...remaining, exists];
        }

        setCart(newCart);
        addToDb(details.id);
    };

    let tax = 0;
    let grandTotal = 0;
    let totalQuantity = 0;
    let totalPrice = 0;
    let shippingCost = 0;
    for (let id of cart) {
        totalQuantity += id.quantity;
        totalPrice += id.price * id.quantity;
        shippingCost += id.shipping;
    }
    tax = (totalPrice * 7) / 100;
    grandTotal = totalPrice + tax + shippingCost;
    const handleClearCart = () => {
        setCart([]);
        tax = 0;
        grandTotal = 0;
        deleteShoppingCart();
    };
    return (
        <div className="grid grid-cols-5 w-full h-screen">
            <div className="col-span-4 grid grid-cols-3 justify-items-center gap-6 p-10">
                {products &&
                    products.map((el) => {
                        return <ProductCard key={el.id} data={el} handleAddtoCart={handleAddtoCart} />;
                    })}
            </div>

            <div className="bg-orange-300 space-y-3 p-5 fixed right-10 my-20 rounded-lg">
                <h3 className="text-2xl text-center underline">Order Summary</h3>

                <p>Selected Items: {totalQuantity}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Cost: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <p className="font-bold text-xl ">Grand Total: ${grandTotal}</p>

                <button type="button" className="px-4 py-2 rounded-md bg-red-500 text-white w-full" onClick={handleClearCart}>
                    Clear Cart
                </button>
                <Link type="button" className="px-4 py-2 rounded-md bg-yellow-500 text-white w-full text-center" to="/order-review" state={cart}>
                    Review Order
                </Link>
            </div>
        </div>
    );
};

export default Shop;
