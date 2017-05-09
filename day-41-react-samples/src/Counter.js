import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { store, DECREMENT, INCREMENT, RESET } from './store.js';


// let output = counterReducer({ number: 0}, INCREMENT);
// console.log('output', output);
//
// output = counterReducer(output, DECREMENT);

class Counter extends React.Component {
  constructor() {
    super();
    this.state=
      store.getState();

  };

  componentDidMount() {
    store.subscribe(()=> {
      this.setState(store.getState());
    });
  }

  clickLess(){
    store.dispatch(DECREMENT)
    // this.setState({
    //   number: this.state.number -1
    // });
  }

  clickMore() {
    store.dispatch(INCREMENT)
    // this.setState({
    //   number: this.state.number +1
    // });
  }

  resetButton() {
    store.dispatch(RESET)
  }

  render() {
    return(
      <div>
      <button onClick={() => store.dispatch(DECREMENT)}>less</button>
      <div>{() => store.dispatch(DECREMENT)}</div>
      <button onClick={() => store.dispatch(DECREMENT)}>more</button>
      <button onClick={() => store.dispatch(RESET)}>reset</button>
      </div>
    );
  }
}
export default Counter;
