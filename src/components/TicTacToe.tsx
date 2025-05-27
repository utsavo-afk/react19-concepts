"use client"

import { Button } from "./ui/button"

function Square({ value }: { value?: string }) {
    return <Button variant="outline" className="w-16 h-16 focus:outline-none text-2xl font-extrabold">{value}</Button>
}

function GameBoard() {
    return (
        <>
            <div>
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
            <div>
                <Square value="4" />
                <Square value="5" />
                <Square value="6" />
            </div>
            <div>
                <Square value="7" />
                <Square value="8" />
                <Square value="9" />
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