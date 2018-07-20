import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [
        'http://www.zumatra.com/teach/promise_2.php',
        'http://www.zumatra.com/teach/promise_5.php',
        'http://www.zumatra.com/teach/promise_10.php'
      ],
      promises: []
    };
  }

  componentDidMount() {

    //resolve all URLs
    Promise.all(this.state.urls.map(url =>
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ promises: [...this.state.promises, data] }))
    ))

  }

  render() {
    
    return (
      <div className="container">
        {this.state.promises.map(promise => (
          <div className="circle" draggable>
            {promise.map(text => (
              <div>
                {text}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
