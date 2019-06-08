import React from 'react';

import './Board.css';

export const Board = ({ board, children }) => {
  return (
    <div className="board">
      <h4>{board}</h4>
      {children}
    </div>
  );
};
