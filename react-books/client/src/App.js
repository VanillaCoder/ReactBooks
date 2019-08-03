import React, { Component } from "react";
import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Books from "./components/Books";
class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
          </div>
          <Jumbotron />
          <div className="row">
          <Books />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
