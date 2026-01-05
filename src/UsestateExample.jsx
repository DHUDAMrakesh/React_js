import { useState } from "react";

function UsestateExample() {
    const [count,setCount]=useState(0)
    function Increment(){
        setCount((prevCount)=>{
            return prevCount+1
        })
    }
    function Decrement(){
        setCount((prevCount)=>{
            return prevCount-1
        })  
    }
return(
    <div>
        <button onClick={Increment}>+</button>
        <span>{count}</span>
        <button onClick={Decrement} disabled={count===0}>-</button>
    </div>
)
}

export default UsestateExample;