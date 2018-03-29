import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router'

export class SignOut extends Component {
  constructor(props) {
      super(props)
      firebase.auth().signOut()
      this.props.setState( { isLogin : false, user : null, admin : false, username : "Guest" } )
  }

  render() {
    return (
        <Redirect to="/"/>
    )
  }
}

export default SignOut
