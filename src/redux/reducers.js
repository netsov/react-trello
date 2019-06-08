import { combineReducers } from 'redux';
import uuid from 'uuid/v4';

import { ADD_TASK, MOVE_TASK } from './actionTypes';
import * as boards from '../boards';

function newTask(title) {
  return {
    title,
    id: uuid(),
    board: boards.TODO
  };
}

function tasks(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, newTask(action.payload.title)];
    case MOVE_TASK:
      return state.map(
        task =>
          task.id === action.payload.taskId
            ? { ...task, board: action.payload.board }
            : task
      );
    default:
      return state;
  }
}

export default combineReducers({
  tasks
});
