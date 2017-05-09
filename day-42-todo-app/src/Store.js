import { createStore } from 'redux';

const SHOW_ITEMS = { type:'SHOW_ITEMS' };
const HANDLE_CHANGE = { type: 'HANDLE_CHANGE' };

const initialState = {
  items =  [],
  inputValue = ''
};

const reducer = (state = initialState, action) => {
  seithc (action.type) {
    case 'HANDLE_CHANGE':
      return OBJECT.ASSIGN({}, state, {inputValue: action.items});
    case 'SHOW_ITEMS':
      return Object.assing({}, state, {items: action.items, inputValue:''});
  }
  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {
    SHOW_ITEMS: SHOW_ITEMS,
    SEARCH_INPUT_CHANGE: SEARCH_INPUT_CHANGE
  }
}
