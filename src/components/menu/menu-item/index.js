import React, { useState } from "react";
import './style.css';

function SubMenuComponent (items, show) {
 let classList = 'sub-menu';
 if (show) {
  classList += ' show';
 }
 return (
  <div className={classList}>
   {items.map(elem => <div>{elem.title}</div>)}
  </div>
 );
}

function MenuItem (props) {
 const [show, setShow] = useState(false);

 const onMouseEnter = () => {
  // console.log(`onMouseEnter: ${props.title}`);
  setShow(true);
 };
 const onMouseLeave = () => {
  // console.log(`onMouseLeave: ${props.title}`);
  setShow(false);
 };
 return (
  <div className="menu-item">
   <span
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
   >{props.title}</span>
   {props.items && SubMenuComponent(props.items, show)}
  </div>
 );
}

export default MenuItem;