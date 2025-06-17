import React, { useEffect, useRef, useState } from 'react'
import DropdownMen from './DropdownMen.jsx'
import DropdownWomen from './DropdownWomen.jsx'
import { Link, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Logo from '/src/assets/fax_logo-removebg-preview.png'
import { FaSearch, FaRegUser, FaBars, FaTimes, } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { FaArrowDown } from 'react-icons/fa'
import { useCart } from '../context/CartContext.jsx'



const NavBar = () => {
    const { cartItems, setShowCart } = useCart();
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(null);
    const navigate = useNavigate();


    const handleNavigation = (path) => {
        setMenuOpen(false);
        setSubMenuOpen(null);
        navigate(path);
    }

    const menuRef = useRef(null);
    const subMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
            if (!subMenuOpen || (subMenuRef.current && !subMenuRef.current.contains(event.target))) {

                setSubMenuOpen(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [menuRef, subMenuOpen])
    return (
        <nav className={`flex items-center justify-between  py-3 px-12 bg-black fixed top-0 left-0 w-full  text-white  shadow-md z-50 transition-transform duration-300`}>
            <button onClick={() => setMenuOpen(true)} className="md:hidden text-white text-2xl">
                <FaBars />
            </button>
            <div className='hidden md:flex items-center gap-2'>
                <DropdownMen />
                <DropdownWomen />
                <a href="/kids" className='text-white group relative w-fit'>Kids
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/collections" className='text-white ml-4 group relative w-fit'>Collections
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>
            <div>
                <Link to={'/'}><img src={Logo} alt="" className='w-18 h-18' /></Link>
            </div>
            <div className='flex space-x-8'>
                <div className="hidden md:flex relative group">
                    <div className="flex items-center cursor-pointer">
                        <span className="group-hover:text-gray-300 transition-colors text-white font-semibold ">English</span>
                        <FaChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 text-white w-4" />
                    </div>

                    <div className="absolute text-center right-0 mt-6 w-22  bg-black text-white  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 rounded-sm">
                        <ul className="py-2 ">
                            <li><button className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-bold cursor-pointer">français</button></li>
                            <li><button className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-bold cursor-pointer">Español</button></li>
                        </ul>
                    </div>
                </div>
                <div className="hidden md:flex relative group">
                    <div className="flex items-center cursor-pointer">
                        <span className="group-hover:text-gray-300 transition-colors text-white font-semibold ">NGN</span>
                        <FaChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 text-white w-4" />
                    </div>

                    <div className="absolute text-center right-0 mt-6 w-22  bg-black text-white  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 rounded-sm">
                        <ul className="py-2 ">
                            <li><button className="block w-full font-bold text-left px-4 py-2 hover:bg-black hover:text-white cursor-pointer">USD</button></li>

                        </ul>
                    </div>
                </div>
                <div className='flex items-center   space-x-8'>
                    <FaSearch className='text-white text-xl' />
                    <FaRegUser className='hidden md:flex text-white text-xl' />
                    <div className="relative cursor-pointer"  onClick={() => setShowCart(true)}>
                        <MdOutlineShoppingBag className="text-white text-xl" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                {cartItems.length}
                            </span>
                        )}


                    </div>
                </div>
            </div>

            {menuOpen && (
                <motion.div
                    ref={menuRef}
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ type: "tween", duration: 0.4 }}
                    className="fixed inset-y-0 left-0 w-84  mb-25 bg-black text-white p-6 z-50"
                >
                    <button onClick={() => setMenuOpen(false)} className='mb-4 text-white text-2xl'>
                        <FaTimes />
                    </button>
                    <div className='flex flex-col gap-55'>
                        <ul className='space-y-4'>
                            <li onClick={() => setSubMenuOpen('men')}
                                className="flex justify-between items-center cursor-pointer">
                                Men <FaChevronRight />
                            </li>
                            <li onClick={() => setSubMenuOpen('women')}
                                className="flex justify-between items-center cursor-pointer">
                                Women <FaChevronRight />
                            </li>
                            <li className="flex justify-between items-center cursor-pointer">
                                <a href="/kids">Kids</a>
                            </li>
                            <li className="flex justify-between items-center cursor-pointer">
                                <a href="/collections">Collections</a>
                            </li>
                        </ul>
                        <div className='flex flex-col gap-5'>
                            <h2 className='text-xl font-bold'>My Account</h2>
                            <div className='flex flex-col gap-3'>
                                <button className=' p-2 bg-yellow-600 rounded-md font-semibold transition-transform duration-300 hover:scale-105'>Log in</button>
                                <button className='p-2 rounded-md font-semibold border border-white hover:bg-yellow-600 transition-transform duration-300 hover:scale-105 hover:border-none'>Register</button>
                            </div>

                        </div>
                    </div>
                    <div className='flex space-x-6 mt-5'>
                        <div className="flex relative group">
                            <div className="flex items-center cursor-pointer">
                                <span className="group-hover:text-gray-300 transition-colors text-white font-semibold ">English</span>
                                <FaChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 text-white w-4" />
                            </div>

                            <div className="absolute text-center right-0 mt-4 w-22  bg-black text-white  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 rounded-sm">
                                <ul className="py-2 ">
                                    <li><button className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-bold cursor-pointer">français</button></li>
                                    <li><button className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white font-bold cursor-pointer">Español</button></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex relative group">
                            <div className="flex items-center cursor-pointer">
                                <span className="group-hover:text-gray-300 transition-colors text-white font-semibold ">NGN</span>
                                <FaChevronDown className="ml-2 transition-transform duration-300 group-hover:rotate-180 text-white w-4" />
                            </div>

                            <div className="absolute text-center right-0 mt-4 w-22  bg-black text-white  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 transition-all duration-300 rounded-sm">
                                <ul className="py-2 ">
                                    <li><button className="block w-full font-bold text-left px-4 py-2 hover:bg-black hover:text-white cursor-pointer">USD</button></li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {subMenuOpen && (
                <motion.div
                    ref={subMenuRef}
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "tween", duration: 0.4 }}
                    className="fixed inset-y-0 right-0 w-100 mb-25 bg-black text-white p-6 z-50 mr-"
                >
                    <button onClick={() => setSubMenuOpen(null)} className="mb-4 flex items-center">
                        <FaArrowDown className='rotate-90' /> <span className='ml-2'>Back</span>
                    </button>

                    {subMenuOpen === 'men' && (
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/jalabiya")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Jalabiya
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/kafans-shirts")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Kafans/Shirts
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/agbada")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Agbada
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/casuals")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Casuals
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/t-shirts")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    T-shirts
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/pants")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Pants
                                </button>
                            </li>
                        </ul>
                    )}
                    {subMenuOpen === 'women' && (
                        <ul>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/abaya")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Abaya
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigation("/croptop")}
                                    className="block px-4 py-2 hover:bg-gray-700 w-full text-left"
                                >
                                    Crop Top
                                </button>
                            </li>

                        </ul>
                    )}
                </motion.div>
            )}


        </nav>
    )
}

export default NavBar
