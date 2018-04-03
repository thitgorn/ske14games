import React, { Component } from 'react'
import ManageAdmin from './mAdmin/ManageAdmin'
import { DashBoard } from './dashboard/DashBoard';
import { ViewGame } from './mGame/ViewGame';
import { ManageGame } from './mGame/ManageGame';
import { AddGame } from './mGame/AddGame';

export class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu : "dashboard",
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(menu) {
    this.setState({
      menu : menu
    })
  }

  render() {
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu" style={{ marginLeft:'10px' }}>
            <p className="menu-label">
                General
            </p>
              <ul className="menu-list">
                <li><a className={ this.state.menu === 'dashboard' ? 'is-active' : '' } onClick={()=>{this.handleClick('dashboard')}}>Dashboard</a></li>
              </ul>

            <p className="menu-label">
              Game
            </p>
              <ul className="menu-list">
                <li><a className={ this.state.menu === 'viewgame' ? 'is-active' : '' } onClick={()=>{this.handleClick('viewgame')}}>View Game</a></li>
                <li><a className={ this.state.menu === 'managegame' ? 'is-active' : '' } onClick={()=>{this.handleClick('managegame')}}>Manage Game</a></li>
                <li><a className={ this.state.menu === 'addgame' ? 'is-active' : '' } onClick={()=>{this.handleClick('addgame')}}>Add Game</a></li>
              </ul>
            <p className="menu-label">
              Administration
            </p>
              <ul className="menu-list">
                <li><a className={ this.state.menu === 'manageadmin' ? 'is-active' : '' } onClick={()=>{this.handleClick('manageadmin')}}>Manage Admin</a></li>
              </ul>
          </aside>
        </div>
        <div className="column is-three-quarters">

            { this.state.menu === 'dashboard' ? <DashBoard/> : null}

            { this.state.menu === 'viewgame' ? <ViewGame games={this.props.games}/> : null}

            { this.state.menu === 'managegame' ? <ManageGame games={this.props.games}/> : null}

            { this.state.menu === 'addgame' ? <AddGame games={this.props.games}/> : null}

            { this.state.menu === 'manageadmin' ? <ManageAdmin/> : null}
        </div>
      </div>
    )
  }
}

export default Index
