import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        raiohttp_reatjs_postgresql_redis_docker
      </header>
      <div>
        <Router>
          <p>
            <Link to="/">Home</Link>
          </p>
          <hr />
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
