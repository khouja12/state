import React, { Component } from 'react'

export default class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.person = { name: "khouja", job: "full stack ", img: "https://blog.vantagecircle.com/content/images/2021/07/Organizational-Development.png" }
  }

componentDidMount(){
  setInterval(()=>{
    this.setState(prevState=>({count:prevState.count + 1}))
  }, 1000)
}
  render() {
    return (
      <div>
        <h2> {this.person.name}</h2>
        <h2> {this.person.job}</h2>
        <img src={this.person.img} alt='img' />
        <h2>{ this.state.count} </h2>


      </div>
    )
  }
}
