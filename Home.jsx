import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";

import Login from "./login";
import { App } from "./App";
import { Provider } from "react-redux";

import  Register  from "./loginn";
import store from "./store";
const Home=()=>{
  return( 
    <Provider>
    <BrowserRouter>
    <Routes>
        
    <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loginn" element={<Register/>}/>
        
    </Routes>
    </BrowserRouter>
    </Provider>
  );
};
export {Home};