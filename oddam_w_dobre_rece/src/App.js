import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';


import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import LogOut from "./components/LogOut/LogOut";

function App() {
  return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          {/*<Route path='/logout' component={LogOut}/>*/}
        </Switch>
      </HashRouter>
  );
}

export default App;
