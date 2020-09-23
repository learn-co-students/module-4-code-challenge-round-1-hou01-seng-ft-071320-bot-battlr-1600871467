import React, { Component } from "react";



class SortBar extends Component {
    //your bot army code here...
  
    handleClick = (e) =>{
        //console.log(e.target.value)
        this.props.handleSortType(e.target.value)
    }
  
    render() {
      return (
        <div className="sortbar">
          <button 
                className="ui mini red button"
                value='health'
                onClick={this.handleClick}
              >
                Sort By Health
            </button>
            <button 
                className="ui mini red button"
                value='damage'

                onClick={this.handleClick}
              >
                Sort By Damage
            </button>
            <button 
                className="ui mini red button"
                value='armor'

                onClick={this.handleClick}
              >
                Sort By Armor
            </button>
        </div>
      );
    }
  }
  
  export default SortBar;
  