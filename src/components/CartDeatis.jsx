import React from 'react';
import { Link } from 'react-router-dom';
import { deleteShoppingCart } from '../utilities/fakedb';

const CartDeatis = (props) => {
    const cart = props.data;

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
        deleteShoppingCart();
    };

    return (
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
            <Link type="button" className="px-4 py-2 rounded-md bg-yellow-500 text-white w-full text-center" to="/order-review">
                Review Order
            </Link>
        </div>
    );
};

export default CartDeatis;
