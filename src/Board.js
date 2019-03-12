import React, { Component } from 'react'
import Box from './Box.js'
import './TreasureHunt.css'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isTree: true,
      board: Array(9).fill("?")
    }
  }

  handleClick = (index) => {
    const { isTree } = this.state

    if (isTree === true) {
      this.setState({isTree: false})
    } else {
      this.setState({isTree: true})
    }
    console.log("Clicked");
  }

  render() {
    const {board,isTree} = this.state
    return (
      <div className = "Board">
        {board.map((value,index) => {
          return (
            <Box
            key = {index}
            isTree = {isTree}
            handleClick = {this.handleClick}
            />
          )
        })}
      </div>
    )
  }
}

export default Board
