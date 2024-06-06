import React from 'react';
import List from  './List'

//1


// function NameList() {
//     const list=["name1",'name2','name3']
//   return (
//     <div>{
//         list.map((lists)=><h1>{lists}</h1>)
//         }
      
//     </div>
//   )
// }

//2


// function NameList() {
//     const list=['name1','name2','name']
//     const namelist=list.map((lists)=><h1>{lists}</h1>)
//   return (
    
//     <div>
//        {namelist}
//     </div>
//   )
// }


//3


// function NameList() {

//     const PersonList=[
//         {
//             id:1,
//             name:"name1",
//             age:22
//         },{
//             id:2,
//             name:"name2",
//             age:21
//         },{
//             id:3,
//             name:"name3",
//             age:20
//         }
//     ]
//     const namelist=PersonList.map((lists)=><h5>{lists.name}</h5>)

//   return (
//     <div>
//       <h1>{namelist}</h1>
//     </div>
//   )
// }


function NameList() {

    const PersonList=[
        {
            id:1,
            name:"name1",
            age:22
        },{
            id:2,
            name:"name2",
            age:21
        },{
            id:3,
            name:"name3",
            age:20
        }
    ]
    const namelist=PersonList.map((PersonList)=><List PersonList= {PersonList }/>)

  return (
    <div>
      {namelist}
    </div>
  )
}

export default NameList





