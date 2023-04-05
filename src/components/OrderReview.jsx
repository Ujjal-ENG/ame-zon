import React, { useState } from 'react';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';
import CartDeatis from './CartDeatis';

const OrderReview = () => {
    const data = useLoaderData();

    const handleDelete = (id) => {
        removeFromDb(id);
    };

    console.log(data);

    return (
        <div className="grid grid-cols-2 justify-center m-20 justify-items-center gap-10">
            {/* show the products details */}
            <div className="">
                {data
                    ? data.map((el) => {
                          const { name, price, img, shipping, quantity } = el;
                          return (
                              <div key={el.id} className="flex w-full  items-center  border-2 border-gray-400 m-5 p-3 rounded-md">
                                  <img src={img ? img : 'https://picsum.photos/200/300?random'} alt={name} className="w-[150px] h-[150px] my-10" />

                                  <div className="flex flex-col justify-between items-center mr-10">
                                      <h4 className="text-xl font-semibold">{name.slice(0, 15) + '...'}</h4>
                                      <p className="text-xl p-2">
                                          Price: <span className="text-yellow-500">${price ? price : '00'}</span>
                                      </p>
                                      <p className="text-xl p-2">
                                          Selected Qunatity: <span className="text-yellow-500">{quantity}</span>
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
            <CartDeatis data={data} />
        </div>
    );
};

export default OrderReview;
