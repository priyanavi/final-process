import React from 'react';
// function Greet(){
//   return <h1>Hello World</h1>
// }


// const Greet=()=> "Hello World"

// export const Greet=()=> <h1>"Hello World"</h1>


const Greet=(props)=>{
    console.log(props)
    return (
      <div>
         <h1>{props.name} </h1>
         {props.children}
       </div>
       
    )
}

export default Greet;