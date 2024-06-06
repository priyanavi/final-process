import React, { Component } from 'react'

export class ifelse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLogged:false
      }
    }

//1
    
//   render() {
//     if(this.state.isLogged){
//         return(
//             <div>
//                 <h1>Hello new user</h1>
//             </div>
//         )
//     }
//     else{
//         return(
//             <div>
//                 <h1>Hello Muthu</h1>
//             </div>
//         )
//     }
// }

//2

//   render(){
//     let Message
//     if(this.state.isLogged){
//         Message=<div>Hello old user</div>
//     }
//     else{
//         Message=<div>Hello new user</div>
//     }
//     return <div>{Message}</div>
//   }


//3

// render(){
//     return this.state.isLogged ? ( <div> Hello User</div>) :( <div>Hello Guest</div>)
// }

//4

render(){
    return this.state.isLogged && <div> Hello User </div>
}
}
 

export default ifelse
