import React, { useState } from 'react'
import { CartContext } from './CartContext';
import CartCount from './CartCount';
import ShowCount from './ShowCount';
const ProductComponent = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
      <CartContext.Provider value={{count,setCount}}>
     <CartCount />
     <ShowCount />
      </CartContext.Provider>
    </div>
  )
}

export default ProductComponent
