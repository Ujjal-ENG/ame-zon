import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const OrderReview = () => {
    const data = useLocation();
    console.log(data);
    return (
        <div className="grid grid-cols-2 justify-center m-20 justify-items-center gap-10">
            {/* show the products details */}
            <div className="">
                {data.state.map((el) => {
                    const { name, price, img, shipping } = el;
                    return (
                        <div key={el.id} className="flex w-full  items-center  border-2 border-gray-400 m-5 p-3 rounded-md">
                            <img src={img ? img : name} alt={name} className="w-[150px] h-[150px] my-10" />

                            <div className="flex flex-col justify-between items-center mr-10">
                                <h4 className="text-2xl font-semibold">{name.slice(0, 10) + '...'}</h4>
                                <p className="text-xl p-2">
                                    Price: <span className="text-yellow-500">${price ? price : '00'}</span>
                                </p>
                                <p className="text-xl p-2">
                                    Shipping Charge: <span className="text-yellow-500">${shipping ? shipping : '00'}</span>
                                </p>
                            </div>

                            <RiDeleteBin6Fill className="text-7xl text-red-500 rounded-full bg-red-300 p-2 cursor-pointer active:bg-red-600 transition-all" type="button" />
                        </div>
                    );
                })}
            </div>

            {/* show the Order Summary History */}
            <div className="bg-orange-300 w-[400px] text-center mr-48 h-[350px] fixed  right-0  rounded-lg space-y-3 p-5">
                <h3 className=" text-center underline text-3xl font-bold">Order Summary</h3>

                <p>Selected Items: {data.state.length}</p>
                <p>Total Price: $10</p>
                <p>Total Shipping Cost: $11</p>
                <p>Tax: $112</p>
                <p className="font-bold text-xl ">Grand Total: $10</p>

                <button type="button" className=" w-full bottom-20 px-4 py-2 rounded-md bg-red-500 text-white " onClick="">
                    Clear Cart
                </button>
                <Link type="button" className="w-full bottom-0 px-4 py-2 rounded-md bg-yellow-500 text-white text-center" to="*">
                    Proceed Checkout
                </Link>
            </div>
        </div>
    );
};

export default OrderReview;
