import React from 'react';
import Logo from '../assets/images/Logo.svg';
const Header = () => {
    return (
        <header className="bg-blue-800 p-3 text-white">
            <nav className="flex justify-between items-center mx-20">
                <img src={Logo} alt="Ame-Jon" />

                <ul className="flex justify-around items-center text-xl gap-6 font-bold">
                    <li>Order</li>
                    <li>Order Review</li>
                    <li>Management Inventory</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
