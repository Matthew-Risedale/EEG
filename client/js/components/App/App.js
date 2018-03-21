import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styles from './App.scss';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/login"
        component={() => (
          <p>
            here login page
          </p>
        )}
      />
      <Route
        path="/"
        component={() => (
          <div className={styles.app}>
            <h1><Link to="/login">LOGIN</Link></h1>
          </div>
        )}
      />

    </Switch>
  </Router>
);

export default App;
