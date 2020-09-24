import React, { cloneElement, Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends Component {
  state={
    data: [],
    selectedBot: null,
    botArmy: []
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

  handleEnlist=(selectedBot)=>{
    console.log('click')
    if (this.state.botArmy.find(bot=>bot.id === selectedBot.id))
      return 
    else {
      this.setState({
        botArmy: [...this.state.botArmy,selectedBot]})
    }
    
  }
  handleDelete=(e,selectedBot)=>{
    e.stopPropagation();
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

handleRemove = (selected) => {
  if (this.state.botArmy.find(bot=>bot.id===selected.id)) {
  this.setState({
    botArmy: this.state.botArmy.filter(s => s.id != selected.id)
  })
}}
handleSelect=(selected)=>{
  // console.log({selected})
  this.setState({
    selectedBot: selected
  })
}
renderGoBack=()=>{
  // console.log(this.state.selectedBot)
  this.setState({
    selectedBot: null
  })
}

  render() {
    // console.log({a1: this.state.selected})

    return <div>
      <YourBotArmy handleRemove={this.handleRemove} botArmy={this.state.botArmy}  handleDelete={this.handleDelete} handleClick={this.handleRemove}/>
      <BotCollection bots={this.state.data} selectedBot={this.state.selectedBot} handleDelete={this.handleDelete} handleClick={this.handleSelect} handleEnlist={this.handleEnlist} renderGoBack={this.renderGoBack}/>)
      </div>;
  }
}

export default BotsPage;
