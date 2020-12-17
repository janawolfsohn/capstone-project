import Nav from "./modules/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Wissen from "./pages/Wissen";
import Einstellungen from "./pages/Einstellungen";
import React from "react";
import Login from "./modules/login";
import useJournals from './hooks/useJournals'
import JournalPage from './journal/JournalPage'
import Dashboard from './dashboard/Dashboard'

export default function App() {
  const { entries, yesterdaysEntry, addEntry } = useJournals()
  
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login />
              <Route path="/star">
          <Dashboard
            yesterdaysEntry={yesterdaysEntry}
          />
        </Route>
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/wissen">
              <Wissen />
            </Route>
            <Route path="/todos">
              <Todos />
            </Route>
            <Route path="/journal">
          <JournalPage entries={entries} addEntry={addEntry} />
        </Route>
            <Route path="/einstellungen">
              <Einstellungen />
            </Route>
          </Switch>
          <Nav />
        </div>
      </Router>
     
    </>
  );
}

