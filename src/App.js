import React, { Component } from 'react'
import Count from './Count'
export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  handleName=()=>{
    this.setState({show:! this.state.show}) 
  }
  render() {
    return (
      <div>
        <button onClick={this.handleName}> show</button>
        {this.state.show ? <Count/>: null}
      </div>
    )
  }
}
