"use client"
import React, {useState} from 'react';
import styles from './Sidebar.css';
import Image from 'next/image';


function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`${"sidebar"} ${isOpen ? "open" : ''}`}>

        
            
            <ul className={"sidebarMenu"}>
                <h4 className="heading">NEW YORK TIMES GAMES</h4>
                <li>
                    <a href="./wordle"> 
                        <Image
                            className='gameIcon'
                            src="/games/wordle.svg"
                            width={25}
                            height={25}
                            alt="Wordle"
                        />
                        Wordle
                    </a>
                </li>
                <li>
                    <a href="./connections"> 
                        <Image
                            className='gameIcon'
                            src="/games/connections.svg"
                            width={25}
                            height={25}
                            alt="Connections"
                        />
                        Connections
                    </a>
                </li>
                <li>
                    <a href="./spelling-bee"> 
                        <Image
                            className='gameIcon'
                            src="/games/spelling-bee.svg"
                            width={25}
                            height={25}
                            alt="Spelling Bee"
                        />
                        Spelling Bee
                    </a>
                </li>
                <li>
                    <a href="./letter-boxed"> 
                        <Image
                            className='gameIcon'
                            src="/games/letter-boxed.svg"
                            width={25}
                            height={25}
                            alt="Letter Boxed"
                        />
                        Letter Boxed
                    </a>
                </li>
               
            </ul>
        </div>
    );
}

export default Sidebar;