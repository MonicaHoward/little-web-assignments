import {createStore} from 'redux';


const initialState = {
  countNumber: 0
};
const reducer = (state = initialState, action) => {

  switch (action.type) {
      case 'INCREMENT_COUNT':
        const copy = Object.assign({}, state);
        const changedCopy = Object.assign(copy,  {
          countNumber: state.countNumber + 1
        });
        return changedCopy;
      default:
        return state;
  }
  switch (action.type) {
    case 'DECREMENT_COUNT':
      const copy = Object.assign ({}, state);
      const changedCopy = Object.assign(copy, {
        countNumber: state.countNumber -1
      });
      return changedCopy;
      default:
      return state;
  }

};

const store = createStore (reducer);

module.exports = store;
