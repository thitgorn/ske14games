import React, { Component } from 'react'
import AddAdmin from './manage/AddAdmin'

export class Index extends Component {
  render() {
    return (
      <div>
        This is admin page
        <h1>List All admin</h1>
        <h3>Add admin</h3>
        <AddAdmin/>

        <h1>List All games</h1>
        <h3>add/remove game</h3>
      </div>
    )
  }
}

export default Index
