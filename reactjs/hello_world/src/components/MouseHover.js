import React, { Component } from 'react'
import './WithCounter.js';
import updatedComponent from './WithCounter.js';
class MouseHover extends Component {
// constructor(props) {
//   super(props)

//   this.state = {
//      count:0
//   }

// }
//  HoverTimes=()=>{
//     this.setState(prevState=>{
//         return {count:prevState.count+1}
//     })
//  }

  render() {
    // const {count}=this.state
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onMouseOver={incrementCount}>mouse hover {count} times</button>
        {/* <button onMouseOver={this.HoverTimes}>{this.props.name}mouse hovertimes</button> */}
      </div>
    )
  }
}

export default updatedComponent(MouseHover,10)
