import React, { useContext } from "react";
import CartContext from "../../cartContext";
import './style.css';

/**
 * 
 * @param {Object} props 
 * @param {String} props.brand
 * @param {String} props.title
 * @param {String} props.category
 * @param {String} props.description
 * @param {number} props.discountPercentage
 * @param {number} props.id
 * @param {number} props.price
 * @param {number} props.rating
 * @param {number} props.stock
 * @param {string} props.thumbnail
 * @param {string[]} props.images
 * @returns 
 */
function Product (props) {
 const { setCart } = useContext(CartContext);
 const addToCart = () => {
  setCart((prevState) => {
   prevState.products.push(props);
   return prevState;
   // return {
   //  products: [...prevState.products, props]
   // };
  });
 };

 return (
  <div className="product">
   <div>title: {props.title}</div>
   <div>category: {props.category}</div>
   <div>price: {props.price}</div>
   <div className="product-add">
    <button onClick={addToCart}>Add to card</button>
   </div>
  </div>
 );
}

export default Product;