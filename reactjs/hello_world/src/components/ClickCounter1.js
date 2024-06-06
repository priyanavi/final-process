import React, { Component } from 'react'

export class ClickCounter1 extends Component {
    
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>click {count} times</button>
      </div>
    )
  }
}

export default ClickCounter1
