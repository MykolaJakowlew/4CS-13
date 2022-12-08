import React, { useContext, useEffect, useState } from "react";
import './style.css';
import cartEmpty from './imgs/shopping-cart-empty.png';
import cartFull from './imgs/shopping-cart-full.png';
import CartContext from "../../cartContext";
import Order from "./order";

function Cart () {
 const { cart } = useContext(CartContext);
 const [show, setShow] = useState(false);
 console.log('show:', show);
 const showOrder = () => {
  setShow(true);
  return false;
 };
 return (
  <div className="cart" onClick={showOrder}>
   <img src={cart.products.length ? cartFull : cartEmpty} alt="" />
   <div className="cart-counter">{cart.products.length}</div>
   <Order show={show} close={() => setShow(false)} />
  </div>
 );
}

export default Cart;