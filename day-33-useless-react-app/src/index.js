import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// class secondsCounter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       elapsed: [
//         0
//     ]
//     }
//   }
//
//
//   render() {
//     var elapsed = Math.round(this.state.elapsed / 100);
//     var seconds = (elapsed / 10).toFixed(1);
//
//     return
//       <div className="secondsCounter">
//         <h1>You have been a vegetarian  <strong>{seconds}</strong> seconds.</h1>
//   }   </div>
//
//
// }
//
//
//
// ReactDOM.render(
// <secondsCounter start = {Date.now()} />,
//   document.getElementById('root')
// );

class secondsCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {elapsed: new Date()}
  }


  componentDidMount() {
    this.counter = setInterval(this.count, 50)
  }

  componentWillUnmount() {
    clearInterval(this.counter)
  }

  count() {
  this.setState({elapsed: new Date() - this.props.start});
  }


  render() {
    var elasped = Math.round(this.state.elapsed /100);
    var seconds = (elapsed / 10).toFixed9(1);
      return (
        <div>
         <h1>You have been a vegetarian  <strong>{seconds}</strong> seconds.</h1>
        </div>
      );
  }
}

ReactDOM.render (
<secondsCounter />,
  document.querySelector('#root')
);

setInterval
