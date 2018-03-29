import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'

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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false,
      user : null,
      admin : false,
      username : "Guest",
      isLoaded : false,
    }
    // initialize firebase
    firebase.initializeApp(config)
  }

  componentDidMount() {
    // vertify cached user
    firebase.auth().onAuthStateChanged(
      (user) => {
        // check user login or not
        if(!!user) {
          this.setState( {user : user , isLogin : true, username : (user.displayName || "unidentify" )} )
          // check admin
          verifyAdmin.verify(firebase,user.uid,this.setState.bind(this))
        }
        this.setState( {isLoaded : true})
      }
    );
  }

  render() {
    return (
      <Router>
        <div>
          { this.state.admin ? <AdminNavbar title={title} username={this.state.username}/> : <UserNavbar title={title} username={this.state.username}/>}

          { this.state.isLoaded ? 
            <Switch>
              <Route exact path="/" component={ ()=> <Home/>} />
              <Route path="/signin" component={ ()=> <SignIn firebase={firebase}/>} />
              <Route path="/signout" component={ ()=> <SignOut/>}/>
              { this.state.admin ? <Route path="/admin" component={ ()=> <Admin isAdmin={this.state.admin}/>} /> : null }
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
