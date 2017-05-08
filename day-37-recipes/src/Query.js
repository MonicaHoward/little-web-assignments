import React from 'react';



class Query extends React.Component {

  queryInput(evt) {
    let copy = this.props.ingredients;
    copy.push(evt.target.value);
    evt.target.value='';

    this.props ({
      ingredients: copy
    });
  }


  render() {
    return (


      <div className="query">
        <input className="query-input" placeholder="Search Recipes" onKeyUp={(evt)  => {this.queryInput(evt)}}></input>
      </div>
    )
  }
}

module.exports = Query;
