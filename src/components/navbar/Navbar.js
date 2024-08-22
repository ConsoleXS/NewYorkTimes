'use client';

import React, { useState } from 'react';
import styles from './Navbar.css';
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../sidebar/Sidebar';

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        
        setSidebarOpen(!sidebarOpen);
    };

    


    // onClick="this.classList.toggle('opened');
    //this.setAttribute('aria-expanded', this.classList.contains('opened'))"

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <button className={sidebarOpen ? "menu opened" : "menu"}  aria-label="Main Menu" onClick={toggleSidebar}>
                        <svg width="35" height="35" viewBox="0 0 100 100">
                            <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path class="line line2" d="M 20,50 H 80" />
                            <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
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

            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />  {}
        </>
    )
}

export default Navbar;
