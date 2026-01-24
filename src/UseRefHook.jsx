import React, { useEffect, useState,useRef } from 'react'

const UseRefHook = () => {
    const [name ,setName]=useState("");
    const [renderCount,setRenderCount]=useState(0);
    const renderCount1=useRef(1);
    const inputDom=useRef()
    console.log(renderCount);
    
    useEffect(()=>{
        renderCount1.current=renderCount1.current+1;
        console.log(inputDom);
        
    })
    const focus=()=>{
        inputDom.current.focus();
    }
    
  return (
    <div>
<button onClick={focus}>Focus input</button>

      <input type="text" value={name} ref={inputDom} onChange={(e)=>setName(e.target.value)} />
      <h4>{name}</h4>
        <h4>Component Rendered : {renderCount1.current} times</h4>
    </div>
  )
}

export default UseRefHook
