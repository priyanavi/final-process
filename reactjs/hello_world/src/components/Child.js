import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.childname("priyadharshini")}>Par-chi</button>
    </div>
  )
}

export default Child
