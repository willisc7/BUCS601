import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { color: "blue" }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    if (this.state.color === "blue") {
      this.setState({
        color: "red"
      })
    }
    else {
      this.setState({
        color: "blue"
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="circle"
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.color }}>
        </div>
      </div>
    );
  }
}

export default App;
