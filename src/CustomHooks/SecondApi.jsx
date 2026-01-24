import React, { useEffect, useState } from 'react'


const SecondApi= () => {
    const URL='https://jsonplaceholder.typicode.com/posts'
const ApiCall= async ()=>{
    setIsError(true)
    setLoading(true)
   try {
        const response=await fetch(URL)

     const data=await response.json()
    console.log(data);
    setUsers(data)
    setLoading(false)
    setIsError(false)

   } catch (error) {
    setLoading(false)
    setIsError(true)
    
   }
    
}
    const [users,setUsers]=useState([])
    const[loading,setLoading]=useState(false)
    const[isError,setIsError]=useState(false)
    useEffect(()=>{
    ApiCall(URL)
},[])

if(loading){
   return <h5>Loading...</h5>
}
if(isError){
    return <h3>Something went wrong</h3>
}
  return (
    <div>
        {users.map((eachPerson)=>{
            const{id,title}=eachPerson
            return(
                <ul>

                    <li key={id}>
                        <h2>Posts</h2>
<div>{title}</div>
                    </li>
                </ul>
            )
        })}
    </div>
  )
}

export default SecondApi
