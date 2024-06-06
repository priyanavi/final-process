import React from 'react';
// class Welcome extends React.Component{
//     render(){
//         return( 
//         <div>
//            <h1> {this.props.name}</h1>
//            {this.props.children}
//         </div>
//      )
//     }
// }



// const Welcome =(props)=>{
//     return(
//         <div>
//             <h1>{props.name}</h1>
//             {props.children}
//         </div>
//     )
// }

// const Welcome =({name,children})=>{
//     return(
//         <div>
//             <h1>Hiii {name} and {children}</h1>
//         </div>
//     )
   
// }

export class Welcome extends React.Component{
    render(){
        const {name,children}=this.props
        return( 
        <div>
           <h1> class {name}</h1>
           {children}
        </div>
     )
    }
}
export const Welcome1 =(props)=>{
    const {name,children}=props
    return(
        <div>
            <h1>function {name} and {children}</h1>
        </div>
    )
   
}
// export {Welcome,Welcome1}