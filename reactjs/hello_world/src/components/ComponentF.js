import React, { Component } from 'react'
import { UserConsumer } from './UserContext'
export class ComponentF extends Component {
  render() {
    return (
    
        <UserConsumer>
            {username=>{
                return <div><h1>Hello {username}</h1></div>
            }}
        </UserConsumer>
    
    )
  }
}

export default ComponentF
