import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const values = [33, 11, 6, 34, 27, 67, 16, 56, 8, 77, 91, 3, 1, 47, 17, 65];
    let nums_over_54 = [];

    let get_values_over_54 = (num_array) => {
      for (let index in num_array){
        if (num_array[index] > 54){
          nums_over_54.push(num_array[index]);
        }
      }
    }

    get_values_over_54(values);

    return (
      <div className="App">
        Numbers over 54: {nums_over_54.toString()}
      </div>
    );
  }
}

export default App;
