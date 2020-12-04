import Nav from "./modules/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Wissen from "./pages/Wissen";
import Routine from "./pages/Routine";
import Einstellungen from "./pages/Einstellungen";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wissen">
            <Wissen />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/routine">
            <Routine />
          </Route>
          <Route path="/einstellungen">
            <Einstellungen />
          </Route>
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
