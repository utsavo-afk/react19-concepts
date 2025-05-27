"use client"

import { useState } from "react";
import { Button } from "./ui/button"
import { calculateWinner } from "@/lib/ticTacToe/utils";

function Square({ value, onSquareClick }: { value: XO, onSquareClick: () => void }) {
    return <Button variant="outline" className="board-square" onClick={onSquareClick}>{value}</Button>
}


function Board() {
    let status: string | null = null // game status

    const [squares, setSquares] = useState<XO[]>(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState<boolean>(true)

    const winner = calculateWinner(squares)

    if (winner) {
        status = `Winner: ${winner}`
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`
    }

    function handleClick(idx: number) {
        if (squares[idx] || winner) {
            return
        }
        const nextSquares = squares.slice()
        xIsNext ? nextSquares[idx] = "X" : nextSquares[idx] = "O"
        setXIsNext(!xIsNext)
        setSquares(nextSquares)
    }

    return (
        <>
            <div className="mb-4 text-center">
                <h3 className="font-medium text-xl">{status}</h3>
            </div>
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
    return <div>
        <div className="board-wrapper">
            <h1 className="game-title">Tic-Tac-Toe</h1>
            <Board />
        </div>
    </div>
}