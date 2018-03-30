import React, { Component } from 'react'

import Game from '../../../model/Game'
import { addGame } from '../../../util/gameUtil'

export class AddGame extends Component {

  handleAdd() {
    var game = new Game(1,"Game 1" ,"Testing add" , "https://www.google.co.th" , "www.google.co.th" , 1)
    addGame.add(game)
  }

  render() {
    return (
      <div>
        AddGame instruction
        <button onClick={()=>this.handleAdd()}>ADD</button>
      </div>
    )
  }
}

export default AddGame
