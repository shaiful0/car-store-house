import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Products.css'

const Products = (props) => {
  // console.log(props);
  const {product,handleAddToCart} = props;
  const {name,img,price} = product;
  return (
    <div className='product'>
      <img src={img} alt=""></img>
      <h1>Name:{name}</h1>
      <p>Price:${price}</p>
      <button onClick={ () => handleAddToCart(product)} className='cart-btn'>Add To Cart
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> 
      </button>
      
      </div>
  );
};

export default Products;