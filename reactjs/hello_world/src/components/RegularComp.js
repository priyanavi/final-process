import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("Regular Component")
    return (
      <div>
        Regular component {this.props.name}
      </div>
    )
  }
}

export default RegularComp
