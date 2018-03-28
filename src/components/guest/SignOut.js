import React, { Component } from 'react'
import firebase from 'firebase'
import { Redirect } from 'react-router'

export class SignOut extends Component {
  render() {
    firebase.auth().signOut()
    return (
        <Redirect to="/"/>
    )
  }
}

export default SignOut
