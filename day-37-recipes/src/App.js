import React, { Component } from 'react';
import Header from './Header.js';
import Query from './Query.js';
import RecipeList from './RecipeList.js';
import Filter from './Filter.js';
import Footer from './Footer.js';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      queryInput: [],
    
    }
  }

  makeAjaxCall() {
    $.ajax ({
      url: '/api/?i=onions,ketchup&q=steak'
    })

    .done((data) => {
      data = JSON.parse(data);

      let mappedArr = data.results.map((x) =>{
        if (x.thumbnail === '') {
          x.thumbnail = 'no-image.jpg';
        }

        return{
          recipe: x.title,
          photo: x.thumbnail,
          ingredients: x.ingredients
        };
    })

        this.setState({
            recipes: mappedArr
        });

      });

  }

  componentDidMount() {
    this.makeAjaxCall();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Query queries={this.state.queries}/>
          <RecipeList recipes={this.state.recipes}/>
          <Filter />
          <Footer />
        </div>
      </div>
    );
  }
}



export default App;
