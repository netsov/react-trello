import { ADD_TASK, MOVE_TASK, SELECT_TASK, UPDATE_TASK } from './actionTypes';

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title
    }
  };
}

export function moveTask(taskId) {
  return {
    type: MOVE_TASK,
    payload: {
      taskId
    }
  };
}

export function selectTask(taskId) {
  return (dispatch, getState) =>
    dispatch({
      type: SELECT_TASK,
      payload: {
        task: getState().tasks.find(t => t.id === taskId)
      }
    });
}

export function updateTask(task) {
  return {
    type: UPDATE_TASK,
    payload: {
      task
    }
  };
}
