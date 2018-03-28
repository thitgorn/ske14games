import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebaseUiConfig } from '../../config/firebase/method'

export class SignIn extends Component {
  render() {
    const firebase = this.props.firebase

    return (
      <div align="center">
        <h1>Avaliable Method</h1>
        <StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={firebase.auth()}/>
      </div>
    )
  }
}

export default SignIn
