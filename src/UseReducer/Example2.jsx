import React, { useReducer } from 'react';


const reducer =(state,action)=>{
   switch(action.type){
    case "UPDATE_NAME":
        return{
            ...state,
            name:action.payload
        }
        case "UPDATE_EMAIL":
            return{
                ...state,
                email:action.payload
            }
            case "RESET":
                return{
                    ...state,
                    name:"",
                    email:""
                }
            default:
                return state
   }
}

function Example2(){
const InitialState ={
    name:"Rakesh",
    email:"Rakesh@gmail.com"
}

    const [state,dispatch]=useReducer(reducer,InitialState);
    return(
        <div>
<input type="text" 
name="name" 
id="name"
value={state.name}
onChange={(e)=>dispatch({type:"UPDATE_NAME",payload:e.target.value})}
 />

 <input type="email" name="email" id="email" value={state.email}
  onChange={(e)=>dispatch({type:"UPDATE_EMAIL",payload: e.target.value})} />

<button onClick={()=>dispatch({type:"RESET"})} >Reset</button>
        </div>
    )
}
export default Example2;

//  onChange={(e) =>
//           dispatch({ type: "UPDATE_NAME", payload: e.target.value })
//         }