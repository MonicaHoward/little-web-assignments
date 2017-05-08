import React from 'react';
import

class GithubRepositories extends React.Component {
  constructor() {
    super();

    this.state = {
      people: []
    };
  }

  class Person extends React.Component {


    render () {
      return (
        <li>
        <div>Name: {this.props.name}</div>
        <div>Birth Year: {}</div>
        </li>
      )
    }
  }

  componentDidMount () {
    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done(function(datea {
      console.log('I want data!', data)
      this.setState({
        people: data.results
      })
    });
  }

  render ()
  let people = this.state.people.map(x)=> <Person name{x.name birthYear }={x.birth_year}} {

    let people = this.state.people.map((x) => return<li>(x.name)</li>)
    return (
      <div>
        <ol>
        {people}
        </ol>
      </div>
    )
  }
}

module.exports = GithubRepositories
