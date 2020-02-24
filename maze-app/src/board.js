import "./index.css";
import React from "react";

function Square(value) {
  let squareView;
  switch (value) {
    case "-":
        squareView = <div className="notSquare"></div>;
      break;
    default:
        squareView = <div className="square">{value === 0 ? null : value}</div>;
      break;
  }
  return squareView;
}

class Board extends React.Component {
 getSquaresFromRows(row) {
    var maze = this.props.maze;
    return maze[row].map((value) => {
      return Square(value);
    });
  }
  renderBoard() {
    let boardRow;
    let boardView = [];
    let maze = this.props.maze;

    for (let row = 0; row < maze.length; row++) {
      boardRow = <div className="board-row">{this.getSquaresFromRows(row)}</div>;
      boardView.push(boardRow);
    }
    return boardView;
  }

  render() {
    return <div>{this.renderBoard()}</div>;
  }
}
export default Board;
