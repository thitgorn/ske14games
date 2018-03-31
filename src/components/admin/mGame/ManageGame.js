import React, { Component } from 'react'

import { editGame , deleteGame } from '../../../util/gameUtil'
import Game from '../../../model/Game';

const header = [ "id" , "Title" , "Description" , "URL" , "IMG" , "ENABLE" , "EDIT" , "REMOVE"]
const maxInputSize = {
  id : 3,
  title : 20,
  description : 20,
  url : 20,
  img : 20,
  enable : 2,
}

export class ManageGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games : [],
      editing : -1,
      editField : {
        id : 0,
        title : "",
        description : "",
        url : "",
        img : "",
        enable : ""
      }
    }

    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleChangeValue = this.handleChangeValue.bind(this)
  }

  componentDidMount() {
    // mockdata for test
    this.setState({games : this.props.games})
  }

  handleEditClick(game) {
    this.setState({ editing : game.game.id , editField : game.game })
  }

  handleSaveClick(game) {
    this.setState({ editing : -1 })
    var tempGame = new Game(this.state.editField.id , this.state.editField.title, this.state.editField.description , this.state.editField.url , this.state.editField.img , this.state.editField.enable)
    editGame.edit(game.key , tempGame)
  }

  handleChangeValue(event,tag) {
    var temp = this.state.editField
    temp[tag.toLocaleLowerCase()] = event.target.value
    this.setState({ editField : temp })
  }

  render() {
    const tHead = header.map((item,id)=>{
      return <th key={id}>{item}</th>
    })

    const tBody = this.state.games.map((item,id) => {
      if(item.game.id === this.state.editing) {
        return (<tr key={id}>
                  {header.map( (tag,id)=> {
                    if(tag==="REMOVE")
                      return <td key={id}><button className="button is-danger" onClick={()=>deleteGame.delete(item)}>REMOVE</button></td>
                    if(tag==="EDIT")
                      return <td key={id}><button className="button is-success is-outlined" onClick={()=> this.handleSaveClick(item)}>Save</button></td>
                    return <td key={id}><input type="text" 
                                                name={tag} 
                                                onChange={(event)=>this.handleChangeValue(event , tag)} 
                                                value={this.state.editField[tag.toLocaleLowerCase]} 
                                                defaultValue={item.game[tag.toLocaleLowerCase()]}
                                                size={maxInputSize[tag.toLocaleLowerCase()]}/>
                           </td>
                  })}
                </tr>)
      }

      return (<tr key={id}>
                {header.map( (tag,id)=> {
                  if(tag==="EDIT")
                    return <td key={id}><button className="button is-danger is-outlined" onClick={()=> this.handleEditClick(item)}>Edit</button></td>
                  return <td key={id}>{item.game[tag.toLocaleLowerCase()]}</td>
                })}
              </tr>)
    })

    return (
      <div>
        all avaliable games
        <div className="table-responsive">
          <table className="table is-hoverable table-fixed">
            <thead>
              <tr>
                {tHead}
              </tr>
            </thead>
            <tbody>
              {tBody}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ManageGame
