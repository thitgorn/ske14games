import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { gameURL } from '../../config/routes'

export class componentName extends Component {
  render() {
    var game = this.props.game 
    return (
      <div>
        <Link to={gameURL(game.game.title)}>
            <div className="card">
                <div className="card-header">
                    {game.game.title}
                </div>
                <div align="center" className="m-1">
                    <img src={game.game.img} alt="mock-img" className="card-img-top" style={{maxWidth:'279px' , maxHeight:'180px'}}/>
                </div>
                <div className="card-body">
                    {game.game.description}
                </div>
            </div>
        </Link>
      </div>
    )
  }
}

export default componentName
