import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { removeFromDb } from '../utilities/fakedb';
import CartDeatis from './CartDeatis';

const OrderReview = () => {
    const data = useLoaderData();

    const handleDelete = (id) => {
        removeFromDb(id);
    };

    return (
        <div className="grid grid-cols-4 justify-center m-20">
            {/* show the products details */}
            <div className="col-span-3">
                {data
                    ? data.map((el) => {
                          const { name, price, img, shipping, quantity } = el;
                          return (
                              <div key={el.id} className="flex w-full  items-center  border-2 border-gray-400 m-5 p-3 rounded-md">
                                  <img src={img ? img : 'https://picsum.photos/200/300?random'} alt={name} className="flex-none w-[90px] h-[90px] my-10" />

                                  <div
                                      className="grow
                                  flex  justify-between items-center mr-10">
                                      <div className="ml-6">
                                          <h4 className="text-xl font-semibold">{name}</h4>
                                          <p className="text-xl ">
                                              Price: <span className="text-yellow-500">${price ? price : '00'}</span>
                                          </p>
                                          <p className="text-xl ">
                                              Selected Qunatity: <span className="text-yellow-500">{quantity}</span>
                                          </p>
                                          <p className="text-xl ">
                                              Shipping Charge: <span className="text-yellow-500">${shipping ? shipping : '00'}</span>
                                          </p>
                                      </div>

                                      <div>
                                          <RiDeleteBin6Fill
                                              className="text-6xl text-red-500 rounded-full p-2 bg-red-300 cursor-pointer active:bg-red-600 transition-all"
                                              type="button"
                                              onClick={() => handleDelete(el.id)}
                                          />
                                      </div>
                                  </div>
                              </div>
                          );
                      })
                    : 'There is no data '}
            </div>

            {/* show the Order Summary History */}
            <div className="col-span-1">
                <CartDeatis data={data} name="Preview Order" link="*" />
            </div>
        </div>
    );
};

export default OrderReview;
