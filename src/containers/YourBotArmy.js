import React, { Component } from "react";
import BotCard from '../components/BotCard'

class YourBotArmy extends Component {
  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
               {this.props.botArmy && this.props.botArmy.map(b=> <BotCard botArmy={this.props.botArmy} handleRemove={this.props.handleRemove} handleClick={this.props.handleClick} handleDelete={this.props.handleDelete} bot={b} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
