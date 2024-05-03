import React, { useState } from "react";
import "./App.css";
import ffvIIinfo from "./models/ffvIIinfo.js";
import Button from "./components/Button.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [currentCharacter, setCurrentCharacter] = useState(ffvIIinfo[count]);

  const changePic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount + 1) % ffvIIinfo.length;
      setCurrentCharacter(ffvIIinfo[newCount]);
      return newCount;
    });
  };

  const prevPic = () => {
    setCount((prevCount) => {
      const newCount = (prevCount - 1 + ffvIIinfo.length) % ffvIIinfo.length;
      setCurrentCharacter(ffvIIinfo[newCount]);
      return newCount;
    });
  };

  return (
    <div className="App">
      <h1 className="App-header">FFVII Character Viewer</h1>
      <Card data={currentCharacter} />
      <div>
        <Button onClick={prevPic} label="Previous" />
        <Button onClick={changePic} label="Next" />
      </div>
      <div className="footer">
        <br />Made with ❤️ by Chais
      </div>
    </div>
  );
}

export default App;
