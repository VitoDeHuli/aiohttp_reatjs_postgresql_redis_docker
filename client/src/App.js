import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MessageList from "./components/MessageList";
import MessageDetail from "./components/MessageDetail";
import Help from "./components/Help";


function App() {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <div>
        <Router>
          <Navbar bg={"dark"} expand={"lg"} variant={"dark"}>
            <Container>
              <Navbar.Brand>
                <img src={logo} className="App-logo" alt="logo" />
                raiohttp_reatjs_postgresql_redis_docker
              </Navbar.Brand>
              <Nav className="navigation mr-auto">
                <Link to={"/"}>Home</Link>
                <Link to={"/messages"}>Messages</Link>
                <Link to={"/help"}>Help</Link>
              </Nav>
            </Container>
          </Navbar>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/messages"} component={MessageList} />
          <Route exact path={'/messages/:pk'} component={MessageDetail} />
          <Route exact path={'/help'} component={Help} />
        </Router>
      </div>
    </div>
  );
}

export default App;
