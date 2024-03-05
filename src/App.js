import "./App.css";
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default hot(module)(App);
