import React, { Component } from 'react'

export class ClickHandler extends Component {
 onClick(){
    console.log("success OnClick")
 }
  render() {
    return (
      <div>
        <button onClick={this.onClick}>click_H</button>
      </div>
    )
  }
}

export default ClickHandler
