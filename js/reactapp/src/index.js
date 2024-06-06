import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';

// class App extends Component{
//   render(){
//     return (
//       <div className='App'>
//        <h1>Hello World!</h1>
//        </div>
//     )
//   }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



