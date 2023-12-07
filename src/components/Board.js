import React from "react";
import Square from "./Square";
import "./Board.css";

const Board = ({ squares, onClick }) => {
  const array = [0, 1, 2];

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className="board-wrapper">
      {array.map((row) => (
        <div key={row} className="board-row">
          {array.map((col) => renderSquare(row * 3 + col))}
        </div>
      ))}
    </div>
  );
};

export default Board;
