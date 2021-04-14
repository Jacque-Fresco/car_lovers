import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './header/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Login from './log_in/Login';
import Backvideo from './backvideo/Backvideo';
import Register from './register/Register'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/home">
            <Homepage />
            <Backvideo />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="*">
            <Redirect to="/home" push={true} />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
