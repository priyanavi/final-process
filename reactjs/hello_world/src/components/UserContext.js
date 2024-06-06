import React from 'react'

//2
const UserContext=React.createContext("Dharshini")

//1
// const UserContext=React.createContext()
const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export  {UserProvider,UserConsumer}
export default UserContext
 