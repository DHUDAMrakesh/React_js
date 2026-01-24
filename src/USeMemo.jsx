import React, { useEffect,useMemo,useState} from 'react'

const USeMemo = () => {
    const [count,setCount]=useState(0); 
    const [dark,setDark]=useState(false); 
    const doubleNumber=useMemo(()=>{
      return slowfunction(count);
    },[count])
 const ThemeChange={
    backgroundColor:dark? "black":"white",
    color:dark?"white":"black"
 }

  return (
    <div>
      <input type="number" onChange={(e)=>setCount(Number(e.target.value))} />
      <button onClick={()=>setDark(!dark)}>change theme</button>
      <h1 style={ThemeChange} >The number is:{doubleNumber}</h1>
    </div>
  )
}
 function slowfunction(count){
    for(let i=0;i<=100000;i++){
        console.log("slow function executed");
        
    }
    return count*count;
}


export default USeMemo
