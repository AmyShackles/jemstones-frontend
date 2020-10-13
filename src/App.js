import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import { Leaderboard } from './components/Leaderboard.js'
import { NavLink } from './components/NavLink.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink to="/">Stone Leaderboard</NavLink>
          <NavLink to="/jam">Jam Leaderboard</NavLink>
          <NavLink to="/jem">Jem Leaderboard</NavLink>
          <NavLink to="/jom">Jom Leaderboard</NavLink>
          <NavLink to="/jum">Jum Leaderboard</NavLink>
        </nav>
      </header>
      <main>
        <Router>
          <Leaderboard type="total stones" exact path="/" />
          <Leaderboard type="jamstones" path="/jam" />
          <Leaderboard type="jemstones" path="/jem" />
          <Leaderboard type="jomstones" path="/jom" />
          <Leaderboard type="jumstones" path="/jum" />
        </Router>

      </main>
    </div>
  );
}

export default App;
