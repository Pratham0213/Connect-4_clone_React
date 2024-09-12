import React, { useState } from 'react';
import './Connect4.css'; // You can style your game here

const Connect4 = () => {
  const [board, setBoard] = useState(Array(6).fill(null).map(() => Array(7).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('R'); // 'R' for Red, 'Y' for Yellow

  const dropDisc = (col) => {
    const newBoard = board.map(row => row.slice());
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'R' ? 'Y' : 'R');
        break;
      }
    }
  };

  const checkWinner = () => {
   
  };

  const renderCell = (row, col) => {
    return (
      <div className="cell" onClick={() => dropDisc(col)}>
        {board[row][col]}
      </div>
    );
  };

  return (
    <div className="connect4">
      <h1>Connect 4</h1>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="cell">
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Connect4;
