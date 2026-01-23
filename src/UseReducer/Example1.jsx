import React, { useReducer } from "react"
const reducer=(state,action)=>{
    if(action.type==="TURN_ON"){
        return true
    }
    if(action.type==="TURN_OFF"){
        return false
    }
}

function Example1(){
    const [IsOn,dispatch]=useReducer(reducer,false)
return(
    <div>
        <h1>{IsOn?"ON":"OFF"}</h1>
        <button onClick={() => dispatch({type:"TURN_ON"})}>ON</button>
        <button onClick={() => dispatch({type:"TURN_OFF"})}>OFF</button>
    </div>
)
}
export default Example1;