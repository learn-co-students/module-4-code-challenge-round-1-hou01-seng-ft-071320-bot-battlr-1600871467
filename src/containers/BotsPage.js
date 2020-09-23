import React, { Component } from "react";
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends Component {
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount = () => {
    this.getBots()
  }

  getBots = () => {
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => this.setBots(bots))
  }

  setBots = (botsArg) => {
    this.setState({
      bots: botsArg
    })
  }

  addBotToArmy = (botRecruit) => {
    let currentBotIds = this.state.botArmy.map(bot => bot.id)

    if (!currentBotIds.includes(botRecruit.id)){
      this.setState({
        botArmy: [...this.state.botArmy, botRecruit]
      })
    }
  }

  removeBotFromArmy = (bootedBot) => {
    let myNewArmy = this.state.botArmy.filter(bot => bot.id !== bootedBot.id)
    
    this.setState({ 
      botArmy: myNewArmy
     })
  }

  junkingBot = (junkBot) => {
    
    fetch(`http://localhost:6001/bots/${junkBot.id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'}
      })
      .then(res => res.json())
      .then(this.renderBotsExcept(junkBot))
  }

  renderBotsExcept = (poorBot) => {

    let botsToRender = this.state.bots.filter(bot => bot.id !== poorBot.id)
    let botArmyToRender = this.state.botArmy.filter(bot => bot.id !== poorBot.id)

    this.setState({
      bots: botsToRender,
      botArmy: botArmyToRender
    })
    
  }

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots} cardAction={this.addBotToArmy} junkingBot={this.junkingBot} />}
        {<YourBotArmy botArmy={this.state.botArmy} cardAction={this.removeBotFromArmy} junkingBot={this.junkingBot} />}
      </div>
    )
  }
}

export default BotsPage;
