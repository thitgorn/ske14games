import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

// firebase
import firebase from 'firebase'
// config
import { config } from '../config/firebase/config'
import { title } from '../config/config'

import Home from './user/Home'
import Admin from './admin/Index'

import AdminNavbar from './admin/Navbar'
import UserNavbar from './user/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin : false,
      user : null,
      admin : false
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
          this.setState( {user : user , isLogin : !!user} )
          // check admin
          // TODO FIX THIS
          if(user.uid==='something') {
            this.setState({admin : true})
          }
        }
      }
    );
  }

  render() {
    return (
      <Router>
        <div>
          { this.state.admin ? <AdminNavbar title={title}/> : <UserNavbar title={title} /> }

          <Route exact path="/" component={ ()=> <Home/>} />

          <Route path="/admin" component={ ()=> <Admin/>} />
        </div>
      </Router>
    );
  }
}

export default App;
