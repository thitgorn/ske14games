import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom'

// firebase
import firebase from 'firebase'
// config
import { config } from '../config/firebase/config'
import { title } from '../config/config'

// import verifyAdmin from '../util/verifyadmin'

import AdminNavbar from './admin/Navbar'
import UserNavbar from './user/Navbar'

// Game loader
import { readGames } from '../util/gameUtil'
import { RouteController } from './RouteController';
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
    console.log(process.env.PUBLIC_URL)

    readGames.getData(this.setState.bind(this))

    // vertify cached user
    firebase.auth().onAuthStateChanged(
      (user) => {
        // check user login or not
        if(!!user) {
          this.setState( {user : user , isLogin : true, username : (user.displayName || "unidentify" )} )
          // check admin
          // verifyAdmin.verify(firebase,user.uid,this.setState.bind(this))
          this.setState( {admin : true})
        }
        this.setState( {isLoaded : true} )
      }
    );
    // this.setState({games: mockgame})
  }

  render() {
    return (
      <Router>
        <div>
          { this.state.admin ? 
              <AdminNavbar title={title} username={this.state.username}/> 
              : 
              <UserNavbar title={title} username={this.state.username}/>
          }
          { this.state.isLoaded ? 
              <RouteController games={this.state.games} admin={this.state.admin} firebase={firebase} setState={this.setState.bind(this)} /> 
              : 
              <div>หมุนๆ</div> 
          }
        </div>
      </Router>
    );
  }
}

export default App;
