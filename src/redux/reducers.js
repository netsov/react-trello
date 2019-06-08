import { combineReducers } from 'redux';
import uuid from 'uuid/v4';

import { ADD_TASK, MOVE_TASK } from './actionTypes';
import * as boards from '../boards';

function newTask(title, board = boards.TODO) {
  return {
    title,
    id: uuid(),
    board
  };
}

const initialTasks = [
  newTask('foo'),
  newTask('bar'),
  newTask('zoo', boards.DOING),
  newTask('cad', boards.DONE)
];

function tasks(state = initialTasks, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, newTask(action.payload.title)];
    case MOVE_TASK:
      return state.map(
        task =>
          task.id === action.payload.taskId
            ? { ...task, board: boards.ALL[boards.ALL.indexOf(task.board) + 1] }
            : task
      );
    default:
      return state;
  }
}

export default combineReducers({
  tasks
});
