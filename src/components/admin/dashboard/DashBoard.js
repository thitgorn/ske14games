import React, { Component } from 'react'
import text from './text'

export class DashBoard extends Component {
    render() {
        var board = text.map((item,id)=> {
            return (<div key={id} className="card" style={{ margin: '10px'}}>
                        <div className="card-header title is-3">{item.title}</div>
                        <div className="card-body">{item.content}</div>
                   </div>)
        })
        return (
        <div>
            <div className="title is-2 text-center">DashBoard</div>
            {board}
        </div>
        )
    }
}

export default DashBoard
