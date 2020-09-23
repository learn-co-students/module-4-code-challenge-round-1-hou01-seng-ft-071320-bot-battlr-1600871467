import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  
  handleClick = (bot) => {
    console.log('bye')
  }

  render() {
    let bots = this.props.botArmy
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {bots.map(bot => <BotCard
            key={bot.id}
            bot={bot}
            cardAction={this.props.cardAction}
            junkingBot={this.props.junkingBot}
            handleClick={this.handleClick}
          />)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
