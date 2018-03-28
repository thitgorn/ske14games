import React, { Component } from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { firebaseUiConfig } from '../../config/firebase/method'

export class Navbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {

      // Get all "navbar-burger" elements
      var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach(function ($el) {
          $el.addEventListener('click', function () {
    
            // Get the target from the "data-target" attribute
            var target = $el.dataset.target;
            var $target = document.getElementById(target);
    
            // Toggle the class on both the "navbar-burger" and the "navbar-menu"
            $el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
    
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar is-warning">
          <h3>{this.props.title}</h3>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                SignIn
              </a>
              <div className="navbar-dropdown is-boxed is-right">
                <div className="navbar-item">
                  <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={firebase.auth()}/>
                </div>
                <div className="navbar-item">
                  <button onClick={ ()=> firebase.auth().signOut() }>Sign out</button> 
                </div>
              </div>
            </div>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Navbar
