import React, { Component } from 'react'

class Count extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
 countIncrement(){
  
//     this.setState({
//         count:this.state.count+1
//     },()=>console.log(this.state.count)
// )
// console.log("count",this.state.count)
this.setState(prevState=>({
  count:prevState.count+1
}))
  console.log(this.state.count)   
}
 fiveIncrement(){
  this.countIncrement()
  this.countIncrement()
  this.countIncrement()
  this.countIncrement()
  this.countIncrement()
 }
  
  render() {
    return (
      <div>
        <div><h1>count-{this.state.count}</h1></div>
        {/* <button onClick={()=>this.countIncrement()}>ButINc</button> */}
        <button onClick={()=>this.fiveIncrement()}>ButINc</button>
        
      </div>
    )
  }
}

export default Count;
