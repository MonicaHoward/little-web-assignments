import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GithubRepositories from './github-repositories.js';


class Switch extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }


  clickOn() {

    this.setState({
      value:this.state.value === 'on' ? 'off' : 'on'

    });
  }


  render() {
    return (
      <div onClick={()=> this.clickOn()}>
        {this.state.value}
        <h1>ON</h1>
      </div>
    )
  }


}



ReactDOM.render(
  <Switch />,
  document.getElementById('root')
);
