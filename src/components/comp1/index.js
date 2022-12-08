import React from "react";
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
// import { actions } from '../../store';
import { actions } from '../../store/counter_1.store';

function Comp1 () {
 console.log('Comp1 re-render');
 const dispatch = useDispatch();
 const counter = useSelector(state => state.counter_1);
 const increment = () => {
  dispatch(actions.increment(3));
 };
 const decrement = () => {
  dispatch(actions.decrement(3));
 };
 return (
  <div className="circle">
   <div>
    Counter value: {counter.value}<br />
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
   </div>
  </div>
 );
}

export default Comp1;