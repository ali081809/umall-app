import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom"
import Login from "./pages/Login/Login"
import Reg from"./pages/Register/Register"
import Index from "./pages/Home/Home"
import FenleiDetail from "./pages/FenleiDetail/FenleiDetail"
import GoodsDetail from "./pages/GoodsDetail/GoodsDetail"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/reg" component={Reg}></Route>
        <Route path="/index" component={Index}></Route>
        <Route path="/feileiDetail/:id/:catename" component={FenleiDetail}></Route>
        <Route path="/goodsDetail/:id" component={GoodsDetail}></Route>

        {/* 重定向 */}
        <Redirect to="/login"></Redirect>
      </Switch>
     
    </div>
  );
}

export default App;
