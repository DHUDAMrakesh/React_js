import { useEffect, useState } from "react";
function UseEffectExample(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
       console.log("Hello Iam from UseEffect")
    },[])
    return(
        <div>
                <h1>Hello Iam learning UseEffect</h1>
<button onClick={()=>setCount((prevCount)=>prevCount+1)}>+</button>
<p>Count:{count}</p>
    </div>
    )
}
export default UseEffectExample;