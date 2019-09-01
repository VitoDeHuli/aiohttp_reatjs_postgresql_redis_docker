import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import MessageList from "./components/MessageList";
import MessageDetail from "./components/MessageDetail";


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
              <Navbar.Brand href="/">
                <img src={logo} className="App-logo" alt="logo" />
                raiohttp_reatjs_postgresql_redis_docker
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href={"/messages"}>Messages</Nav.Link>
                <Nav.Link href={"/help"}>Help</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/messages"} component={MessageList} />
          <Route exact path={'/messages/:pk'} component={MessageDetail} />
        </Router>
      </div>
    </div>
  );
}

export default App;
