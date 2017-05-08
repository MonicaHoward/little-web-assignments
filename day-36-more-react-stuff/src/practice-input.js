import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class aList extends React.Component {

  constructor() {
    super();
    this.state = {
    items: []
    }
  this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(evt) {
    if(evt.keyCode === 13) {
      var copy = this.state.items.slice();
      copy.push(evt.target.value);
      evt.target.value='';
      this.setState({
        items: copy
      });
    }
  }

  removeOnClick(evt) {
    var copy = this.state.items.slice();
    copy.splice(index, 1);
    this.setState ({
    items.copy
  });

  }

  render() {
    let items = this.state.items.map((x, i) => {
      return<li onClick={() => this.handleItemClick(i)} key={i}>{x}</li>
    });
    return (
      <div>
        <input onKeyUp={(evt) =>{this.handleKeyUp(evt)}}
          removeOnClick ={(evt) =>{this.removeOnClick(evt)}} />
      </div>
    )
  }
}

ReactDOM.render(
<aList />,
  document.querySelector('#root')
);
