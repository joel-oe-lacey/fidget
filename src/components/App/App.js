import React from 'react';
import './App.scss';
import Game from '../Game/Game';
import Scoreboard from '../Scoreboard/Scoreboard';

function App() {
  return (
    <section className="App">
      <Game />
      <Scoreboard />
    </section>
  );
}

export default App;
