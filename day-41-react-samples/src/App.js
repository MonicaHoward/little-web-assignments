import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Counter from './Counter.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          <Link to="counter">Counter</Link>
          <Route path="/counter" componenet={Counter} />

        </div>
      </Router>
    );
  }
}

export default App;
