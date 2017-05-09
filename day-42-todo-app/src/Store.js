import { createStore } from 'redux';
import $ from 'jquery';
import { store } from './store.js';

const REFRESH_DATA = { type:'REFRESH_DATA'};
const DELETE_ITEM = { type: 'DELETE_ITEM' };
const CREATE_ITEM = { type: 'CREATE_ITEM'};
const HANDLE_CHANGE = { type: 'HANDLE_CHANGE'};


const initialState = {
  items: [],
  inputValue: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case
      return Object.ASSIGN({}, state, {inputValue: action.items});
    case 'SHOW_ITEMS':
      return Object.ASSIGN({}, state, {items: action.items, inputValue:''});
    case
  }
  return state;
};

const store = createStore(reducer);

module.exports = {
  store: store,
  actions: {

  }
}
