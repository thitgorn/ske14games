import React, { Component } from 'react'

export class GameUI extends Component {
    componentDidMount() {
        console.log("mounted")
    }
  render() {
    var game = this.props.game
    var url = game.game.url 
    return (
        <iframe src={url} title={game.game.title} style={{width:`100%` , height:'100vh'}} frameBorder="0" allowFullScreen></iframe>
    )
  }
}

export default GameUI  
