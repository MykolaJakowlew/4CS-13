import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

function MainPage () {
 const navigate = useNavigate();
 useEffect(() => {
  const token = localStorage.getItem('token');
  if (!token) {
   navigate('/login');
  }
 }, []);

 return (
  <div className="full-screen bg-main">
   This is main page
  </div>
 );
}

export default MainPage;