import React, { useState } from 'react'
import Increment from './Increment';
import Display from './Display';
import { CounterContext } from './CounterContext';
const Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
        <CounterContext.Provider value={{count,setCount}}> 
            <Increment />
            <Display /> 
        </CounterContext.Provider>
    </div>
  )
}

export default Counter
