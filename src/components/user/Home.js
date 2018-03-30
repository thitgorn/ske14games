import React, { Component } from 'react'

var mockdata = [{
  title : "Flappybird",
  description : "Flappy bird game",
  url : "",
  imgurl : ""
} , 
{
  title : "Flappybird",
  description : "Flappy bird game",
  url : "",
  imgurl : ""
} , 
{
  title : "Flappybird",
  description : "Flappy bird game",
  url : "",
  imgurl : ""
} ,
{
  title : "Flappybird",
  description : "Flappy bird game",
  url : "",
  imgurl : ""
}]

export class Home extends Component {
  render() {
    var cards = mockdata.map((item)=> {
      return (
                <div className="col-md-4 col-sm-12 p-2">
                  <div className="card">
                    <div className="card-header">
                      {item.title}
                    </div>
                    <div className="card-body">
                      <img src="" alt="mock-img" style={{border: '1px solid black' , minWidth: '120px' , minHeight: ' 120px'}}/>
                      {item.description}
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