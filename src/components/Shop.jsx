import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import CartDeatis from './CartDeatis';
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

    return (
        <div className="grid grid-cols-5 w-full h-screen mt-12">
            <div className="col-span-4 grid grid-cols-3 justify-items-center gap-6 p-10">
                {products &&
                    products.map((el) => {
                        return <ProductCard key={el.id} data={el} handleAddtoCart={handleAddtoCart} />;
                    })}
            </div>

            <CartDeatis data={cart} />
        </div>
    );
};

export default Shop;
