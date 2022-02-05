import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import "antd/dist/antd.css";
import { useState } from "react";

import { MyContext } from "./Context";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const value = { showProfile, setShowProfile, showExplore, setShowExplore };
  return (
    <div style={{ background: "lightgray", height: "100vh" }}>
      <MyContext.Provider value={value}>
        <Home />
      </MyContext.Provider>
    </div>
  );
}

export default App;
