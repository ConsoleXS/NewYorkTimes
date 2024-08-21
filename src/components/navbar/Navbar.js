// 'use client';

import styles from './Navbar.css';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import React, { useState } from 'react';



function Navbar() {

    // const [click, setClick] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <FontAwesomeIcon className="icon" icon={faBars} />
                
                
                
                <a href="/" className="logo">
                    <Image
                    src="/logo.png"
                    width={143}
                    height={40}
                    alt="New York Times Logo"
                    />
                </a>
            </div>

            <a href="/" className="mobileLogo">
                    <Image
                    src="/logo.png"
                    width={143}
                    height={40}
                    alt="New York Times Logo"
                    />
            </a>

         
            <div className="navbar-right">
                <a className='subscribe' href="#">SUBSCRIBE</a>
                <a className="login" href="#">LOGIN</a>
            </div>



        </nav>
    )
}

export default Navbar;