import React, { Component } from 'react'

import GameCard from './GameCard'

export class Home extends Component {
  render() {
    var data = this.props.games
    var cards = data.map((game,id)=> {
      return (
              <div key={id} className="col-md-4 col-sm-12 p-3">
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
