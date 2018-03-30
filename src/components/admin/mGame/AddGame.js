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
        Add game
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <label className="label">ID</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label className="label">Name</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <label className="label">Description</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">URL</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">IMG URL</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-2">
              <label className="label">Enable</label>
            </div>
            <div className="col-md-2">
              <input className="input" type="number" placeholder="id" />
            </div>
            <div className="col-md-8">
              <p class="help is-danger">this ID is already in used</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddGame
