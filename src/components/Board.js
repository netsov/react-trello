import React from 'react';
import { connect } from 'react-redux';

import './Board.css';
import { Task } from './Task';
import * as boards from '../boards';
import { moveTask, selectTask } from '../redux/actions';

const MoveNext = ({ onClick }) => (
  <button
    onClick={e => {
      e.stopPropagation();
      onClick();
    }}
  >
    Move next
  </button>
);

const Board = ({
  board,
  children,
  tasks = [],
  moveTask,
  selectedTaskId,
  selectTask
}) => {
  return (
    <div className="board">
      <h4>{board}</h4>
      {tasks.map(task => (
        <Task
          key={task.id}
          title={task.title}
          isSelected={selectedTaskId === task.id}
          onSelect={() => selectTask(task.id)}
        >
          {task.board !== boards.DONE && (
            <MoveNext onClick={() => moveTask(task.id)} />
          )}
        </Task>
      ))}
      {children}
    </div>
  );
};

const mapStateToProps = ({ tasks, selected }, props) => ({
  tasks: tasks.filter(task => task.board === props.board),
  selectedTaskId: selected && selected.id
});

export default connect(mapStateToProps, { moveTask, selectTask })(Board);
