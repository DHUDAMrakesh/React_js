import React, { useContext } from 'react'
import { CounterContext } from './CounterContext'
import Counter from './Counter'
const Increment = () => {
    const {count,setCount}=useContext(CounterContext)
  return (
    <div>
      {/* <button onClick={()=>setCount(prev=>prev+1)}>Increment</button> */}
       <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
    </div>
  )
}

export default Increment
