import React from 'react';
import './Products.css'

const Products = (props) => {
  const {name,img,price} = props.product;
  return (
    <div className='product'>
      <img src={img} alt=""></img>
      <h1>Name:{name}</h1>
      <p>Price:${price}</p>
      <button className='cart-btn'>Add To Cart</button>
    </div>
  );
};

export default Products;