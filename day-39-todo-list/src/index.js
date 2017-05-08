import React from 'react';
import $ from 'jquery';


const bucketId ='8eba54b1-7680-4eab-a6eb-d1abb78e9974';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      inputValue: '',
      items: []
    };
  }

  refreshData() {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/api/items?bucketId=${bucketId}`
    })
    .done((data) => {
      setState ({
        items: data.items
      })
    });
  }

  componentDidMount() {
    this.refreshData();
  }


  createNewItem(inputText) {
    $.ajax({
      url: `https://spiffy-todo-api.herokuapp.com/POST/api/item?bucketId=${bucketId}`,
      method: 'POST',
      data: {
        text: inputText
      }
    })
    .done((data)=>{
      this.refreshData();
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      this.createNewItem(this.state.inputValue);
      this.setState ({
        inputValue: ''
      });
    }
  }
  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }


  render() {
    const ListItems = this.props.items.map((x,) => <li key={x.id}>{x.id}</li>)

    return (
      <div>
        <input
          onKeyUp={(evt)=>this.handleKeyUp(evt)}
          onChange={(evt) => this.handleChange(evt)}
          value={this.state.inputValue} />
        <ol>
          {ListItems}
        </ol>
      </div>
    );
  }
}

module.exports = TodoApp;
