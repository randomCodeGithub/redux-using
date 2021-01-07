import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewComp from "./NewComp";

class App extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
  };

  render() {
    return (
      <div className="App">
        <h3 style={this.styles}>HI!</h3>
        <NewComp />
      </div>
    );
  }
}

export default App;
