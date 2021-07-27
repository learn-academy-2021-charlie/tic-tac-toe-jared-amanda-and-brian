import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: ["👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨", "👁‍🗨"],
      activePlayer: "player1",
      winStatus: "",
      gameStatus: false,
      gameOver: ""

    }
  }

handleGamePlay = (index) => {
  const {squares, activePlayer, gameStatus} = this.state
  if (activePlayer === "player1" || squares[index]==="👾"){
  squares[index] = "👾"}
  if (activePlayer === "player2" || squares[index]==="🛸"){
  squares[index] = "🛸"}
  else if (this.state.gameStatus === true){
    this.setState({gameOver : "The game is over" })
    // {squares[index] = null}
  }
  

  const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [6,4,2],
    [0,4,8],
  ]
  for(let i=0; i<winning.length; i++){
    const [a, b, c] = winning[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "👾"){
    this.setState({winStatus: "player1"})
    // this.setState({gameStatus: true})
    }else if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[a] === "🛸")
    this.setState({winStatus: "player2"})
    // this.setState({gameStatus: true})
    }
}


playerTurn = () => {
  if (this.state.activePlayer === "player1"){
    this.setState({activePlayer: "player2"})
  }
  else if(this.state.activePlayer === "player2"){
    this.setState({activePlayer: "player1"})
  }
}

  render(){
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div id = "gameboard" >
        {this.state.squares.map((value, index) => {
          return (
          <Square
          handleGamePlay= {this.handleGamePlay}
          playerTurn= {this.playerTurn}
          value= {value}
          key= {index}
          index={index}          
          />
        )
        })}
          </div>
          <h2>Current Player:</h2>
          <p id="currentPlayer">{this.state.activePlayer}</p>
          <h2>The winner is:</h2>
          <p id="currentPlayer">{this.state.winStatus}</p>
          <h2>{this.state.gameOver}</h2>
          
      </>
    )
  }
}
export default App
