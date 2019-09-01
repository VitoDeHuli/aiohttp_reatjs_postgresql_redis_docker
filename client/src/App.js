import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MessageList from "./components/MessageList";
import MessageDetail from "./components/MessageDetail";

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
            <Link to={"/"}>Home</Link>&nbsp;|&nbsp;
            <Link to={"/messages"}>Messages</Link>&nbsp;|&nbsp;
            <Link to={"/help"}>Help</Link>
          </p>
          <hr />
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/messages"} component={MessageList} />
          <Route exact path={'/messages/:pk'} component={MessageDetail} />
        </Router>
      </div>
    </div>
  );
}

export default App;
