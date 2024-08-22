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

    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <FontAwesomeIcon 
                        className="icon" 
                        icon={faBars} 
                        onClick={toggleSidebar}
                        size='2x'
                    />
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
