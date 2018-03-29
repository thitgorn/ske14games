import React, { Component } from 'react'

import firebase from 'firebase'

export class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user : "loading"
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
        return (
            <div>
                {this.state.user.uid}
            </div>
        )
    }
}

export default UserInfo
