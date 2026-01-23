import React, { useReducer } from 'react'


const UseReducerBasics = () => {


  const reducer=(state,action)=>{
    switch(action.type){
      case 'EDIT_PERSON':
        return {
          ...state,
          data: state.data.map(person =>
            person.id === action.payload.id
              ? { ...person, name: action.payload.name }
              : person
        )
      };
    
      case 'DELETE_PERSON':
      return {
        ...state,
        data:state.data.filter((person)=>{
          return(
            person.id!==action.payload  
          )
        })
      }
    
  }
}
  const InitialState = {
    data:[
      {id:1,name:"John"},
      {id:2,name:"Doe"},
      {id:3,name:"Smith"}
    ],length:3
  }
 const[state,dispatch]=useReducer(reducer,InitialState);
const HandleClick=(id)=>{
dispatch(
  {
    type:"DELETE_PERSON",
    payload:id
  }
)  
}


const HandleEdit=(id)=>{
  dispatch(
    {
      type:"EDIT_PERSON",
      payload:id
    }

  )
}



  return (
    
  <div>
<h1>Current users length: {state.length}</h1>

     {
    state.data.map((item)=>{
      const {id,name}=item;
      return(
        <div key={id}>
          {item.name}
                <button onClick={()=>HandleClick(id)}>Delete</button>
                <button onClick={()=>HandleEdit(id)}>Edit</button>

        </div>
      )
    })
   }
  </div>
  )
}

export default UseReducerBasics




