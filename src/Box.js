import React, { Component } from 'react'
import './TreasureHunt.css'
import Tree from './Assets/Tree.png'
import Treasure from './Assets/Treasure.png'

class Box extends Component {

  localHandleClick = () => {
    let { handleClick, isTree, index } = this.props
    handleClick(index)
  }



  render() {
    let { handleClick, isTree } = this.props
    return (
      <div className = 'Box' onClick = {this.localHandleClick}>
      { isTree &&
        <img src = {Tree} />
      }
      { !isTree &&
        <img src = {Treasure} />
      }
      </div>
    )
  }
}

export default Box
