import React, { Component } from "react";
import Row from "./row";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: props.cols,
      rows: this.getRows(props.cols)
    };
  }

  getSize = cols => {
    return window.innerWidth / cols;
  };

  getRows = cols => {
    return Math.ceil(window.innerHeight / this.getSize(cols));
  };

  updateDimensions() {
    var rows = this.getRows(this.state.cols);
    this.setState({
      cols: this.state.cols,
      rows: rows
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  state = {};
  render() {
    return (
      <div className="board">
        {Array.from({ length: this.state.rows }, (_, i) => {
          return <Row key={i} cols={this.state.cols} />;
        })}
      </div>
    );
  }
}

export default Board;
