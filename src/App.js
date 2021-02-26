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
                  <NavLink to="/col">Colestones</NavLink>
                  <NavLink to="/ger">Gerstones</NavLink>
                  <NavLink to="/har">Harrystones</NavLink>
                  <NavLink to="/jam">Jamstones</NavLink>
                  <NavLink to="/jan">Janstones</NavLink>
                  <NavLink to="/jem">Jemstones</NavLink>
                  <NavLink to="/jom">Jomstones</NavLink>
                  <NavLink to="/jum">Jumstones</NavLink>
              </nav>
          </header>
          <main>
              <Router>
                  <Leaderboard type="all stones" exact path="/" />
                  <Leaderboard type="colestones" path="/col" />
                  <Leaderboard type="gerstones" path="/ger" />
                  <Leaderboard type="harrystones" path="/har" />
                  <Leaderboard type="jamstones" path="/jam" />
                  <Leaderboard type="janstones" path="/jan" />
                  <Leaderboard type="jemstones" path="/jem" />
                  <Leaderboard type="jomstones" path="/jom" />
                  <Leaderboard type="jumstones" path="/jum" />
              </Router>
          </main>
      </div>
  );
}

export default App;
