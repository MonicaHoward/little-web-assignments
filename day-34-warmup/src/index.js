import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



class Counter extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 0
      };
  }

  handleUpClick() {
    var value = this.state.value;
    value +=1;
    this.setState({value: value
    });
  }

  handleDownClick() {
    var value = this.state.value;
    if (this.state.value === 0) {
      return;
    }
    value -=1;
    this.setState({value: value
    });
  }
  render(){
    return (
      <div>
        <button onClick={() => this.handleUpClick()}></button>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.handleDownClick()}></button>
      </div>
    )
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
