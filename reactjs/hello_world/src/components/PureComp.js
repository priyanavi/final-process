import React, { Component } from 'react'

export class PureComp extends Component {
  render() {
    console.log("Pure component")
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default PureComp
