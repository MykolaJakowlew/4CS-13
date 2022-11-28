import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import axios from 'axios';

function LoginPage () {
 const emailRef = useRef();
 const passwordRef = useRef();
 const btnRef = useRef();
 const navigate = useNavigate();

 useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
   navigate('/');
  }
 }, []);


 const login = async () => {
  btnRef.current.disabled = true;
  const email = emailRef.current.value;
  const password = passwordRef.current.value;
  if (!email || !password) {
   btnRef.current.disabled = false;
   return;
  }
  const response = await axios.post(
   'https://dummyjson.com/auth/login',
   { username: email, password: password }
  );
  localStorage.setItem('token', response.data.token);
  navigate('/');
 };

 return (
  <div className="full-screen center bg-main">
   <div className="login-wrapper">
    <div>Login: <input ref={emailRef} type="text" /></div>
    <div>Password: <input ref={passwordRef} type="password" /></div>
    <div>
     <button ref={btnRef} onClick={login}>Login</button>
    </div>
   </div>
  </div>
 );
}

export default LoginPage;