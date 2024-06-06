import React, { Component } from 'react';
// import Input from './Input';

class FocusInput extends Component {
 constructor(props) {
   super(props)
   this.componentRef=React.createRef()
   }
 clickHandler=()=>{
    this.componentRef.current.focus()
 }
  render() {
    return (
      <div>
        <input type='text' ref={this.componentRef}/>
        <button onClick={this.clickHandler}>ClickReference</button>
      </div>
    )
  }
}

export default FocusInput
