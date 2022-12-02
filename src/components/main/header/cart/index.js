import React, { useContext, useEffect } from "react";
import './style.css';
import cartEmpty from './imgs/shopping-cart-empty.png';
import cartFull from './imgs/shopping-cart-full.png';
import CartContext from "../../cartContext";

function Cart () {
 const { cart } = useContext(CartContext);
 console.log('cart:', cart);
 // useEffect(() => { }, [cart]);
 return (
  <div className="cart">
   <img src={cart.products.length ? cartFull : cartEmpty} alt="" />
   <div className="cart-counter">{cart.products.length}</div>
  </div>
 );
}

export default Cart;