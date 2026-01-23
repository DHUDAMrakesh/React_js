import React from 'react'
import { useReducer,useState } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
  return {
    ...state,
    todos: [...state.todos,action.payload]
  }

case "REMOVE":
    const newTodos=state.todos.filter((todo,index)=>index!==action.payload)
    {
        return {
            ...state,
            todos:newTodos
        }
    }
    case "EDIT":
        return{
            ...state,
            editindex:action.payload
        }
 case "UPDATE_TODO":
    return{
        ...state,
    todos:state.todos.map((todo,index)=>{
        return (
            index===state.editindex? action.payload:todo    
        )
    })
    }

        default:
            return state;   
    }}
const Example3 = () => {
const InitialState={
    todos:[],
    editindex:null
}

          const [state,dispatch]=useReducer(reducer,InitialState);
          const [item,setItem]=useState("");
  return (
    <div>
<input type="text" value={item} onChange={(e)=>setItem(e.target.value)} />

<button
    onClick={()=>{  
if(state.editindex===null){
    dispatch({type:"ADD",payload:item});
    setItem("");
}else{
    dispatch({type:"UPDATE_TODO",payload:item});
    setItem("");
}

    }}
>
{state.editindex===null?"ADD":"UPDATE"}
</button>


    <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => dispatch({ type: "REMOVE", payload: index })}>
              Remove
            </button>

            <button onClick={()=>dispatch({type:"EDIT" ,payload:index})} >Edit</button>

          </li>
        ))}
      </ul>

    </div>
  )
}
export default Example3
