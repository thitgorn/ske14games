import React, { Component } from 'react'
import { signIn , signOut } from '../../config/routes'

import { Link } from 'react-router-dom'

import { home } from '../../config/routes'

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
          <div className="navbar-item is-hoverable is-boxed">
            <Link style={{textDecoration:'none' , color:'black'}} to={home}><h1 className="title is-3">{this.props.title}</h1></Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <div className="navbar-link">
                {this.props.username}
              </div>
              <div className="navbar-dropdown is-boxed is-right">
                { this.props.username==="Guest" ? 
                  <a className="navbar-item" href={signIn}>SignIn</a> 
                :
                  <a className="navbar-item" href={signOut}>SignOut</a>
                }
              </div>
            </div>
          </div>
          
        </nav>
      </div>
    )
  }
}

export default Navbar
