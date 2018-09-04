import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends Component {

state = {
    name: 'peter'
};

constructor() {
  super();
  console.log('Inside child constructor');
}

//This only hook uses server and after that render runs
componentWillMount() {

  console.log('Inside child componentWillMount');
}

//this lifeCycle only runs once and only runs during the initial
//cycle. We can make AJAX call and setup subscriptions. we can
//call serState({}) too
componentDidMount() {
  console.log('Inside child componentDidMount');
}

componentWillReceiveProps() {
  console.log('Inside child componentWillReceiveProps');
}

shouldComponentUpdate(nextProps,nextState) {
    console.log('Inside child shouldComponentUpdate');
    return false;
}

componentWillUpdate() {
    console.log('Inside child componentWillUpdate');
}

componentDidUpdate(prevProps, prevState) {
    console.log('child prevProps', prevProps);
    console.log('child prevState', prevState);
    console.log('child componentDidUpdate');
}

componentWillUnmount() {
  console.log('Inside child componentWillUnmount');
}

  render() {
    console.log('Inside child render');
    return (
      <div>
      child name: {this.props.name}
      </div>
    );
  }
}

export default Child;
