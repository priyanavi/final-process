import React from 'react'

function FunctionHandler() {
 function HandleEvent(){
    console.log("successfully")
 }
  return (
    <div>
       <button onClick={HandleEvent}>Handle</button>
    </div>
  )
}

export default FunctionHandler
