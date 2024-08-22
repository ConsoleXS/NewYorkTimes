"use client"
import React, {useState} from 'react';
import styles from './Sidebar.css';


function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`${"sidebar"} ${isOpen ? "open" : ''}`}>
            
            <ul className={"sidebarMenu"}>
                <h4>NEW YORK TIMES GAMES</h4>
                <li><a href="#">Wordle</a></li>
                <li><a href="#">Spelling Bee</a></li>
                <li><a href="#">Connections</a></li>
                <li><a href="#">IDK</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;