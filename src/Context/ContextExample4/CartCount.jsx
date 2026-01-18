import React, { useState} from 'react'
import { useContext } from 'react';
import { CartContext } from './CartContext';
const CartCount = () => {
        const {setCount}=useContext(CartContext); 

    const Handleclick=()=>{
        setCount((prevCount)=>prevCount+1 );
        
    } 
  return (
    <div>
      <button onClick={Handleclick}>Add to Cart</button>
    </div>
  )
}

export default CartCount
