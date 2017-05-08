import React from 'react';
import ReactDOM from  'react-dom';
import './index.css';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      people
    }
  }


  // handleChange(evt) {
  //   evt.target.value='';
  //   this.setState({
  //     firstName:
  //   });
  // }

  handleSubmit(evt) {
    evt.target.value
    this.state.value
  }




  render() {
    let people = this.state.people.map((x, i) => {
      return<li key={i + x}>{i}>{x}</li>
    });
    return (
      <div>
        <input onChange={(evt) =>this.handleSubmit(evt)} className="first-name" />
        <input onChange={(evt)=>this.handleSubmit(evt)} className="last-name"/>
        <button>add</button>
      </div>
    )
  }
}


ReactDOM.render (
  <SearchBox />,
  document.querySelector('#root')
);
