// import logo from './logo.svg';
import './App.css';
import {Component } from 'react';
import Table from './table';

 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    const character=[
      {
        name:"nikitha",
        age:'22',
      },
      {
        name:"thiya",
        age:'21',    
      },
    ]
    return (
      <div className='container'>
        <h1>Table</h1>
        <Table charactersData={character}/>
        
       </div>
    )
  }
}

export default App;
