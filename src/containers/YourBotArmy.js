import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
               {this.props.selectedBot&& this.props.selectedBot.map(b=> <BotCard handleRemove={this.props.handleRemove} handleDelete={this.props.handleDelete} bot={b} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
