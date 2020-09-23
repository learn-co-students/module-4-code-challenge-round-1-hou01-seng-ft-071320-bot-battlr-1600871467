import React, { Component } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import SortBar from "./SortBar"


class BotsPage extends Component {
  //start here with your code for step one
  state ={
    bots: [],
    archiveBots: [],
    botArmy:[],
    selectedBot: null,
    showSpecs: false,
    sort: null
  }

  componentDidMount(){
    this.getBots()
  }

  getBots = () =>{
    fetch('http://localhost:6001/bots')
    .then(res => res.json())
    .then(bots => {
      //console.log(bots)
      this.setState({
        bots: bots,
        archiveBots: bots
      })
    })
  }

  handleAddBotToArmy = (props)=>{
    //console.log(props.bot)
    this.addBotToArmy(props.bot)
  }

  addBotToArmy = (bot) =>{
    //console.log(bot)
    let botArmy = this.state.botArmy
    botArmy.push(bot)
    let uniqBotArmy = [...new Set(botArmy)]
    this.setState({
      ...this.state,
      botArmy: uniqBotArmy
    })
  }

  handleRemoveFromBotArmy = (props) =>{
    //console.log(props.bot)
    this.removeFromBotArmy(props.bot)
  }

  removeFromBotArmy = (botToRemove) => {
    let botArmy = this.state.botArmy.filter(bot =>{
      if(bot.id !== botToRemove.id){
        return bot
      }
    })
    this.setState({
      ...this.state,
      botArmy: botArmy
    })
  }

  
  handleDeleteBot = (props) =>{
    //console.log(`http://localhost:6001/bots/${props.bot.id}`)
    fetch(`http://localhost:6001/bots/${props.bot.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(bot =>{
      console.log('bot released into the wild...')
      this.deleteBotFromState(props.bot)
    })
  }

  deleteBotFromState = (botToDelete) => {
    let bots = this.state.bots.filter(bot =>{
      if(bot.id !== botToDelete.id){
        return bot
      }
    })
    let botArmy = this.state.botArmy.filter(bot =>{
      if(bot.id !== botToDelete.id){
        return bot
      }
    })
    this.setState({
      ...this.state,
      botArmy: botArmy,
      bots: bots,
      showSpecs: false
    })
  }

  handleShowBot = (props) =>{
    //console.log(props.bot)
    this.setState({
      ...this.state,
      selectedBot: props.bot,
      showSpecs: true
    })
  }

  handleGoBackClick = () =>{
    this.setState({
      ...this.state,
      selectedBot: null,
      showSpecs: false
    })
  }

  handleEnlistClick = (props) =>{
    //console.log(props.bot)
    this.addBotToArmy(props.bot)
  }

  handleSortType = (sortType) =>{
    //console.log(sortType)
    if(sortType === 'health'){
      this.sortHealth()
    }else if(sortType === 'damage'){
      this.sortDamage()
    }else if(sortType === 'armor'){
      this.sortArmor()
    }
  }

  sortHealth = () =>{
    let botList = this.state.bots.sort((a,b) =>{
      return a.health - b.health
    })
    this.setState({
      ...this.state,
      bots: botList,
      showSpecs: false
    })
  }

  sortDamage = () =>{
    let botList = this.state.bots.sort((a,b) =>{
      return a.damage - b.damage
    })
    this.setState({
      ...this.state,
      bots: botList,
      showSpecs: false
    })
  }

  sortArmor = () =>{
    let botList = this.state.bots.sort((a,b) =>{
      return a.armor - b.armor
    })
    this.setState({
      ...this.state,
      bots: botList,
      showSpecs: false
    })
  }

  render() {
    return <div>{/* put your components here */}
    <YourBotArmy botArmy={this.state.botArmy} 
                  handleRemoveFromBotArmy={this.handleRemoveFromBotArmy}
                    handleDeleteBot={this.handleDeleteBot}
                      />
    <SortBar handleSortType={this.handleSortType}/><br/><br/>
    {this.state.showSpecs ? 
      <BotSpecs bot={this.state.selectedBot} 
                  handleGoBackClick={this.handleGoBackClick}
                    handleEnlistClick={this.handleEnlistClick}
                      />
      :
      <BotCollection bots={this.state.bots} 
                      handleAddBotToArmy={this.handleAddBotToArmy} 
                        handleDeleteBot={this.handleDeleteBot}
                          handleShowBot={this.handleShowBot}/> 
    }
    </div>;
  }
}

export default BotsPage;
