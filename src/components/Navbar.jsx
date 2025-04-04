import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex flex-row justify-between w-[75%] bg-amber-950 p-5 border-2 border-amber-500 text-white rounded-2xl font-bold">
            <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="flex flex-row gap-10">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">SignUp</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;