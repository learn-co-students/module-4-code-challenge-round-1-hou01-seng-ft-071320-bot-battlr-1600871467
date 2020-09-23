import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends Component {
  //start here with your code for step one
  state = {
    allBots: [],
    bots: [],
    yourBotArmy: [],
  }
  componentDidMount() {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => this.setState({
      allBots: bots,
      bots: bots
    }))
  }

  addToArmy = (bot) => {
    if (this.state.yourBotArmy.includes(bot)){
      return
    } else {
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, bot]
      })
    } 
  }

  removeFromArmy = (botToRemove) => {
    this.setState({
      yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== botToRemove)
    })
  }

  releaseFromService = (retiredBot) => {
    fetch(`http://localhost:6001/bots/${retiredBot.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    
    this.setState({
      bots: this.state.bots.filter(bot => bot !== retiredBot),
      yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== retiredBot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} bots={this.state.yourBotArmy} releaseFromService={this.releaseFromService}/>
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots} releaseFromService={this.releaseFromService} />
      </div>
    )
  }
}

export default BotsPage;
