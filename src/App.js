import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard';
import Login from './login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
