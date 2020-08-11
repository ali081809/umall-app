import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from "react-router-dom"
import MyRouter from "./pages/MyRouter/MyRouter"
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
        <MyRouter path="/index" component={Index}></MyRouter>
        <MyRouter path="/feileiDetail/:id/:catename" component={FenleiDetail}></MyRouter>
        <MyRouter path="/goodsDetail/:id" component={GoodsDetail}></MyRouter>

        {/* 重定向 */}
        <Redirect to="/login"></Redirect>
      </Switch>
     
    </div>
  );
}

export default App;
