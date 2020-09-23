import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import SortBar from "../components/SortBar";


class BotsPage extends Component {
  //start here with your code for step one
  state = {
    allBots: [],
    bots: [],
    yourBotArmy: [],
    showInfo: false,
    specificBot: {}
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
    this.setState({
      ...this.state,
      showInfo: true,
      specificBot: bot
    })
  }

  enlistBot = (bot) => {
    if (this.state.yourBotArmy.includes(bot)){
      return
    } else {
      this.setState({
        ...this.state,
      showInfo: false,
      specificBot: {},
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

  renderBotsAgain = () => {
    this.setState({
      ...this.state,
      showInfo: false,
      specificBot: {}
    })
  }

  sortBots = (e) => {
    let sortName = e.target.value
    if(sortName === 'health') {
      this.setState({
        ...this.state,
        bots: this.state.bots.sort((a, b) => parseFloat(a.health) - parseFloat(b.health))
      })
    } else if (sortName === 'damage') {
        this.setState({
          ...this.state,
          bots: this.state.bots.sort((a, b) => parseFloat(a.damage) - parseFloat(b.damage))
        })
    } else if (sortName === 'armor') {
      this.setState({
        ...this.state,
        bots: this.state.bots.sort((a, b) => parseFloat(a.armor) - parseFloat(b.armor))
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy removeFromArmy={this.removeFromArmy} bots={this.state.yourBotArmy} releaseFromService={this.releaseFromService}/>
        
        <SortBar sortBots={this.sortBots}/>
        <br></br>
        {this.state.showInfo ? 
        <BotSpecs bot={this.state.specificBot} renderBotsAgain={this.renderBotsAgain} enlistBot={this.enlistBot} /> 
        : 
        <BotCollection addToArmy={this.addToArmy} bots={this.state.bots} releaseFromService={this.releaseFromService} /> }
        
      </div>
    )
  }
}

export default BotsPage;
