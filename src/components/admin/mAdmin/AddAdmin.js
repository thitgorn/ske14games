import React, { Component } from 'react'
import firebase from 'firebase'

var moment = require('moment');

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
            var date = moment().format('L')
            firebase.database().ref('/powerUser').push({ 
                uid : this.state.addAdminField , 
                parent : this.state.currentUser.displayName  ,
                date : date ,
            })
            this.setState({addAdminField : ""})
        }
    }

    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column is-half">
                        <input className="input is-danger" type="text" value={this.state.addAdminField} onKeyPress={this.handleSubmit} onChange={this.handleChange.bind(this)} placeholder="Add more admin?"/>
                    </div>
                    <div className="column is-half">
                        <button onClick={ ()=> {this.addAdmin()}} className="button is-dark">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddAdmin
