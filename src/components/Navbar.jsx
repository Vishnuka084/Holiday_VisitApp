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
    return <div>
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
        <div>
            <FaFacebook className='mx-4'/>
            <FaTwitter className='mx-4'/>
            <FaGooglePlusG className='mx-4'/>
            <FaInstagram  className='mx-4'/>
        </div>
        {/*Hamburger Icon */}
        <div>
            <FaBars/>
        </div>
        {/*Mobile Menu*/}
        <div>
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
    </div>;

};

export default Navbar