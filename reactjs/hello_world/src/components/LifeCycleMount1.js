import React, { Component } from 'react';
import LifeCycleMount2 from './LifeCycleMount2';

class LifeCycleMount1 extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:"priya"
   }
   console.log(" L1 Constructor")
 }
 
 static getDerivedStateFromProps(){
    console.log("L1 getDerivedStateFromProps")
    return null
 }
 componentDidMount(){
    console.log("L1 componentDidMount")
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
changeButton=()=>{
 this.setState({
  name:"Priyadharshini"
 })
}
render() {
    console.log("L1 render")
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.changeButton}>Click</button>
        <LifeCycleMount2/>
      </div>
    )
  }
}

export default LifeCycleMount1
