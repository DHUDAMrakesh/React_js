import { useState,useEffect } from "react"

const UseEffectAdvanced =()=>{
    // const [count,setCount]=useState(0)
    // const [toggle,setToggle]=useState(true)
    const[pagewidth,setPagewidth]=useState(window.innerWidth)
        useEffect(()=>{
        const resizeHandler= ()=>{
            setPagewidth(window.innerWidth)}
window.addEventListener('resize',resizeHandler)

return()=>{
    console.log("iam removing EventListeners")
    window.removeEventListener('resize',resizeHandler)
}

        })
    return(
        <div>
{/* <h1 onClick={()=>setToggle(!toggle)}>{toggle?"Open":"Close"}</h1> */}
                {/* <h1>Hello Iam learning UseEffect</h1>
<button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
<p>Count:{count}</p> */}
<p>{pagewidth}</p>
    </div>
    )
}
export default UseEffectAdvanced 