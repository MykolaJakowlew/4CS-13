import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../../cartContext";
import './style.css';

function Order (props) {
 const { cart } = useContext(CartContext);

 const [show, setShow] = useState(false);
 useEffect(() => {
  setShow(props.show);
 }, [props.show]);

 return (
  <div className={`order-wrapper ${show ? 'show' : ''}`}>
   <div className="order">
    Exercitation consequat deserunt in sunt magna. Duis deserunt minim ut consectetur. Cupidatat nostrud officia voluptate ut incididunt. Veniam exercitation excepteur est tempor aute do eiusmod ad eu mollit cupidatat ea. Consectetur tempor pariatur eiusmod elit cupidatat. Non exercitation adipisicing Lorem mollit qui veniam ad.
    {
     cart.products.map((product, i) => {

      return (<div>{product.title}</div>);
     })
    }

    <div className="order-btns">
     <button onClick={props.close}>close</button>
    </div>
   </div>
  </div>
 );
}

export default Order;