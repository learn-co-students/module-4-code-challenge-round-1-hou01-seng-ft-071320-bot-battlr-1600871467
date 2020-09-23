import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    let bots = this.props.bots
    return (
      <div className="ui four column grid">
        <div className="row">
          {bots.map(bot => <BotCard
            key={bot.id}
            bot={bot}
            cardAction={this.props.cardAction}
            junkingBot={this.props.junkingBot}
          />)}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
