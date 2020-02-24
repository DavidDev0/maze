import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./board.js";

class Maze extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: [
        ["*", "-", 0, 0, 0, "-", 0, 0],
        [0, 0, 0, "-", 0, "-", "-", 0],
        ["-", "-", 0, "-", 0, 0, 0, 0],
        [0, 0, 0, 0, 0, "-", "-", 0],
        [0, "-", "-", "-", 0, "-", 0, 0],
        [0, 0, "-", "-", 0, "-", "-", 0],
        ["-", 0, "-", 0, 0, 0, "-", 0],
        [0, 0, 0, 0, "-", 0, 0, 0]
      ]
    };
  } 
  componentDidMount() {}
  getMinimumSteps() {
    axios.get("http://127.0.0.1:5000/minimumSteps").then(result => {
      const maze = result.data;
      this.setState(maze);
    });
  }

  render() {
    return (
      <div>
        <Board maze={this.state.maze} />
        <button className="button" onClick={() => this.getMinimumSteps()}>
          GET SETPS
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Maze />, document.getElementById("root"));
