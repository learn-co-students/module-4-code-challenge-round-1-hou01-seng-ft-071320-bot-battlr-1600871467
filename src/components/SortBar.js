import React from "react";

export default class SortBar extends React.Component {
    render() {
        return(
            <div>
                
                <p>Sort:<select onChange={(e) => this.props.sortBots(e)}>
                <option value="health">Health</option>
                <option value="damage">Damage</option>
                <option value="armor">Armor</option>
                </select></p>
            </div>
        )
    }
}