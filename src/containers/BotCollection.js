import React, { Component } from "react";
import BotCard from "../components/BotCard"


class BotCollection extends Component {
  //your code here

  handleClick = (bot) =>{
    //console.log('click')
    this.props.handleShowBot(bot)
  }

  handleDeleteClick = (bot) =>{
    this.props.handleDeleteBot(bot)
  }

  renderBots = () =>{
    //console.log(this.props.bots)
    return this.props.bots.map(bot =>{
      return <BotCard bot={bot} handleClick={this.handleClick} key={bot.id} handleDeleteClick={this.handleDeleteClick} inBotArmy={false}/>
    })

  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {/*...and here..*/}
          {this.renderBots()}
        </div>
      </div>
    );
  }
}

export default BotCollection;
