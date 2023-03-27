import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';

const OrderReview = () => {
    const data = useLocation();
    const [newData, setNewData] = useState(data.state);
    const price = newData.map((el) => el.price);
    const shipping = newData.map((el) => el.shipping);
    let newSum = price.reduce((ps, cs) => ps + cs, 0);
    let shippingCost = shipping.reduce((ps, cs) => ps + cs, 0);
    let total = newSum + shippingCost;
    let tax = Number(((total * 7) / 100).toFixed(2));
    let grandTotal = total + tax;
    const handleClearCart = () => {
        setNewData([]);
        newSum = 0;
        shippingCost = 0;
        grandTotal = 0;
        tax = 0;
    };

    const handleDelete = (id) => {
        const newAllData = newData.filter((el) => el.id !== id);
        setNewData(newAllData);
    };

    return (
        <div className="grid grid-cols-2 justify-center m-20 justify-items-center gap-10">
            {/* show the products details */}
            <div className="">
                {newData
                    ? newData.map((el) => {
                          const { name, price, img, shipping } = el;
                          return (
                              <div key={el.id} className="flex w-full  items-center  border-2 border-gray-400 m-5 p-3 rounded-md">
                                  <img src={img ? img : 'https://picsum.photos/200/300?random'} alt={name} className="w-[150px] h-[150px] my-10" />

                                  <div className="flex flex-col justify-between items-center mr-10">
                                      <h4 className="text-2xl font-semibold">{name.slice(0, 10) + '...'}</h4>
                                      <p className="text-xl p-2">
                                          Price: <span className="text-yellow-500">${price ? price : '00'}</span>
                                      </p>
                                      <p className="text-xl p-2">
                                          Shipping Charge: <span className="text-yellow-500">${shipping ? shipping : '00'}</span>
                                      </p>
                                  </div>

                                  <RiDeleteBin6Fill
                                      className="text-7xl text-red-500 rounded-full bg-red-300 p-2 cursor-pointer active:bg-red-600 transition-all"
                                      type="button"
                                      onClick={() => handleDelete(el.id)}
                                  />
                              </div>
                          );
                      })
                    : 'There is no data '}
            </div>

            {/* show the Order Summary History */}
            <div className="bg-orange-300 w-[400px] text-center mr-48 h-[350px] fixed  right-0  rounded-lg space-y-3 p-5">
                <h3 className=" text-center underline text-3xl font-bold">Order Summary</h3>

                <p>Selected Items: {newData.length}</p>
                <p>Total Price: ${newSum}</p>
                <p>Total Shipping Cost: ${shippingCost}</p>
                <p>Tax: ${tax}</p>
                <p className="font-bold text-xl ">Grand Total: ${grandTotal}</p>

                <button type="button" className=" w-full bottom-20 px-4 py-2 rounded-md bg-red-500 text-white " onClick={() => handleClearCart()}>
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
