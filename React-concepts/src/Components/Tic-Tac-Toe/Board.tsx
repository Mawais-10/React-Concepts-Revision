import { useState } from "react";
import Squre from "./Squre";

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function calculateWinner(squares: (string | null)[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Squre value={squares[0]} onsqureClick={() => handleClick(0)} />
        <Squre value={squares[1]} onsqureClick={() => handleClick(1)} />
        <Squre value={squares[2]} onsqureClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Squre value={squares[3]} onsqureClick={() => handleClick(3)} />
        <Squre value={squares[4]} onsqureClick={() => handleClick(4)} />
        <Squre value={squares[5]} onsqureClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Squre value={squares[6]} onsqureClick={() => handleClick(6)} />
        <Squre value={squares[7]} onsqureClick={() => handleClick(7)} />
        <Squre value={squares[8]} onsqureClick={() => handleClick(8)} />
      </div>
    </>
  );
}
