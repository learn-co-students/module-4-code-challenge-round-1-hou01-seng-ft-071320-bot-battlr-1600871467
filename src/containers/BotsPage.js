import React, { cloneElement, Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  state={
    data: [],
    selected: []
  }
  componentDidMount(){
    fetch('http://localhost:6001/bots')
    .then(res=>res.json())
    .then(bots=>{
      var botsGroup = []
      var botsSubGroup = []
      bots.forEach(b => {
        botsSubGroup.push(b)
        if (botsSubGroup.length === 4) {
          botsSubGroup = []
          botsGroup.push(botsSubGroup)
        }
      })
      this.setState({
        data: botsGroup
        })
      })
  }

  handleClick=(selectedBot)=>{
    console.log('click')
    if (this.state.selected.find(bot=>bot.id === selectedBot.id))
      return 
    else {
      this.setState({
        selected: [...this.state.selected,selectedBot]})
    }
    
  }
  handleDelete=(selectedBot)=>{
    fetch(`http://localhost:6001/bots/${selectedBot.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }})
    .then(res=>res.json())
    .then(()=>{
      var filteredBots = this.state.data.filter(b => b.id !== selectedBot.id)
      var botsGroup = []
      var botsSubGroup = []
      filteredBots.forEach(b => {
        botsSubGroup.push(b)
        if (botsSubGroup.length === 4) {
          botsSubGroup = []
          botsGroup.push(botsSubGroup)
        }
      })
      this.setState({
        data: botsGroup
        })
      })
  }

  handleRemove = (botId) => {
    this.setState({
      selected: this.state.selected.filter(s => s.id != botId)
    })
  }

  render() {
    return <div>
      <YourBotArmy handleRemove={this.handleRemove} selectedBot={this.state.selected} handleClick={this.handleClick}/>
      {this.state.data.map(botsGroup=>
      <BotCollection bots={botsGroup} handleClick={this.handleClick} handleDelete={this.handleDelete}/>)}
      </div>;
  }
}

export default BotsPage;
