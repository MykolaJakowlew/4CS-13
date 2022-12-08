import React from "react";
import './style.css';
import { useSelector } from 'react-redux';

function Comp3 () {
 const counters = useSelector(state => {
  return {
   a: state.counter_1,
   b: state.counter_2
  };
 });
 return (
  <div className="comp3">
   <div>{counters.a.value}</div> | <div>{counters.b.value}</div>
  </div>
 );
}

export default Comp3;