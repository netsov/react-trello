import React from 'react';

import './Task.css';

export const Task = ({ title, children }) => {
  return (
    <div className="task">
      <span>{title}</span>
      {children}
    </div>
  );
};
