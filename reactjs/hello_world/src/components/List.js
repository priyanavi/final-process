import React from 'react'

function List({PersonList}) {
   

  return (
    <div>
      <h1> Name is {PersonList.name} and {PersonList.age}</h1>

    </div>
  )
}

export default List
