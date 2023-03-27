import React from 'react';
import { BsCartPlusFill } from 'react-icons/bs';

const ProductCard = (props) => {
    const { name, price, rating, img, seller } = props.data;

    return (
        <>
            {/* making the each card */}
            <div className="w-[300px] h-[510px] rounded-md border-2 border-black relative">
                <img src={img ? img : name} alt={name} className="w-[286px] h-[286px]  mx-auto p-2 rounded-md" />

                <h3 className="font-semibold text-2xl p-2">{name.slice(0, 18) + '...'}</h3>
                <p className="text-xl p-2">Price: ${price}</p>

                <p className="text-gray-400 p-2">Manufacturer: {seller}</p>
                <p className="text-gray-400 p-2">Rating: {rating} star</p>

                <button className="w-full py-2 bg-orange-300 border-2 border-gray-400 text-xl flex justify-center items-center gap-2 absolute bottom-0 rounded-b-md" type="button">
                    Add to Cart <BsCartPlusFill />
                </button>
            </div>
        </>
    );
};

export default ProductCard;
