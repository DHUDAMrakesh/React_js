import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import CartCount from './CartCount';
const ShowCount = () => {
    const {count}=useContext(CartContext)
  return (
    <div>
     Count: {count}

    </div>
  )
}

export default ShowCount
