import React, { Component, Fragment } from "react";

import { Header } from "./components/Header";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
