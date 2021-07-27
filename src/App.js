import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      player1: "x"
    }
  }

handleGamePlay = (index) => {
  const {squares} = this.state
  if ( index === player1){
  squares[index] = "x"
  this.setState({squares: squares})
}else {
  squares[index] = "o"
  this.setState({squares: squares})
}}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id = "gameboard" >
        {this.state.squares.map((value, index) => {
          return (
          <Square
          value= {value}
          key= {index}
          index={index}
          handleGamePlay= {this.handleGamePlay}
          />
        )
        })}
          </div>
      </>
    )
  }
}
export default App
