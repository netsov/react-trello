import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import Board from './components/Board';
import AddCard from './components/AddTask';
import TaskPreview from './components/TaskPreview';
import { store } from './redux/store';
import * as boards from './boards';

function App() {
  return (
    <Provider store={store}>
      <main>
        {boards.ALL.map(board => (
          <Board key={board} board={board}>
            {board === boards.TODO && <AddCard />}
          </Board>
        ))}
        <TaskPreview />
      </main>
    </Provider>
  );
}

export default App;
