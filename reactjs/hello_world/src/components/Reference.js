import React, { Component } from 'react'

class Reference extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
    //   this.cbRef=null
    //   this.setcbRef=Element=>{
    //     this.cbRef=Element
    //   }
      }

componentDidMount(){
  this.inputRef.current.focus()
  console.log(this.inputRef)
}
// componentDidMount(){
//     if(this.cbRef){
//         this.cbRef.focus()
//     }
// }
clickHandler=()=>{
    alert(this.inputRef.current.value)
}
render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        {/* <input type="text" ref={this.setcbRef}/> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
}

}

export default Reference
