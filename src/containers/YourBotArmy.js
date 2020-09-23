import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  // state={
  //   selected: this.props.selectedBot
  // }

  render() {
    console.log({selected: this.props.selectedBot})
    // if (!this.props.selectedBot) return null
    // console.log(this.state.selected.type)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
               {this.props.selectedBot&& this.props.selectedBot.forEach(b=> <BotCard bot={b} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
