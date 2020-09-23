import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import YourBotArmy from "./containers/YourBotArmy";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <YourBotArmy />
        <BotsPage />
      </div>
    );
  }
}

export default App;
