import React from 'react';
import store from './store';


class Counter extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  clickLower() {
    const action = { type: 'DECREMENT_COUNT' };
    store.dispatch(action)
  }

  clickHigher() {
    const action = { type: 'INCREMENT_COUNT' };
    store.dispatch(action)

  }



  render() {
    return (
      <div>
        <button onClick={() => this.clickLower()}>LOWER</button>
        <span>{ this.state.countNumber }</span>
        <button onClick={() => this.clickHigher()}>HIGHER</button>
      </div>
    )
  }
}

module.exports = Counter
