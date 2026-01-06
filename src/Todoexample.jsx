import React, { use } from 'react'
import { useState } from 'react'
const Todoexample = () => {

   
    const [list, setList] =useState([])
    const [message,setMessage]=useState({
       
        text:"",
        id:""
      
    })
    const [isEditingState,setisEditingState]=useState({
      id:"",
      isEditing: false
    })

 
const handlechange=(e)=>{
  e.preventDefault();
  setMessage({
    ...message,
    text:e.target.value
  })
} 
const Handlesubmit =(e)=>{
  e.preventDefault()
  let newtodo={
    text:message.text,
    id:new Date().getTime().toString()
  }
  setList([...list,newtodo])
  setMessage({
    text:"",
    id:""
  })
}
const handleDelete=(id)=>{
  const filteredlist=list.filter((item)=>{
    return item.id!==id
  })
  setList(filteredlist)
}


const handleEdit =(id)=>{
  console.log(id)
  setisEditingState({
    ...isEditingState,
    id:id,
    isEditing:true
  })
  let editableitem=list.find((item)=>item.id===id)
  setMessage({
    ...message,
    id:editableitem.id,
    text:editableitem.text
  })
  console.log(editableitem)
}

const HandleEdit =(e)=>{
  e.preventDefault()
  console.log("previous todos:",list)
  let newTodos=list.map((item)=>{
    if(item.id===isEditingState.id){
      return {
        text:message.text,
        id:isEditingState.id
      }
    }else{
      return item
    }
  })
  setList(newTodos)
  console.log(newTodos)
  setMessage({
    text:"",
    id:"",
  })
  setisEditingState({
    id:"",
    isEditingState:false
  })
}

  return (
    <div>
      <form action="">
<input type="text"
name='message'
value={message.text}
placeholder='enter some text' 
onChange={handlechange}
className='input'
/>
           {isEditingState.isEditing? (<button className='edit-btn' onClick={HandleEdit}>edit</button>)
:(<button className='add-btn'  onClick={Handlesubmit} type='submit'>Add</button>)
        }

      </form>
      <hr />
       {list.length === 0 && <h3>No todos</h3>}
      <ul>
        {list.map((item)=>{
          const {text,id}=item
          return(
            <div className='main'>
            <li key={id}>
              <span className='item'>{text}</span>
  <button className='edit-btn' onClick={()=>handleEdit(id)}>edit</button>
              <button  className="delete-btn"onClick={() => handleDelete(id)}>delete</button>
            </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Todoexample
