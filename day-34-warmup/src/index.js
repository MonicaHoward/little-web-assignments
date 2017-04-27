import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// import TickCounter from './TickCounter.js';
// import Counter from './Counter.js'
// import

class Clock extends React.Component {
  constructor () {
    super();
      this.state = {time: new Date()
      };
  }

  componentDidMount() {
      this.time = setInterval(()=>this.setState({time: new Date()
          }),
          1000
      );
  }

  render () {
    var time = this.state.time.toLocaleTimeString();
    return (
      <div>{time}</div>
    );
  }
}



class App extends React.Component {
  render() {
    return (
    <div>
      <Clock />,
    </div>
  )
  }
}

ReactDOM.render(
<App />,
  document.getElementById('root')
);
