import React, { Component } from 'react'
import styled from 'styled-components';
import firebase from 'firebase'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Data = styled.div`
  margin-left: 300px
  margin-right: 300px

  @media (max-width: 1100px) {
    margin-left: 150px
    margin-right: 150px
  }

  @media (max-width: 800px) {
    margin: auto
  }
`;

export class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "loading",
            show: false
        }
    }

    componentDidMount() {
        if(!!firebase.auth().currentUser) {
            this.setState({ user : firebase.auth().currentUser })
        } else {
            // handle there is no user
        }
    }

    render() {
        if(this.state.user==="loading") {
            return <div>หมุนๆ</div>
        }

        const userProfile = this.state.user.providerData[0]
        const toggleShow = () => {
          this.setState({
            show: true
          });
          setTimeout(() => {
            this.setState({
              show: false
            });
          }, 3000);
        }
        return (
            <div className="container text-center mt-5 mb-5">
              <h1>Profile</h1>
              <img src={userProfile.photoURL} alt="Your profile" className="rounded-circle m-3"/>
              <Data>
                <span className="float-left font-weight-bold">Name:</span>
                <span className="float-right">{userProfile.displayName}</span> <br/>
                <span className="float-left font-weight-bold">E-mail:</span>
                <span className="float-right">{userProfile.email}</span> <br/>
                <span className="float-left font-weight-bold">Phone Number:</span>
                <span className="float-right">{userProfile.phoneNumber ? userProfile.phoneNumber:"No Phone Number"}</span>
              </Data> <br/>
              <CopyToClipboard text={this.state.user.uid}>
                <button type="button" className="btn btn-warning" onClick={toggleShow}>Get your UID</button>
              </CopyToClipboard>
              <div className={(this.state.show ? "" : "d-none" ) + " alert alert-warning mt-3"} role="alert">
                UID is copied to your clipboard!
              </div>
            </div>
        )
    }

}

export default UserInfo
