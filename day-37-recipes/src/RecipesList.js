import React, { Component } from 'react';
import './recipe-list.css';

class IndividualRecipe extends Component {
  render() {
    return (
      <li>
        <img className="recipe-img"       src={this.props.photo} alt={this.props.recipe} />
        <h3 className="recipe-name" {this.props.recipe}</h3>
        <p>className="recipe-ingredients">
          Ingredients: {this.props.ingredients}
        </p>
      </li>
    );
  }
}

class RecipesList extends Component {
  render() {
    var recipes = this.props.recipes.map((x, index) => {
      return <IndividualRecipe
              url={x.photo}
              name={x.name}
              ingredients={x.ingredients}
              key={index + x.name} />
    });

    return (
      <div className="recipe-list">
        <ol>
          {recipes}
        </ol>
      </div>
    );
  }

}

module.exports = RecipesList;
