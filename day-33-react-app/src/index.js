import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clicker extends React.Component {

  constructor() {
    super();
    this.state = {
      value: 0

    };
  }



  handleClick() {
    var value = this.state.value;
    value += 1;
    this.setState({
      value: value
    });
  }


  render() {
      return (
        <div onClick={()=> this.handleClick()}> {this.state.value}
        </div>
      )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      <Clicker />
      <br />
      <Clicker />
      <br />
      <Clicker />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
