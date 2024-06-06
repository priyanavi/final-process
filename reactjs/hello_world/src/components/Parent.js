import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      parentName:"Fa_Mo"
   }
   this.childname=this.childname.bind(this)
 }
 childname(Child){
    alert(`hii ${Child}`)
 }
 
  render() {
    return (
      <div>
        <Child childname={this.childname}/>
      </div>
    )
  }
}

export default Parent
