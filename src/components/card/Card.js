'use client';

import React, { useState } from 'react';
import styles from './Card.css';
import Image from "next/image";


function Card(props = {backgroundColor, image, title, href}) {

    return (
        <>
            <div className="card">
                
                <a href={props.href}>
                    <div className="cover" style={{backgroundColor: props.backgroundColor}}>
                        <Image
                            src={props.image}
                            width={59}
                            height={59}
                            alt={props.title}
                        />

                        

                        <p> {props.title}</p>
                       
                    </div>
                </a>
                <div>
                    <a className="play"style={{marginBottom: "10px"}} href={props.href}>Play</a>
                    <a className="play" style={{marginTop: "1px"}} href="#">Stats</a>
                </div>

                
               
            </div>
        </>
    )
}

export default Card;
