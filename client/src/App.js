import React, { Component } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Description } from "./components/Description";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Description />
        <Footer />
      </div>
    );
  }
}
export default App;
