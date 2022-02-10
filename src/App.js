import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import "antd/dist/antd.css";
import { useState } from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import { MyContext } from "./Context";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showExplore, setShowExplore] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const value = {
    showProfile,
    setShowProfile,
    showExplore,
    setShowExplore,
    showSettings,
    setShowSettings,
  };
  return (
    <div style={{ background: "lightgray", height: "100vh" }}>
      {/* <MyContext.Provider value={value}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </HashRouter>
        <Home />
      </MyContext.Provider> */}
      {!localStorage.getItem("loggedIn") ? (
        <MyContext.Provider value={value}>
          <div>
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </HashRouter>
          </div>
        </MyContext.Provider>
      ) : (
        <MyContext.Provider value={value}>
          <div>
            <HashRouter>
              <Switch>
                {/* <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} /> */}
              </Switch>
            </HashRouter>
          </div>
        </MyContext.Provider>
      )}
    </div>
  );
}

export default App;
