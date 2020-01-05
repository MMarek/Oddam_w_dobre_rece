import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import LogOut from "../components/LogOut/LogOut";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/logowanie' component={Login}/>
          <Route path='/rejestracja' component={Register}/>
          <Route path='/wylogowano' component={LogOut}/>
        </Switch>
      </HashRouter>
  );
}





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

export default App;
