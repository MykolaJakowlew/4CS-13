import React from "react";
import { useSelector, useDispatch } from 'react-redux';
// import { actions } from '../../store';
import { actions } from '../../store/counter_2.store';
import { actions as actions_1} from '../../store/counter_1.store';

function Comp2 () {
 console.log('Comp2 re-render');
 const dispatch = useDispatch();
 const counter = useSelector(state => state.counter_2);
 const increment = () => {
  dispatch(actions.increment(3));
  dispatch(actions_1.increment(10));
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

export default Comp2;