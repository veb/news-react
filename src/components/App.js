import React, { Component } from "react";
// import LinkList from "./LinkList";
import LinkList from "./LinkList";
import { Container, Button } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import Logo from "images/logo.png";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="topbar"></div>
        <div class="container">
          <div class="topbar"></div>
          <div class="page-header">
            <a class="btn btn-lg pull-right" href="/add/">
              <Button variant="primary">
                <FaThumbsUp /> Ask Question
              </Button>
            </a>
            <a href="/">
              <img width="200px" src={Logo} />
            </a>
          </div>
          <LinkList />
          <hr />
          <center>
            <a href="mialto:sup@dankoverflow.com">Contact</a>
          </center>
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
