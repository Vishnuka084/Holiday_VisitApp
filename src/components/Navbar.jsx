import React, {useState, useEffect} from "react";
import { BsChatSquareDots} from "react-icons/bs";
import {
    FaFacebook,
    FaTwitter,
    FaGooglePlusG,
    FaInstagram,
    FaBars,
} from 'react-icons/fa';
const Navbar = () => {
const [nav, setNav] = useState(false)
const handleNav = () => {
    setNav(!nav)
}
    return (
        <div className='w-full min-h-[50px] flex justify-between items-center absoult z-10 text-white  bg-gray-700/80'>
            <ul className='hidden sm:flex px-4'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="#gallery">Gallery</a>
                </li>
                <li>
                    <a href="#deals">Deals</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className='flex justify-between'>
                <FaFacebook className='mx-4'/>
                <FaTwitter className='mx-4'/>
                <FaGooglePlusG className='mx-4'/>
                <FaInstagram  className='mx-4'/>
            </div>
            {/*Hamburger Icon */}
            <div className='sm:hidden z-10'>
                <FaBars size={20} className='mr-4 cursor-pointer'/>
            </div>
            {/*Mobile Menu*/}
            <div className={'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col\'\n' +
                '            : \'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#deals">Deals</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar