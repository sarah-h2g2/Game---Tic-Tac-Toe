import React from "react";
import Square from "./Square";

import "./styles.css";

export default class App extends React.Component {
  state = {
    squares: Array(3)
      .fill(null)
      .map(x => Array(3).fill(null)),
    winner: false,
    status: "Play",
    setXNext: true,
    boardFull: false
  };
  handleClick = (i, j) => {
    console.log("click", i, this.state.squares);
    if (!this.state.winner && !this.state.boardFull) {
      const copySquares = this.state.squares.slice();
      const XNext = this.state.setXNext;
      copySquares[i][j] = XNext ? "X" : "O";

      this.setState({ squares: copySquares, setXNext: !XNext });
    } else {
      //   const status = this.state.setXNext ? "A Won" : "B Won";
      //   this.setState({ winner: true, status: status });
    }
    this.getWinner();
  };
  isBoardFull = () => {
    for (let i = 0; i < this.state.squares.length; i++) {
      for (let j = 0; j < this.state.squares[0].length; j++) {
        console.log("aa", this.state.squares[i][j] === null);
        if (this.state.squares[i][j] === null) {
          this.setState({ boardFull: false });
          return false;
        }
      }
    }
    this.setState({ boardFull: true });
    return true;
  };
  getWinner = () => {
    if (this.isBoardFull()) {
      this.setState({ winner: false, status: "draw", boardFull: true });
      return;
    }
    for (let i = 0; i < this.state.squares.length; i++) {
      if (
        this.state.squares[i][0] &&
        this.state.squares[i][0] === this.state.squares[i][1] &&
        this.state.squares[i][1] === this.state.squares[i][2]
      ) {
        const status = this.state.setXNext ? "A Won" : "B Won";
        this.setState({ winner: true, status: status });

        return true;
      }
    }
    for (let j = 0; j < this.state.squares[0].length; j++) {
      if (
        this.state.squares[0][j] &&
        this.state.squares[0][j] === this.state.squares[1][j] &&
        this.state.squares[1][j] === this.state.squares[2][j]
      ) {
        const status = this.state.setXNext ? "A Won" : "B Won";
        this.setState({ winner: true, status: status });

        return true;
      }
    }
    if (
      this.state.squares[0][0] &&
      this.state.squares[0][0] === this.state.squares[1][1] &&
      this.state.squares[1][1] === this.state.squares[2][2]
    ) {
      const status = this.state.setXNext ? "A Won" : "B Won";
      this.setState({ winner: true, status: status });

      return true;
    }
    if (
      this.state.squares[0][2] &&
      this.state.squares[0][2] === this.state.squares[1][1] &&
      this.state.squares[1][1] === this.state.squares[2][0]
    ) {
      const status = this.state.setXNext ? "A Won" : "B Won";
      this.setState({ winner: true, status: status });

      return true;
    }
    return false;
  };
  getStatus = () => {
    if (this.state.winner) {
      return this.state.status;
    } else if (!this.state.winner && this.state.boardFull) {
      return "Draw";
    } else {
      return "Play";
    }
  };
  render() {
    return (
      <div className="App">
        <h1>Tic Tac Toe</h1>
        <h2>{this.state.status}</h2>
        <div className="conatiner">
          <div className="row">
            <Square
              handleClick={() => this.handleClick(0, 0)}
              value={this.state.squares[0][0]}
              disabled={
                this.state.squares[0][0] === "X" ||
                this.state.squares[0][0] === "O" ||
                this.state.winner
              }
            />
            <Square
              handleClick={() => this.handleClick(0, 1)}
              value={this.state.squares[0][1]}
              disabled={
                this.state.squares[0][1] === "X" ||
                this.state.squares[0][1] === "O" ||
                this.state.winner
              }
            />
            <Square
              handleClick={() => this.handleClick(0, 2)}
              value={this.state.squares[0][2]}
              disabled={
                this.state.squares[0][2] === "X" ||
                this.state.squares[0][2] === "O" ||
                this.state.winner
              }
            />
          </div>
          <div className="row">
            <Square
              handleClick={() => this.handleClick(1, 0)}
              value={this.state.squares[1][0]}
              disabled={
                this.state.squares[1][0] === "X" ||
                this.state.squares[1][0] === "O" ||
                this.state.winner
              }
            />
            <Square
              handleClick={() => this.handleClick(1, 1)}
              value={this.state.squares[1][1]}
              disabled={
                this.state.squares[1][1] === "X" ||
                this.state.squares[1][1] === "O" ||
                this.state.winner
              }
            /> 
            <Square
              handleClick={() => this.handleClick(1, 2)}
              value={this.state.squares[1][2]}
              disabled={
                this.state.squares[1][2] === "X" ||
                this.state.squares[1][2] === "O" ||
                this.state.winner
              }
            />
          </div>
          <div className="row">
            <Square
              handleClick={() => this.handleClick(2, 0)}
              value={this.state.squares[2][0]}
              disabled={
                this.state.squares[2][0] === "X" ||
                this.state.squares[2][0] === "O" ||
                this.state.winner
              }
            />
            <Square
              handleClick={() => this.handleClick(2, 1)}
              value={this.state.squares[2][1]}
              disabled={
                this.state.squares[2][1] === "X" ||
                this.state.squares[2][1] === "O" ||
                this.state.winner
              }
            />
            <Square
              handleClick={() => this.handleClick(2, 2)}
              value={this.state.squares[2][2]}
              disabled={
                this.state.squares[2][2] === "X" ||
                this.state.squares[2][2] === "O" ||
                this.state.winner
              }
            />
          </div>
        </div>
      </div>
    );
  }
}
