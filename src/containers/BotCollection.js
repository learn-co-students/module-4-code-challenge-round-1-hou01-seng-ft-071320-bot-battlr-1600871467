import React, { Component } from "react";
import BotCard from '../components/BotCard'

class BotCollection extends Component {
  //your code here

  render() {
    // console.log(this.props)
    return (
      
      <div className="ui four column grid">
        <div className="row">

        {this.props.bots.map(b => <BotCard bot={b} handleClick={this.props.handleClick} handleDelete={this.props.handleDelete}/>)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
