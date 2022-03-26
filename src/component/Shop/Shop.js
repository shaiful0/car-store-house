import React, { useEffect, useState } from 'react';
import Products from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    // console.log(products);
    const [cart , setCart] = useState([]);
    

    

    useEffect(()=>{
      fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
     const newCart = [...cart ,product]
      setCart(newCart);

    }
    const removeElement = () =>{
      const newCart = []
      setCart(newCart)
    }


    const randomNumber = (max , min) => {
      Math.floor(Math.random() * cart.length)
    }
    const rndInt =randomNumber(0, cart.length)


  return (
    <div className='shop-container'>
      
      <div className="product-container">
        {
          products.map(product => <Products 
            key={product.id}
            product ={product}
            handleAddToCart={handleAddToCart}
            ></Products>)
        } 
      </div>
      <div className="cart-container">
        <h1>Selected Cars</h1>
       {
         cart.map((item) => (
           <h2 key={item.id}>{item.name}</h2>
         ))
       } 
      <p><button onClick={() =>randomNumber(rndInt)}>Choose One</button></p>       
       <p><button onClick={removeElement}>Reset</button></p> 
            
      </div>
    </div>
  );
};

export default Shop;