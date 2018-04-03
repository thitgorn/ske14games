import React, { Component } from 'react'

import * as routes from '../../config/routes'

import { Link } from 'react-router-dom'

export class Index extends Component {
  render() {
    var currentMenu = this.props.menu
    return (
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu" style={{ marginLeft:'10px' }}>
            <p className="menu-label">
                General
            </p>
              <ul className="menu-list">
                <li><Link to={routes.admin} className={ currentMenu === 'dashboard' ? 'is-active' : '' }>Dashboard</Link></li>
              </ul>
            <p className="menu-label">
              Game
            </p>
              <ul className="menu-list">
                <li><Link to={routes.viewgame} className={ currentMenu === 'viewgame' ? 'is-active' : '' }>View Game</Link></li>
                <li><Link to={routes.managegame} className={ currentMenu === 'managegame' ? 'is-active' : '' }>Manage Game</Link></li>
                <li><Link to={routes.addgame} className={ currentMenu === 'addgame' ? 'is-active' : '' }>Add Game</Link></li>
              </ul>
            <p className="menu-label">
              Administration
            </p>
              <ul className="menu-list">
                <li><Link to={routes.manageadmin} className={ currentMenu === 'manageadmin' ? 'is-active' : '' }>Manage Admin</Link></li>
              </ul>
          </aside>
        </div>
        <div className="column is-three-quarters">
          {this.props.component}
        </div>
      </div>
    )
  }
}

export default Index
