import React, { useState } from "react";
import Cards_container from "./Components/Cards_container";
import Taimer from "./Components/Taimer";
import Achievements from "./Components/Achievements";
import './styles/style.css';

function App() {

  return (
    <div className="App">
      <Cards_container/>
      <Taimer/>
      <Achievements/>
    </div>
  );
}

export default App;
