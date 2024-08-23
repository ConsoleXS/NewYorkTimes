"use client"
import React, {useState} from 'react';
import styles from './Welcome.css';
import Image from 'next/image';


function Welcome(props = {backgroundColor, image, title, description}) {

    const [isOpen, setOpen] = useState(true);
    const [isHidden, setHidden] = useState(false);


    const close = () => {
        setOpen(false);

        setTimeout(() => {
            setHidden(true);
        }, 500);
    };

    function getDate() {
        const today = new Date();

        return today.toLocaleDateString().replaceAll("/", " • ")

    }


    return (
        <div  style={{backgroundColor: props.backgroundColor}} className={`${"welcome"} ${!isOpen ? "closed" : ''} ${isHidden ? "hidden" : ''}`}>

            <div className="welcomeWrapper">
                    <Image
                        className="welcomeImage"
                        src={props.image}
                        width={80}
                        height={80}

                    />
                    <h1>{props.title}</h1>
                    <h4>{props.description}</h4>



                    <button className='playBtn' onClick={close}>Play</button>
                    <h3>{getDate()}</h3>
            </div>
            

        </div>
    );
}

export default Welcome;