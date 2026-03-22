import React from 'react';
import mainLogo from '../../../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
const Navbar = () => {

    const navigate = useNavigate();

    const navLink = <>
        <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Home"
            onClick={() => navigate("/")}
        />
        <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="All Apps"
            onClick={() => navigate("app")}
        />
        <input
            type="radio"
            name="my_tabs_2"
            className="tab"
            aria-label="Installation"
            onClick={() => navigate("0")}
        />
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm px-20 font-bold">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2 font-semibold text-[#7039e6] pointer-coarse">
                    <img className='w-10' src={mainLogo} alt="" />
                    HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    <div className="tabs tabs-border text-green-600 ">
                        {navLink}
                    </div>
                </ul>
                {/* name of each tab group should be unique */}

            </div>
            <div className="navbar-end">
                <a className="btn bg-gradient-to-r from-[rgb(124,58,237)] to-[rgb(99,102,241)] text-white border-none">
                    <FaGithub />
                    Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;