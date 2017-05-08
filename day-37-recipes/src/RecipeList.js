import React from 'react';

class IndividualRecipe extends React.Component {
  render() {
    return (
      <li>
        <img className="individual-recipe-photo" src={this.props.photo} alt={this.props.name} />
        <h3 className="individual-recipe-title">{this.props.recipe}</h3>
        <p className="individual-recipe-ingredients">{this.props.ingredients}</p>
      </li>

    );
  }
}

class RecipeList extends React.Component {
  render(){
    var recipes = this.props.recipes.map((x, index) => {
      return <IndividualRecipe
              photo={x.photo}
              recipe={x.recipe}
              ingredients={x.ingredients}
              key={index + x.name} />
    })
    return (
      <div className="recipe-list">
        <ol className="individual-recipe">
          {recipes}
        </ol>
      </div>
    );
  }
}

module.exports = RecipeList;
