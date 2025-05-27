"use client"

import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/button"

function Square({ value, onSquareClick }: { value: XO, onSquareClick: () => void }) {
    // const [value, setValue] = useState<string | null>(null)
    // function handleClick() {
    //     console.log(`clicked`);
    //     // setValue("X")
    // }
    return <Button variant="outline" className="w-16 h-16 focus:outline-none text-xl font-extrabold" onClick={onSquareClick}>{value}</Button>
}

type XO = "X" | "O" | null;

function GameBoard() {
    const [squares, setSquares] = useState<XO[]>(Array(9).fill(null))

    function handleClick(idx: number) {
        const nextSquares = squares.slice()
        nextSquares[idx] = "X"
        setSquares(nextSquares)
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
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