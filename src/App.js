import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      counter: 0
    }
  }

  incrementCounter(){
    this.setState({ counter: this.state.counter+1 })
  }

  render() {
    return (
      <div className="App" data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button onClick={()=> this.incrementCounter()} data-test="increment-button">Increment</button>
      </div>
    );
  }
}

export default App;
