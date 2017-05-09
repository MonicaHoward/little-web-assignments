import React from 'react';


var affirmationsList = [
"I'm the best ever!",
"I'm the most brutal and vicious, and most ruthless champion there's ever been.",
"There's no one can stop me.",
"I'm the best ever!",
"There's never been anybody as ruthless.",
"There's no one like me.",
"There's no one that can match me.",
"My style is﻿ impetuous, my defense is impregnable, and I'm just ferocious.",
"I want your heart."
];

class Affirmations extends React.Component {
  constructor() {
    super();
        this.state= {

          affirmationsList: '',
          index: []

        }
  }

  clickPrevious(evt) {
    this.setState({
      affirmationsList: this.state.affirmationsList - 1
    });
  }

  clickForward() {
    this.setState({
      affirmationsList: this.state.affirmationsList + 1
    });
  }


  render() {
    // const messages = this.state.affirmationsList.map((x,) => <li key={x.message}>{x.message}</li>)

    return (
      <div>
        <h1>{affirmationsList[0]}</h1>
        <button onClick={() =>  this.clickPrevious()}>PREVIOUS</button>
        <button onClick={() => this.clickForward()}>FOWARD</button>
      </div>
    )
  }

}

module.exports = Affirmations;
