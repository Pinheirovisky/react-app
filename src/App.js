import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Dashboard, Login } from "./screens";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login-page">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
