import React from 'react'

function Hero({names}) {
    if(names==="priya"){
       throw new Error("It is not proper name");
    }
  return (
    <div>
      <h1>{names}</h1>
    </div>
  )
}

export default Hero
