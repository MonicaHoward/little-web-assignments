import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './index.css';
import TodoApp from './todo-app.js';



const Home = () => <div>HOME</div>

const Gallery = () => <div>GALLERY</div>



class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
        
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/app"  component={TodoApp} />
            <Route path="/gallery" component={Gallery} />
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
