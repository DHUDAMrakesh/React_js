import React, {  useReducer,useState } from 'react'
function reducer(state,action){
    switch(action.type){
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
            case "REMOVE":
                const newTodos=state.todos.filter((todo,index)=>index!==action.payload);
                return{
                    ...state,
                    todos:newTodos
                }

            case "EDIT":
              return{
                ...state,
                editIndex:action.payload
              }

            case "UPDATE_TODO":
              return{
                ...state,
                todos:state.todos.map((todo,index)=>{
                  return  (

                    index===state.editIndex? action.payload:todo
                  )
                }),
                editIndex:null
              }  

              default:
                return state;


}

}

const TodoList = () => {
    const InitialState ={
        todos:[],
        editIndex:null

    }
const[state,dispatch]=useReducer(reducer,InitialState);
const [item,setItem]=useState("");
  return (
    <div>
      <input type="text"  value={item} onChange={(e)=>setItem(e.target.value)} />
         <button  onClick={()=>{
          if(state.editIndex===null){
            dispatch({type:"ADD_TODO",payload:item});
            setItem("");
          } else{
            dispatch({type:"UPDATE_TODO",payload:item});
            setItem("");
          }
         }} >{state.editIndex===null?"ADD":"UPDATE  "}</button>

    

    {
      state.todos.map((todo,index)=>{
        return(
          <div key={index}>
            <h3>{todo}</h3>
            <button onClick={()=>{dispatch({type:"REMOVE",payload:index})}}>Remove</button>
<button onClick={()=>{dispatch({type:"EDIT",payload:index})}}>Edit</button>
          </div>
        )
      })
    }

    
    </div>
  )
}

export default TodoList
