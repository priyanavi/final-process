import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"click"
      }
      this.event=this.event.bind(this)
    }
// event(){
//     this.setState({
//         message:"good"
//     })
//     console.log(this)
// }
event=()=>{
    this.setState({
        message:"good"
    })
}
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.event.bind(this)}>click_Bind</button> */}
        {/* <button onClick={()=>this.event()}>Click_Bind</button> */}
        <button onClick={this.event}>Click_Bind</button>
      </div>
    )
  }
}

export default EventBind
