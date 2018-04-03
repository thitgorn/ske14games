import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { gameURL } from '../../config/routes'

export class componentName extends Component {
  render() {
    var game = this.props.game
    return (
        <Link to={gameURL(game.game.title)} className="p-2">
            <div className="card" style={{boxShadow:'1px 1px 20px #888888'}}>
                <div className="text-center">
                    <img src={game.game.img} alt={game.game.img} className="card-img-top" style={{maxWidth:'362.33px' , maxHeight:'100%'}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{game.game.title}</h5>
                    <p className="card-text">{game.game.description}</p>
                </div>
            </div>
        </Link>
    )
  }
}

export default componentName
