import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { Leaderboard } from "./components/Leaderboard.js";
import { NavLink } from "./components/NavLink.js";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <NavLink to="/">Total</NavLink>
                    <NavLink to="/amy">Amy</NavLink>
                    <NavLink to="/col">Cole</NavLink>
                    <NavLink to="/ger">Ger</NavLink>
                    <NavLink to="/har">Harry</NavLink>
                    <NavLink to="/jam">Jam</NavLink>
                    <NavLink to="/jan">Jan</NavLink>
                    <NavLink to="/jem">Jem</NavLink>
                    <NavLink to="/jom">Jom</NavLink>
                    <NavLink to="/jum">Jum</NavLink>
                </nav>
            </header>
            <main>
                <Router>
                    <Leaderboard type="all stones" exact path="/" />
                    <Leaderboard type="amystones" path="/amy" />
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
