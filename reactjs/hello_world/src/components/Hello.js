import React from "react";

const Hello=(props)=>{
    // return (
    //     <div>
    //         <h1>Hello All</h1>
    //     </div>
    // )

    // return React.createElement('div',null,<h1>hello World</h1>)
    // return React.createElement('div',null, 'h1', 'Hello World')
    // return React.createElement('div',null,React.createElement('h1',null,'Hello To All'))
    // return React.createElement('div',{id:1,className:"hello"},React.createElement('h1',null,"hello! how are you"))
    return(
        <div>
            <h1>{props.name}</h1>
            {props.children}
          
        </div>
    )
    
        

}
export default Hello