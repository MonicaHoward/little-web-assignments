import React from 'react';


class List extends React.Component {


  render() {
    var people = this.props.people.map((x, i) => {
      return (
        <li key={i + x.name}>
          <Link to={'/detail' + x.id}>{x.name}</link>
        </li>
    })
    return (
      <div>
        <ol>
        {people}
      </div>
    );
  }
}

module.exports = List;
