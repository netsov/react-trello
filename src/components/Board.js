import React from 'react';
import { connect } from 'react-redux';

import './Board.css';
import { Task } from './Task';
import * as boards from '../boards';
import { moveTask } from '../redux/actions';

const Board = ({ board, children, tasks = [], moveTask }) => {
  return (
    <div className="board">
      <h4>{board}</h4>
      {tasks.map(task => (
        <Task key={task.id} title={task.title}>
          {task.board !== boards.DONE && (
            <button onClick={() => moveTask(task.id)}>Move next</button>
          )}
        </Task>
      ))}
      {children}
    </div>
  );
};

const mapStateToProps = ({ tasks }, props) => ({
  tasks: tasks.filter(task => task.board === props.board)
});

export default connect(mapStateToProps, { moveTask })(Board);
