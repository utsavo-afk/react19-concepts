"use client"

import { useState } from "react";
import { Button } from "./ui/button"

function Square() {
    const [value, setValue] = useState<string | null>(null)
    function handleClick() {
        // console.log(`clicked`);
        setValue("X")
    }
    return <Button variant="outline" className="w-16 h-16 focus:outline-none text-xl font-extrabold" onClick={handleClick}>{value}</Button>
}

function GameBoard() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}

export default function TicTacToe() {
    return <div className="flex flex-col items-center justify-center min-w-sm">
        <h1 className="text-3xl text-center font-bold mb-3">Tic-Tac-Toe</h1>
        <GameBoard />
    </div>
}