import React, { Component } from 'react'
import firebase from 'firebase'
import { AddAdmin } from './AddAdmin';


export class ManageAdmin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adminList : []
    }
  }

  componentDidMount() {
    var db = firebase.database().ref('/powerUser');
    db.on('value', (snapshot) => {
      const keys = Object.keys(snapshot.val())
      var list = keys.map( (key)=> {
        return snapshot.val()[key]
      })
      this.setState({ adminList : list})
    })
  }

  getAdminList() {
    return this.state.adminList.map( (item,id)=> {
      return (<tr key={id}>
                <td key={id}>{item.uid}</td>
                <td>{item.parent}</td>
                <td>{item.date}</td>
                <td><button onClick={()=> this.deleteAdmin(item.uid)} className="button is-danger is-outlined">REMOVE</button></td>
              </tr>)
    })
  }

  deleteAdmin(uid) {
    var db = firebase.database().ref('/powerUser');
    db.on('value', (snapshot)=> {
      const keys = Object.keys(snapshot.val())
      const remove = keys.filter( (key) => {
        return ( snapshot.val()[key].uid === uid )
      } )
      remove.forEach( (rm)=> {
        firebase.database().ref('/powerUser/' + rm).remove()
      })
      
    })
  }

  render() {
    var ths = ['UID' , 'ADDED BY' , 'DATE' , 'REMOVE'].map((item, id) => {
      return <th key={id}>{item}</th>
    })
    return (
      <div>
        <h1 className="title is-3">Add/Remove Admin</h1>
        <AddAdmin/>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {ths}
              </tr>
            </thead>
            <tbody>
              {this.getAdminList()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ManageAdmin
