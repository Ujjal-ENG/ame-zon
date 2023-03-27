import React from 'react';
import { Link } from 'react-router-dom';
import kops from '../assets/images/kops.jpg';
const Home = () => {
    return (
        <div className="flex justify-between items-center mx-20 my-5">
            {/* left side */}
            <div className="space-y-5 pl-20">
                <p className="text-yellow-500">Sale up to 70% off</p>
                <h1 className="text-6xl font-bold">New Collection For Fall</h1>
                <p className="text-gray-500">Discover all the new arrivals of ready-to-wear collection</p>

                <Link to="/shop" type="button" className="px-4 py-2 rounded-md bg-orange-500 text-black ">
                    Shop Now
                </Link>
            </div>

            {/* right side */}
            <img src={kops} alt="" />
        </div>
    );
};

export default Home;
