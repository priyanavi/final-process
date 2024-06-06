import React, { Component } from 'react'

export class Form extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'',
      Comments:'',
      Language:'Python',

   }
 }

 nameEventChange=(event)=>{
    this.setState({
        name:event.target.value
    })
 }
 CommentEvent=(event)=>{
    this.setState({
        Comments:event.target.value
    })
}
LanguageEvent=(event)=>{
    this.setState({
        Language:event.target.value
    })
}

SubmitEvent=(event)=>{
    alert(`${this.state.name} ${this.state.Comments} ${this.state.Language}`)
    event.preventDefault()
}
 

  render() {
    return (
        <form onSubmit={this.SubmitEvent}>
            <div >
                <label>name</label>
                <input type="text" value={this.state.name} onChange={this.nameEventChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea type="text" value={this.state.Comments} onChange={this.CommentEvent}/>
            </div>
            <div>
                <label>Language</label>
                <select value={this.state.Language} onChange={this.LanguageEvent}>
                    <option>Python</option>
                    <option>C</option>
                    <option>Java</option>
                </select>
            </div>
            <button>Submit</button>
        </form>     
    )
  }
}

export default Form
