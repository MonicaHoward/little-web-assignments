import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Affirmations from './Affirmations';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Affirmations />
      </div>
    );
  }
}

export default App;
