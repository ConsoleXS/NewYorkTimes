'use client';

import React, { useState } from "react";
import { initialBoard } from "./Words";

import Letter from "./Letter";

function Board() {

    const [board, setBoard] = useState(initialBoard);

    return (
        <div className="board">
            <div className="row">
                <Letter position={0} guess={0}/>
                <Letter position={1} guess={0}/>
                <Letter position={2} guess={0}/>
                <Letter position={3} guess={0}/>
                <Letter position={4} guess={0}/>
            </div>
            <div className="row">
                <Letter position={0} guess={1}/>
                <Letter position={1} guess={1}/>
                <Letter position={2} guess={1}/>
                <Letter position={3} guess={1}/>
                <Letter position={4} guess={1}/>
            </div>
            <div className="row">
                <Letter position={0} guess={2}/>
                <Letter position={1} guess={2}/>
                <Letter position={2} guess={2}/>
                <Letter position={3} guess={2}/>
                <Letter position={4} guess={2}/>
            </div>
            <div className="row">
                <Letter position={0} guess={3}/>
                <Letter position={1} guess={3}/>
                <Letter position={2} guess={3}/>
                <Letter position={3} guess={3}/>
                <Letter position={4} guess={3}/>
            </div>
            <div className="row">
                <Letter position={0} guess={4}/>
                <Letter position={1} guess={4}/>
                <Letter position={2} guess={4}/>
                <Letter position={3} guess={4}/>
                <Letter position={4} guess={4}/>
            </div>
            <div className="row">
                <Letter position={0} guess={5}/>
                <Letter position={1} guess={5}/>
                <Letter position={2} guess={5}/>
                <Letter position={3} guess={5}/>
                <Letter position={4} guess={5}/>
            </div>

        </div>
    )
}

export default Board;