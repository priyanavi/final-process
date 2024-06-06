import React, { Component } from 'react';


class LifeCycleMount2 extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:"priya"
   }
   console.log(" L2 Constructor")
 }
 static getDerivedStateFromProps(){
    console.log("L2 getDerivedStateFromProps")
 }
 componentDidMount(){
    console.log("L2 componentDidMount")
 }
 shouldComponentUpdate(){
  console.log("L1 shouldComponentUpdate")
  return true
 }
 getSnapshotBeforeUpdate(prevProps,prevState){
  console.log("L1 getSnapshotBeforeUpdate")
  return null
 }
componentDidUpdate(){
  console.log("L1 componentDidUpdate")
}
 
  render() {
    console.log("L2 render")
    return (
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
}

export default LifeCycleMount2
