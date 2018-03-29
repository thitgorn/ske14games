import React, { Component } from 'react'
import firebase from 'firebase'

export class AddAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addAdminField : ""
        }
        this.addAdmin = this.addAdmin.bind(this)
    }

    handleChange = (event) => {
        this.setState( { addAdminField : event.target.value} )
    }

    handleSubmit = (e) => {
        if (e.key === 'Enter') {
            this.addAdmin()
        }
    }

    addAdmin() {
        if(this.state.addAdminField!=="") {
            firebase.database().ref('/powerUser').push({ uid : this.state.addAdminField })
            this.setState({addAdminField : ""})
        }
    }

    render() {
        if(!!firebase.auth().currentUser) {
            var uid = firebase.auth().currentUser.uid
            var uname = firebase.auth().currentUser.displayName
        }
        return (
            <div>
                <h5>your user id : {uid}</h5>
                <h5>your display name : {uname}</h5>
                <input className="input is-danger" type="text" value={this.state.addAdminField} onKeyPress={this.handleSubmit} onChange={this.handleChange.bind(this)} placeholder="Add more admin?"/>
            </div>
        )
    }
}

export default AddAdmin
