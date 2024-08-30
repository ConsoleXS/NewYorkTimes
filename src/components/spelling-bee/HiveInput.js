"use client";
import React from "react";
import { useEffect } from "react";

export default function HiveInput() {

    const handleKeyDown = (event) => {
        console.log(event.key);
    };

    let allowedLetters = ["a", "b", "c"];
    let letters = [];

    useEffect(() => {
        const handleKeyPress = (event) => {
          console.log(`Key pressed: ${event.key}`);

          const display = document.getElementById("letters");

          if (letters.length == 0) {
            display.innerHTML = "";
          }

          if (letters.length >= 20) {
            // alert "too long" somewhere
            display.innerHTML = "";
            letters = [];
            return;
          }

          let regex = /^[a-zA-Z]+$/;

          if (event.key.length > 1) {
            if (event.key == "Backspace") {
                if (display.lastChild != null) {
                    display.removeChild(display.lastChild);
                }
            }

            return;
          }

          if (regex.test(event.key)) {

           

            letters.push(event.key);

            const span = document.createElement("span");
            span.id = "letter";
            span.classList.add("add");
            span.style.textTransform = "Uppercase";
        
            span.innerHTML = event.key;

            if (allowedLetters.includes(event.key.toLowerCase())) {
                display.appendChild(span);
            }
            else {
                span.classList.add("invalid");
                display.appendChild(span);
            }

          
          }


        };
    
        window.addEventListener('keydown', handleKeyPress);
    
       
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
    }, []); 


    return (
        <div className="hiveInput">

            <span id="letters" className="hiveInputContent">
                <p>Type or Click</p>
            </span>

        </div>
    );
}