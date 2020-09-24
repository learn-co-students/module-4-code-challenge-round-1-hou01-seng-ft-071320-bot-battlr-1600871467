import React, { Component } from "react";
import BotCard from '../components/BotCard'
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
 
  render() {
    // console.log({s: this.props.selectedBot})
    if (this.props.selectedBot) {
     return <BotSpecs bot={this.props.selectedBot} handleEnlist={this.props.handleEnlist} renderGoBack={this.props.renderGoBack}/>
    }

    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(b => 
            <BotCard bot={b} 
              handleDelete={this.props.handleDelete}  
              handleClick={this.props.handleClick}
              />)}
        </div>
      </div>
    );
  }
}

export default BotCollection;
