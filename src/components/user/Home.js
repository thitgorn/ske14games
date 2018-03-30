import React, { Component } from 'react'

export class Home extends Component {
  render() {
    var data = this.props.games
    console.log(data)
    var cards = data.map((game,id)=> {
      return (
                <div key={id} className="col-md-4 col-sm-12 p-2">
                  <div className="card">
                    <div className="card-header">
                      {game.game.title}
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-6">
                          <img src="" alt="mock-img" style={{border: '1px solid black' , minWidth: '120px' , minHeight: ' 120px'}}/>
                        </div>
                        <div className="col-6">
                          {game.game.description}
                        </div>
                      </div>
                    </div>
                  </div>
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