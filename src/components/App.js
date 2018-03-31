import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

import * as routes from '../config/routes'

// firebase
import firebase from 'firebase'
// config
import { config } from '../config/firebase/config'
import { title } from '../config/config'

import verifyAdmin from '../util/verifyadmin'

import Home from './user/Home'
import Admin from './admin/Index'

import AdminNavbar from './admin/Navbar'
import UserNavbar from './user/Navbar'

import SignIn from './guest/SignIn'
import SignOut from './guest/SignOut'

import UserInfo from './user/UserInfo'

// Game loader
import { readGames } from '../util/gameUtil'
import { GameUI } from './user/GameUI';
// import mockgame from '../config/mockdata'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false,
      user : null,
      admin : false,
      username : "Guest",
      isLoaded : false,
      games : []
    }
    // initialize firebase
    firebase.initializeApp(config)
  }

  componentDidMount() {
    
    readGames.getData(this.setState.bind(this))

    // vertify cached user
    firebase.auth().onAuthStateChanged(
      (user) => {
        // check user login or not
        if(!!user) {
          this.setState( {user : user , isLogin : true, username : (user.displayName || "unidentify" )} )
          // check admin
          verifyAdmin.verify(firebase,user.uid,this.setState.bind(this))
        }
        this.setState( {isLoaded : true} )
      }
    );
    // this.setState({games: mockgame})
  }

  render() {
    var gameRoutes = this.state.games.map( (game,id)=>{
      return <Route key={id} exact path={routes.gameURL(game.game.title)} component={ ()=> <GameUI game={game}/> }/>
    })
    return (
      <Router>
        <div>
          { this.state.admin ? <AdminNavbar title={title} username={this.state.username}/> : <UserNavbar title={title} username={this.state.username}/>}

          { this.state.isLoaded ? 
            <Switch>
              <Route exact path={routes.home} component={ ()=> <Home games={this.state.games}/>} />
              <Route path={routes.signIn} component={ ()=> <SignIn firebase={firebase}/>} />
              <Route path={routes.signOut} component={ ()=> <SignOut setState={this.setState.bind(this)}/>}/>
              { this.state.admin ? <Route exact path={routes.admin} component={ ()=> <Admin isAdmin={this.state.admin} games={this.state.games}/>} /> : null }
              <Route path={routes.userInfo} component={ ()=> <UserInfo/>}/>
              {gameRoutes}
              <Route component={NoMatch} />
            </Switch>
            :
            <div>หมุนๆ</div>
          }
        </div>
      </Router>
    );
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>
      Page <code>{location.pathname}</code> Not found!
    </h3>
  </div>
);

export default App;
