import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Form from './components/Form';
import Home from './components/Home/Home';
import UserHome from './components/Home/UserHome';
import Payment from './components/Payment';
import Ticket from './components/Ticket';


function App() {

  
  const [user,setUser] = useState({value:null});
  const update = (dd)=>{
    // alert(dd);
    console.log(dd);
    setUser({value:dd});
  }
  useEffect(()=>{
    if(user && user.value){
    axios.post('https://backend-4la3.onrender.com/api/create',(user.value))
    .then(()=>{
      localStorage.setItem("userId",user.value.id);
      localStorage.setItem("user",user.value.name);
    })
    .catch((err)=>{
      localStorage.clear();
      console.log(err);
    })}
  },[user])
  return (
  

      <Routes>
          <Route path="/" element={<Home update={update}/>}/>
        <Route path="/form" element={<Form />}/>
          <Route path='/user/payment' element={<Payment user={user} /> }/>
          <Route path="/user/payment/success" element={<Ticket user={user}/>} />
          <Route path="/user/login" element={<Login/>}/>
          <Route path='/landing' element={<UserHome user={user} />}/>
      </Routes>
  

      

  );
}

export default App;
