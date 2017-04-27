class TickCounter extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 0
      };
  }
  componentDidMount() {
    this.value = setInterval(()=>this.setState({value:this.state.value +1}), 1000);
  }

  render () {
    return <div>{this.state.value}</div>;
  }
}

class Counter extends React.Component {
  constructor() {
    super();
      this.state = {
        value: 0
      }
  }
  handleUpClick() {
    var value = this.state.value;
    value +=1;
    this.setState({value: value
    });
  }

  handleDownClick() {
    var value = this.state.value;
    if (this.state.value === 0) {
      return;
    }
    value -=1;
    this.setState({value: value
    });
  }
  render(){
    return (
      <div>
        <button onClick={() => this.handleUpClick()}></button>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.handleDownClick()}></button>
      </div>
    )
  }
}
