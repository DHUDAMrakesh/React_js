import React from 'react'
import { useContext } from 'react'
import { CounterContext } from './CounterContext'
const Display = () => {
    const {count}=useContext(CounterContext)
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default Display
