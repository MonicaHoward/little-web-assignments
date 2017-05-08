import React from 'react';

class SuperDuperClock extends REact.Component {
  constructor() {
    super();


    this.state = {
      date: new Date()
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState
        date: new Date()
    });
  }, 1000);
}

  render() {
    return(
      <div>
        <Clock date={this.staet.date} />
        <Clock />
        <Clock />
      </div>
    );
  }
}


class Clock extends React.Component {

  render() {
    return(
      <div>
      {this.state.date.getHours()}:{this.state.date.getMInutes()}:[this.state.date.getSeconds()]

      </div>

    )
  }
}

module.exports = SuperDuperclock;
