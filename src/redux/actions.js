import {ADD_TASK, MOVE_TASK} from "./actionTypes";

export function addTask(title) {
  return {
    type: ADD_TASK,
    payload: {
      title
    }
  }
}

export function moveTask(taskId, board) {
  return {
    type: MOVE_TASK,
    payload: {
      taskId,
      board
    }
  }
}