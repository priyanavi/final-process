import React from 'react';
class Message extends React.Component{
    constructor(){
        super()
        this.state={
           information:"what you need take from me"
        }
    }

changeMessage(){
    this.setState({
        information:"thank you"
    })
}
render(){
    return (
        <div>
          <h1>{this.state.information}</h1>
          <button onClick={()=>this.changeMessage()}>subscribe</button>
        </div>
    )
}
}
export default Message