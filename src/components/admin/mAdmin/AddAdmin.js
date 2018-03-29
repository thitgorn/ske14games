import React, { Component } from 'react'
import firebase from 'firebase'

export class AddAdmin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addAdminField : "",
            currentUser : null
        }
        this.addAdmin = this.addAdmin.bind(this)
    }

    componentDidMount() {
        var user = firebase.auth().currentUser
        if(!!user) {
            this.setState( {currentUser : user})
        }
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
            firebase.database().ref('/powerUser').push({ uid : this.state.addAdminField , parent : this.state.currentUser.displayName })
            this.setState({addAdminField : ""})
        }
    }

    render() {
        return (
            <div>
                <h5>Your display name : { !!this.state.currentUser? this.state.currentUser.displayName : "Unidentify"}</h5>
                <h5>Your user id : { !!this.state.currentUser? this.state.currentUser.uid : "None"}</h5>
                <div className="columns">
                    <div className="column is-half">
                        <input className="input is-danger" type="text" value={this.state.addAdminField} onKeyPress={this.handleSubmit} onChange={this.handleChange.bind(this)} placeholder="Add more admin?"/>
                    </div>
                    <div className="column is-half">
                        <button className="button is-dark">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAdmin
