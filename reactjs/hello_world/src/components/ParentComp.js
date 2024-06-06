import React, { PureComponent } from 'react';
import RegularComp from './RegularComp.js';
import PureComp from'./PureComp.js';
import MemoComp from './MemoComp.js'

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'Priyadharshini'
    }
  }
  componentDidMount(){
    setInterval(()=>{
        this.setState({
            name:"Priyadharshini"
        })
    },2000)
  }
  
  render() {
    console.log("Parent Component")
    return (
      <div>
        Parent
        <MemoComp name={this.state.name}/>
        {/* <PureComp name={this.state.name}/>
        <RegularComp name={this.state.name}/> */}
        
      </div>
    )
  }
}

export default ParentComp
