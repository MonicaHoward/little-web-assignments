import { createStore } from 'redux';

const constants = {
const INCREMENT = { type: 'INCREMENT' },
const DECREMENT = { type: 'DECREMENT' },
const RESET = { type: 'RESET'};
}

const counterReducer = (state = { number: 0 }, action) => {
  switch(action.type) {
    case constants.INCREMENT:
      return { number: state.number + 1 };
    case constants.DECREMENT:
      return {number: state.number -1};
    case constants.RESET:
      return { number: 0};
  }
  return state;
};

const store = createStore(counterReducer);

// let output = counterReducer({ number: 0}, INCREMENT);
// console.log('output', output);
//
//
module.exports = {
  store: store,
  DECREMENT: DECREMENT,
  INCREMENT: INCREMENT,
  RESET: RESET
}
