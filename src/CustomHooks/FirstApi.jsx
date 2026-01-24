import React, { useEffect, useState } from 'react'
import SecondApi from './SecondApi'
import useFetch from './useFetch'
const URL='https://jsonplaceholder.typicode.com/users'
const FirstApi = () => { 
   const [users,loading,isError]=useFetch(URL)

if(loading){
   return <h5>Loading...</h5>
}
if(isError){
    return <h3>Something went wrong</h3>
}
  return (
    <div>
        <SecondApi />
        {users.map((eachPerson)=>{
            const{name,id,email}=eachPerson
            return(
                <ul>
                    <li key={id}>
<div>{name}</div>
<div>{email}</div>
                    </li>
                </ul>
            )
        })}
    </div>
  )
}

export default FirstApi
