import "./App.css";
import React, { useState } from "react";
import Topbar from "./Components/TopBar";
import GenerateResult from "./Components/GenerateResult";

function App() {
  const [font, setFont] = useState("sans");

  const handleFont = (event) => {
    setFont(event.target.value);
  };

  const [mode, setMode] = useState(false);

  const handleMode = (event) => {
    setMode(event.target.checked);
  };

  // const fontStyle =
  //   font === "serif"
  //     ? "serif"
  //     : font === "lora"
  //     ? "lora"
  //     : font === "inconsolata"
  //     ? "inconsolata"
  //     : "";
  // fontStyle.font += "app";

  return (
    <div className="app">
      <Topbar
        font={font}
        handleFont={handleFont}
        mode={mode}
        handleMode={handleMode}
      />
      <GenerateResult />
    </div>
  );
}

export default App;
