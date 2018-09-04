import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './child';

class App extends Component {

state = {
    name: 'peter'
};

constructor() {
  super();
  this.state = {
    name: 'John'
  };
  console.log('Inside constructor');
}

//This only hook uses server and after that render runs
componentWillMount() {
  if(window.innerWidth < 500) {
    this.setState({
      innerWidth: window.innerWidth
    });
  }
  console.log('Inside componentWillMount');
}

componentDidMount() {
  console.log('Inside componentDidMount');
}

//we can setState in this hook and we cannot change props
componentWillReceiveProps() {
  console.log('Inside componentWillReceiveProps');
}

shouldComponentUpdate(nextProps,nextState) {
    console.log('Inside shouldComponentUpdate');
    return true;
}

componentWillUpdate() {
    console.log('Inside componentWillUpdate');
}

componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
    console.log('prevState', prevState);
    console.log('componentDidUpdate');
}

componentWillUnmount() {
  console.log('Inside componentWillUnmount');
}

changeState() {
    this.setState({
      name: 'Joe'
    });
}

unmountChild() {
  this.setState({
    name: 'rob'
  });
}

  render() {
    console.log('Inside render');

    if(this.state.name === 'rob') {
      return (<div/>);
    }

    return (
      <div className="App">
      Name: {this.state.name} |
      Inner Width: {this.state.innerWidth}
      <Child name={this.state.name}/>
      <button onClick={this.changeState.bind(this)}>Change State</button>
      <button onClick={this.unmountChild.bind(this)}>Unmount Child</button>
      </div>
    );
  }
}

export default App;
