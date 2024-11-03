import React, { useState, useEffect } from 'react';
import { NavLink ,useLocation } from 'react-router-dom';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);


    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {

        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [location.pathname]);

    const navLinksStyle1 = (isActive) => {
        return `px-2 py-1 text-lg  rounded-md border-b-2 border-transparent ${isActive ? 'bg-yellow-500 text-black' : 'bg-transparent text-white'}
        ${!isActive ? 'hover:border-white transition-all duration-300' : ''}`
    }

    const navLinksStyle2 = (isActive)=>{
        return `px-5 py-1 text-lg font-semibold text-center rounded-md ${isActive ? 'bg-yellow-500 text-black' : 'bg-white text-black'}`
    }

    const navbarStyle = `${location.pathname === '/' && isLargeScreen 
        ? 'lg:bg-transparent lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:z-30  lg:bg-opacity:50' 
        : ' absolute z-20 bg-transparent '} 
        items-center w-full min-h-[4rem] mx-auto sm:h-auto sm:min-h-[4rem] px-5 md:px-10 flex `;
    

    return (
        <div>
            <div 
                className={navbarStyle}
            >
                <div className="flex justify-between items-center w-full max-w-[100rem] h-full mx-auto">
                    <div>
                        <NavLink to="/">
                            <span className="text-white text-3xl font-bold font-kaushan">Wishlink</span>
                        </NavLink>
                    </div>

                    <button 
                        className="lg:hidden text-white text-3xl focus:outline-none transition-all duration-500"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <RxCross1 className='text-2xl' /> : <AiOutlineMenu className='text-2xl' />}
                    </button>

                    <div className='lg:flex gap-10 hidden'>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => navLinksStyle1(isActive)}
                        >
                            Creator
                        </NavLink>

                        <NavLink 
                            to="/brand" 
                            className={({ isActive }) => navLinksStyle1(isActive)}
                        >
                            Brand
                        </NavLink>

                        <NavLink 
                            to="/about" 
                            className={({ isActive }) => navLinksStyle1(isActive)}
                        >
                            About Us
                        </NavLink>
                    </div>

                    {isMenuOpen && (
                        <div 
                            className="absolute right-0 top-[5rem] w-60 bg-white text-black flex flex-col gap-2 p-4 rounded-l-3xl shadow-lg lg:hidden transition-transform transform duration-300 ease-in-out z-20"
                        >
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => navLinksStyle2(isActive)}
                                onClick={() => setIsMenuOpen(false)} 
                            >
                                Creator
                            </NavLink>

                            <NavLink 
                                to="/brand" 
                                className={({ isActive }) => navLinksStyle2(isActive)}
                                onClick={() => setIsMenuOpen(false)} 
                            >
                                Brand
                            </NavLink>

                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => navLinksStyle2(isActive)}
                                onClick={() => setIsMenuOpen(false)} 
                            >
                                About Us
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;


