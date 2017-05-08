import React from 'react';

class FilteredIngredients extends React.Component {
  render() {
    return (
      <ul className="filter-this">
        <li className="ingredient-name">INGREDIENT NAME</li>
      </ul>
    );
  }
}
class Filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <ul>
        <li className="filter-instructions">Would you also like to filter by ingredients?</li>
        <input className="filter-input" placeholder="Filter by Ingredient"></input>
        </ul>
        <FilteredIngredients />
      </div>
    )
  }
}

module.exports = Filter;
