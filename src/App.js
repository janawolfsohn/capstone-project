import Header from "./modules/Header";
import Nav from "./modules/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Todos from "./pages/Todos";
import Wissen from "./pages/Wissen";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <h1>startseite</h1>
          </Route>
          <Route path="/wissen">
            <Wissen />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
