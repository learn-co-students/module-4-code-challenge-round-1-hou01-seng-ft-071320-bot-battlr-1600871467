import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from '../components/BotSpecs'

class BotCollection extends Component {
  state = {
    clicked: []
  }

  handleClick = (bot) => {
    console.log(bot)

    let a = []
    a.push(bot)

    this.setState({
      clicked: a
    })
  }

  goBackClick = () => {
    console.log('bye')

    this.setState({
      clicked: []
    })
  }

  render() {
    let bots = this.props.bots

    let ogBotCard = (
        <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => <BotCard
            key={bot.id}
            bot={bot}
            cardAction={this.props.cardAction}
            junkingBot={this.props.junkingBot}
            handleClick={this.handleClick}
          />)}
          Collection of all bots
        </div>
      </div>
    )

    return (
            this.state.clicked.length === 0 ? ogBotCard : <BotSpecs bot={this.state.clicked[0]} goBackClick={this.goBackClick} cardAction={this.props.cardAction}/>
    );
  }
}

export default BotCollection;
