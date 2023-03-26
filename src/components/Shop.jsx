import React from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    return (
        <div className="grid grid-cols-5 w-full h-screen">
            <div className="bg-red-500 col-span-4"></div>

            <div className="bg-orange-300 space-y-3 p-5">
                <h3 className="text-2xl text-center underline">Order Summary</h3>

                <p>Selected Items: 5</p>
                <p>Total Price: $112</p>
                <p>Total Shipping Cost: $112</p>
                <p>Tax: $112</p>
                <p className="font-bold text-xl ">Grand Total: $112</p>

                <button type="button" className="px-4 py-2 rounded-md bg-red-500 text-white w-full">
                    Clear Cart
                </button>
                <Link type="button" className="px-4 py-2 rounded-md bg-yellow-500 text-white w-full text-center" to="/order-review">
                    Review Order
                </Link>
            </div>
        </div>
    );
};

export default Shop;
