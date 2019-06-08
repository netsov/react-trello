import React from 'react';
import './App.css';
import { Board } from './components/Board';
import { AddCard } from './components/AddCard';

const boards = [{ name: 'Todo' }, { name: 'Doing' }, { name: 'Done' }];

function App() {
  return (
    <main>
      {boards.map(board => (
        <Board key={board.name} board={board}>
          {board.name === 'Todo' && <AddCard />}
        </Board>
      ))}
    </main>
  );
}

export default App;
