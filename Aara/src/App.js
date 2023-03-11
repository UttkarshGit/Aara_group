import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import {
  Switch,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Dashboard from './Dashboard';
import Tables from './Table';

function App() {

  return (
    <div className="App" >
      <BrowserRouter>
      <Routes>
  <Route path="/" element={<Dashboard/>}></Route> 
   <Route path='/signup' element={<Signup/>} /> 
   <Route path='/table' element={<Tables/>} />
   <Route path='/signin' element={<Login/>} />
   
  </Routes>
      </BrowserRouter>
    </div>
  
  );
}
export default App;
