import React, { Component } from 'react'

import Game from '../../../model/Game'
import { addGame } from '../../../util/gameUtil'

export class AddGame extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input : {
        id : 0,
        title : "",
        description : "",
        url : "",
        img : "",
        enable : 0,
      } ,
      validate : {
        id : false,
        title : false,
        url : true,
        img : true,
      }
    }
  }

  handleAdd() {
    var game = new Game(this.state.input.id , this.state.input.title , this.state.input.description , this.state.input.url , this.state.input.img , this.state.input.enable)
    addGame.add(game)
  }

  handleId(event) {
    // change value
    var temp = this.state.input
    temp.id = parseInt(event.target.value,10)
    // id logic
    var arr = this.props.games.filter( (game)=>{
      return game.game.id === temp.id
    } )
    var vtemp = this.state.validate
    arr.length===0 ? vtemp.id = true : vtemp.id = false
    this.setState({input : temp , validate : vtemp })
  }

  handleTitle(event) {
    // change value
    var temp = this.state.input
    temp.title = event.target.value
    // name logic
    var arr = this.props.games.filter( (game)=>{
      return game.game.title.toLowerCase() === temp.title.toLowerCase()
    } )
    var vtemp = this.state.validate
    arr.length===0 ? vtemp.title = true : vtemp.title = false

    this.setState({input : temp , validate : vtemp})
  }

  handleDescription(event) {
    var temp = this.state.input
    temp.description = event.target.value
    this.setState({input : temp})
  }

  handleImg(event) {
    var temp = this.state.input
    temp.img = event.target.value
    this.setState({input : temp})
  }

  handleUrl(event) {
    var temp = this.state.input
    temp.url = event.target.value
    this.setState({input : temp})
  }

  handleEnable(event) {
    var temp = this.state.input
    temp.enable = (temp.enable + 1) % 2
    this.setState({input : temp})
  }

  render() {
    return (
      <div>
        Add game
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <label className="label">ID</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" onChange={this.handleId.bind(this)}/>
            </div>
            <div className="col-md-8">
              { !this.state.validate.id && <p className="help is-danger">this ID is already in used</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label className="label">Name</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="text" placeholder="this will be url" onChange={this.handleTitle.bind(this)}/>
            </div>
            <div className="col-md-8">
              { !this.state.validate.title && <p className="help is-danger">this name is already in used</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label className="label">Description</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="text" placeholder="detail" onChange={this.handleDescription.bind(this)}/>
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">URL</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="text" placeholder="website url" onChange={this.handleUrl.bind(this)}/>
            </div>
            {/* <div className="col-md-8">
              <p class="help is-danger">invalid website url</p>
            </div> */}
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">IMG URL</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="text" placeholder="image source" onChange={this.handleImg.bind(this)}/>
            </div>
            {/* <div className="col-md-8">
              <p class="help is-danger">invalid source</p>
            </div> */}
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">Enable</label>
            </div>
            <div className="col-md-5">
              <label className="checkbox">
                <input type="checkbox" onChange={ this.handleEnable.bind(this)}/>
                &nbsp; enable
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">

            </div>
            <div className="col-md-4">
              { ( this.state.validate.id && this.state.validate.img && this.state.validate.title && this.state.validate.url )
                  ? 
                  <button className="button is-primary" onClick={()=> this.handleAdd()}>submit</button>
                  :
                  <button className="button is-primary" disabled>submit</button>
                  }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddGame
