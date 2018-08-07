import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayed_number: 0,
      current_number: 0,
      previous_number: 0,
      operation: null
    }
    this.handleNumberClick = this.handleNumberClick.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handleSubClick = this.handleSubClick.bind(this)
    this.handleDivClick = this.handleDivClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNumberClick(event) {
    if (this.state.displayed_number === 0) {
      this.setState({
        displayed_number: event.target.value,
        current_number: event.target.value
      })
    }
    else {
      if (this.state.operation != null) {
        this.setState({
          displayed_number: this.state.current_number + event.target.value,
          current_number: this.state.current_number + event.target.value
        })
      }
      else {
        this.setState({
          displayed_number: this.state.displayed_number + event.target.value,
          current_number: this.state.displayed_number + event.target.value
        })
      }
    }
  }

  handleAddClick() {
    this.setState({
      previous_number: this.state.displayed_number,
      current_number: "",
      operation: "+"
    })
  }

  handleSubClick() {
    this.setState({
      previous_number: this.state.displayed_number,
      current_number: "",
      operation: "-"
    })
  }

  handleDivClick() {
    this.setState({
      previous_number: this.state.displayed_number,
      current_number: "",
      operation: "/"
    })
  }

  handleSubmit() {
    if (this.state.operation === "+") {
      let result = Number(this.state.previous_number) + Number(this.state.current_number)
      this.setState({
        displayed_number: result
      })
    }
    if (this.state.operation === "-") {
      let result = Number(this.state.previous_number) - Number(this.state.current_number)
      this.setState({
        displayed_number: result
      })
    }
    if (this.state.operation === "/") {
      let result = Number(this.state.previous_number) / Number(this.state.current_number)
      this.setState({
        displayed_number: result
      })
    }
  }

  render() {
    console.clear()
    console.log("previous_number: " + this.state.previous_number)
    console.log("current_number: " + this.state.current_number)
    console.log("displayed number: " + this.state.displayed_number)
    console.log("operation: " + this.state.operation)

    return (
      <div className="container">
        <input type="text" size="20" value={this.state.displayed_number} disabled></input>
        <input type="button" value="1" onClick={this.handleNumberClick}></input>
        <input type="button" value="2" onClick={this.handleNumberClick}></input>
        <input type="button" value="3" onClick={this.handleNumberClick}></input>
        <input type="button" value="4" onClick={this.handleNumberClick}></input>
        <input type="button" value="5" onClick={this.handleNumberClick}></input>
        <input type="button" value="6" onClick={this.handleNumberClick}></input>
        <input type="button" value="7" onClick={this.handleNumberClick}></input>
        <input type="button" value="8" onClick={this.handleNumberClick}></input>
        <input type="button" value="9" onClick={this.handleNumberClick}></input>
        <input type="button" value="0" onClick={this.handleNumberClick}></input>
        <input type="button" value="+" onClick={this.handleAddClick}></input>
        <input type="button" value="-" onClick={this.handleSubClick}></input>
        <input type="button" value="/" onClick={this.handleDivClick}></input>
        <input type="button" value="=" onClick={this.handleSubmit}></input>
      </div>
    );
  }
}

export default App;
