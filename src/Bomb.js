import React, { Component } from 'react';
import TheDate from 'TheDate';

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count = 0 };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        this.state.count + 1
      })
    }, 1000);
  }
  componentWillMount() {

  }
  render() {
    return (
      <div>
        <p>tick</p>
      </div>
    );
  }
}

export default Bomb;
