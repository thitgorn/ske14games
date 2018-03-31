import React, { Component } from 'react'

import GameCard from './GameCard'

export class Home extends Component {
  render() {
    var data = this.props.games
    console.log(data)
    var cards = data.map((game,id)=> {
      return (
              <div key={id} className="col-md-4 col-sm-12 p-2">
                <GameCard game={game} />
              </div>
              )
    })
    return (
      <div className="container">
        <div className="row">
          {cards}
        </div>
      </div>
    )
  }
}

export default Home