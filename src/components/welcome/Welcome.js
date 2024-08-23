"use client"
import React, {useState} from 'react';
import styles from './Welcome.css';
import Image from 'next/image';


function Welcome(props = {backgroundColor, image, title, description}) {

    const [isOpen, setOpen] = useState(true);

    const close = () => {
        setOpen(false);
    };

    function getDate() {
        const today = new Date();

        return today.toLocaleDateString().replaceAll("/", " • ")

    }


    return (
        <div  style={{backgroundColor: props.backgroundColor}} className={`${"welcome"} ${!isOpen ? "closed" : ''}`}>

            <div className="welcomeWrapper">
                    <Image
                        className="welcomeImage"
                        src={props.image}
                        width={500}
                        height={500}

                    />
                    <h1>{props.title}</h1>
                    <h4>{props.description}</h4>



                    <button onClick={close}>Play</button>
                    <h3>{getDate()}</h3>
            </div>
            

        </div>
    );
}

export default Welcome;