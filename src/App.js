import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
  var cols = 30;
  return (
    <div className="App">
      <Board cols={cols} />
    </div>
  );
}

export default App;
