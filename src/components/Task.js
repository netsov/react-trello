import React from 'react';
import cx from 'classnames';

import './Task.css';

export const Task = ({ title, children, isSelected = false, onSelect }) => {
  return (
    <div className={cx('task', { isSelected })} onClick={onSelect}>
      <span>{title}</span>
      {children}
    </div>
  );
};
