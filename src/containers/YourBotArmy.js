import React, { Component } from "react";
import BotCard from "../components/BotCard"


class YourBotArmy extends Component {
  //your bot army code here...


  handleClick = (bot) =>{
    //console.log('click')
    this.props.handleRemoveFromBotArmy(bot)
  }

  handleDeleteClick = (bot) =>{
    this.props.handleDeleteBot(bot)
  }

  renderBots = () =>{
    //console.log(this.props.bots)
    return this.props.botArmy.map(bot =>{
      return <BotCard bot={bot} handleClick={this.handleClick} key={bot.id} handleDeleteClick={this.handleDeleteClick} inBotArmy={true}/>
    })

  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.renderBots()}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
