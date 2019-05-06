import React, { Component } from "react";
import Pixel from "./pixel";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: props.cols
    };
  }

  render() {
    return (
      <div className="row">
        {Array.from({ length: this.state.cols }, (_, i) => {
          return <Pixel key={i} cols={this.state.cols} />;
        })}
      </div>
    );
  }
}

export default Row;
