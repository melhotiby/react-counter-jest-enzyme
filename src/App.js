import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0,
      displayBelowZeroMessage: false
    }
  }

  incrementCounter(){
    this.setState({
      counter: this.state.counter+1,
      displayBelowZeroMessage: false
    })
  }

  decrementCounter(){
    if(this.state.counter === 0){
      this.setState({
        displayBelowZeroMessage: true
      })
    }else{
      this.setState({
        counter: this.state.counter-1
      })
    }
  }

  render() {
    const errorMessageStyle = {
      color: "red"
    }
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button onClick={()=> this.incrementCounter()} data-test="increment-button">Increment</button>
        <button onClick={()=> this.decrementCounter()} data-test="decrement-button">Decrement Counter</button>
        {this.state.displayBelowZeroMessage &&
          <p style={errorMessageStyle} data-test="below-zero-message">You can not go below zero</p>
        }
      </div>
    );
  }
}

export default App;
