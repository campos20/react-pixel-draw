import React, { Component } from "react";

class Pixel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: props.cols
    };
  }

  getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  render() {
    let size = window.innerWidth / this.state.cols;
    return (
      <div
        className="pixel"
        style={{
          backgroundColor: this.getRandomColor(),
          minWidth: size,
          minHeight: size
        }}
      />
    );
  }
}

export default Pixel;
