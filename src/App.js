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
          <NavLink to="/">Stones</NavLink>
          <NavLink to="/jam">Jams</NavLink>
          <NavLink to="/jem">Jems</NavLink>
          <NavLink to="/jom">Joms</NavLink>
          <NavLink to="/jum">Jums</NavLink>
        </nav>
      </header>
      <main>
        <Router>
          <Leaderboard type="all stones" exact path="/" />
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
