import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './user/Home'
import Admin from './admin/Index'

import AdminNavbar from './admin/Navbar'
import UserNavbar from './user/Navbar'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      admin : false
    }
  }
  render() {
    return (
      <Router>
        <div>
          { this.state.admin ? <AdminNavbar/> : <UserNavbar/> }

          <Route exact path="/" component={ ()=> <Home/>} />

          <Route path="/admin" component={ ()=> <Admin/>} />
        </div>
      </Router>
    );
  }
}

export default App;
