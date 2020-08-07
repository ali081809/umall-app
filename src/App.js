import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Reg from"./pages/Register/Register"
import Index from "./pages/Index/Index"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/index" component={Index}></Route>
        {/* 重定向 */}
        <Redirect to="/login"></Redirect>
      </Switch>
     
    </div>
  );
}

export default App;
