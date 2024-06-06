import React from 'react'; // Import React
import './App.css';
import MynewComponent from './components/myComponent';
// import {Greet} from'./components/myComponent';
import {Welcome,Welcome1} from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Count from './components/Count';
import FunctionHandler from './components/FunctionHandler';
import ClickHandler from './components/ClickHandler';
import EventBind from './components/EventBind';
import Parent from './components/Parent';
import Condition from './components/ifelse'
import NameList from './components/NameList';
import StyleSheet from './components/styleSheet';
import  './components/inline';
import AppStyle from'./components/appStyle.css';
import Module  from './components/appStyle.module.css';
import Form from './components/Form';
import LifeCycleMount1 from './components/LifeCycleMount1';
import Table from './components/Table';
import ParentComp from './components/ParentComp';
import MemoComp from './components/MemoComp';
import Reference from './components/Reference';
// import Input from './components/Input';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import Portal from './components/Portal';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary';
import ClickTimes from './components/ClickTimes'
import MouseHover from './components/MouseHover';
import WithCounter from './components/WithCounter'
import ClickCounter1 from './components/ClickCounter1';
import HoverCounter2 from './components/HoverCounter2';
import Counter from './components/Counter';
import {UserProvider}  from './components/UserContext';
import ComponentC from './components/ComponentC';


// function App() {

//   return (
//    <div className="App">
//       <h1 className='error'>MuthuSelvi</h1>
//       <h1 className={Module.success}>Muthuselvi</h1>
//       {/* <StyleSheet  primary={true}/> */}
      
//       <AppStyle/>
//       <MynewComponent name="myNewComponent">
//         <p>Hello ,Priya</p>
//         <button>click mynewcomponent</button>
//       </MynewComponent> 


//       {/* <MynewComponent name="dharshini"/>  */}
//       {/* <MynewComponent name="navi"/>  */}


//       <Hello name="Hello name">
//         <button>click Hello Button</button>
//       </Hello>


//       <Welcome name="Greet name1" >
//         <button>Touch Greet</button>
//       </Welcome>
//       <Welcome1 name="Greet name2" >
//         <button>Touch Greet</button>
//       </Welcome1>
//       <Message/>
//       <Count/>
//       <FunctionHandler/>
//       <ClickHandler/>
//       <EventBind/>
//       <Parent/>
//       <Condition/>
//       <NameList/>
//     </div>
//   );
// }


// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//        <h1 className='error'>MuthuSelvi Girl</h1>
//        <h1 className={Module.success}>Muthuselvi Good Girl</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//     render() {
//       return (
//         <div className="App">
//         {/* <Form/>
//         <LifeCycleMount1/>
//         <Table/> */}
//         {/* <ParentComp/> */}
//         {/* <Reference/>  */}
//         {/* <Input/>   */}
//         {/* <FocusInput/>     */}
//         {/* <FRParentInput/> */}
//         <Portal/>
//         </div>
//     )
//   }
// }



// class App extends React.Component {
//   render() {
//     return (
//       <div classname="App">
//         <Hero names='dharshini'/>
//         <Hero names='girl'/>
//       </div>
//     )
//   }
// }

// function App() {

//     return (
//      <div className="App">
//       {/* <ErrorBoundary>
//       <Hero names='dharshini'/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//        <Hero names='girl'/>
//        </ErrorBoundary>
//        <ErrorBoundary>
//        <Hero names='priya'/>
//        </ErrorBoundary> */}
// {/*        
      //  <ClickTimes name="muthuselvi"/>
      //  <MouseHover/> */}
      //  {/* <WithCounter/> */}
      //  {/* <Counter render={(count,incrementCount)=>(
      //   <ClickCounter1 count={count} incrementCount={incrementCount}/>
      //  )} />
      //  <Counter render={(count,incrementCount)=>(
      //   <HoverCounter2 count={count} incrementCount={incrementCount}/>
      //  )}/>
    //  </div> 
//    )
// }


//1


//  class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <UserProvider value="priya">
//           <ComponentC/>
//         </UserProvider>
//       </div>
//     )
//   }
// }
 

//2
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* <UserProvider value="priya"> */}
//           <ComponentC/>
//         {/* </UserProvider> */}
//       </div>
//     )
//   }
// }

//3

class App extends React.Component {
  render() {
    return (
      <div>
        <UserProvider value="priya">
          <ComponentC/>
        </UserProvider>
      </div>
    )
  }
}



export default App











