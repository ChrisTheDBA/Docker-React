import React, { Component } from 'react';
import logo from './logo.svg';
import './compiled/App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Chris', age: 52},
      {name: 'Paula', age: 54},
      {name: 'Tracy', age: 48}
    ]
  }
  
  // constructor() {
  //   super();

  //   this.state = {};
  // }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState(res))
  //     .catch(console.error);
  // }

  // callApi = async () => {
  //   const resp = await fetch('/api');

  //   window._resp = resp;

  //   let text = await resp.text();

  //   let data = null;
  //   try {
  //     data = JSON.parse(text); // cannot call both .json and .text - await resp.json();
  //   } catch (e) {
  //     console.err(`Invalid json\n${e}`);
  //   }

  //   if (resp.status !== 200) {
  //     throw Error(data ? data.message : 'No data');
  //   }

  //   return data;
  // };

  switchNameHandler = () => {
    // console.log('Was Clicked!');
    // DONT DO THIS this.state.persons[0].name = 'Christopher';
    this.setState({persons: [
        {name: 'Christopher', age: 52},
        {name: 'Paula', age: 54},
        {name: 'Tracy', age: 47}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>More Stuff</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Second Line</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Gardening</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <p>{this.state.message || 'No message'}</p>
      </div>
    );
  }
}

export default App;
