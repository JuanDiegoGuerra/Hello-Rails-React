import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Greeting from '../Greeting';
import ReactDOM from 'react-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
        {}
      </Switch>
    </Router>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
});

export default App;
