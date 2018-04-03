import React, { Component } from 'react'

import Home from './user/Home'
import Admin from './admin/Index'
import UserInfo from './user/UserInfo'
import { GameUI } from './user/GameUI'

import SignIn from './guest/SignIn'
import SignOut from './guest/SignOut'

import * as routes from '../config/routes'
import { Route } from 'react-router-dom'

import { DashBoard } from './admin/dashboard/DashBoard'
import { ManageAdmin } from './admin/mAdmin/ManageAdmin'
import { AddGame } from './admin/mGame/AddGame'
import { ManageGame } from './admin/mGame/ManageGame'
import { ViewGame } from './admin/mGame/ViewGame'

export class RouteController extends Component {
  render() {
        var games = this.props.games
        var admin = this.props.admin
        var firebase = this.props.firebase
        var setState = this.props.setState

        var gameRoutes = games.map( (game,id)=> {
            return <Route key={id} exact path={routes.gameURL(game.game.title)} component={ ()=> <GameUI game={game}/> }/>
        })

        return (
            <div>
                <Route exact path={routes.home} component={ ()=> <Home games={games}/>}/>
                <Route path={routes.signIn} component={ ()=> <SignIn firebase={firebase}/>} />
                <Route path={routes.signOut} component={ ()=> <SignOut setState={setState}/>}/>
                { admin ? 
                    <div>
                        <Route exact path={routes.admin} component={ ()=> <Admin menu="dashboard" component={ <DashBoard/> }/> } />
                        {/* viewGames */}
                        <Route exact path={routes.viewgame} component={ ()=> <Admin menu="viewgame" component={ <ViewGame game={games}/> }/>} />
                        {/* ManageGame */}
                        <Route exact path={routes.managegame} component={ ()=> <Admin menu="managegame" component={ <ManageGame games={games}/> }/>} />
                        {/* AddGame */}
                        <Route exact path={routes.addgame} component={ ()=> <Admin menu="addgame" component={ <AddGame games={games}/> }/>} />
                        {/* ManageAdmin */}
                        <Route exact path={routes.manageadmin} component={ ()=> <Admin menu="manageadmin" component={ <ManageAdmin/> }/>} />
                    </div>
                    : 
                    null 
                }
                <Route path={routes.userInfo} component={ ()=> <UserInfo/>}/>
                {gameRoutes}
            </div>
        )
  }
}

export default RouteController
