import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import TZ from './util/TZ';
import Dashboard from './Dashboard';
import History from './History';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <div>JobUp</div>
          <nav>
              <ul>
                  <li><Link to="/">Dashboard</Link></li>
                  <li><Link to="/history">History</Link></li>
                  <li><Link to="/tz">TechTask</Link></li>
              </ul>
          </nav>
        </header>
        <Switch>
            <Route path="/history">
                <History/>
            </Route>
            <Route path="/tz">
                <TZ/>
            </Route>
            <Route path="/">
                <Dashboard/>
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
