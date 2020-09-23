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
      this.setState({
        data: bots
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
  handleDelete=(e, selectedBot)=>{
    fetch(`http://localhost:6001/bots/${selectedBot.id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }})
    .then(res=>res.json())
    .then(()=>{
      var filteredBots = this.state.data.filter(b => b.id !== selectedBot.id)
      this.setState({
        data: filteredBots
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
      <YourBotArmy handleRemove={this.handleRemove} selectedBot={this.state.selected} handleClick={this.handleClick} handleDelete={this.handleDelete}/>
      <BotCollection bots={this.state.data} handleClick={this.handleClick} handleDelete={this.handleDelete}/>)
      </div>;
  }
}

export default BotsPage;
