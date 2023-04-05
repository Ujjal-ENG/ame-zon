import React from 'react';

import Logo from '../assets/images/Logo.svg';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-blue-800 p-3 text-white fixed top-0 right-0 left-0 z-40">
            <nav className="flex justify-between items-center mx-20 ">
                <NavLink to="/">
                    <img src={Logo} alt="Ame-Jon" />
                </NavLink>

                <ul className="flex justify-around items-center text-xl gap-6 font-bold">
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/order-review">Order Review</NavLink>
                    <NavLink to="*">Management Inventory</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
