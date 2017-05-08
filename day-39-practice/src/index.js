import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import List from './List.js';
import Details from './Details.js';

import About from './About.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [
        {
          id: 29292,
          name: 'Bob Smith',
          description: 'Who TF is this?'
        },
        {
          id: 29293,
          name: 'Betty White',
          description:"American's Grandma."
        }
      ]
    }
  }

  render() {
    var ListWithProps = <List foo="hi" />
    return (
      <Router>
        <div>
          <nav>
            <ol>
              <li><Link to='/'>List</Link></li>
              <li><Link to="/details">Details</Link></li>
              <li><Link to="/about">About</Link></li>
            </ol>
          </nav>
          <Route path="/" extend render={(props) => <List people={this.state.prople} />} />
          <Route path="/details/:id" render={(props) => <Details people={this.state.people} />} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
