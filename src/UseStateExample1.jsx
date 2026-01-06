import React, { use, useState } from 'react'
// Conditional rendering example
const UseStateExample1 = () => {
    const [showdata,setShowdata]=useState(false)
    const HandleData =()=>{
        setShowdata(!showdata)
    }
  return (
    <div>
      <button onClick={HandleData}>{showdata?"hide":"show"}</button>
      {/* {
        showdata &&<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus porro excepturi non neque tempora dolore adipisci. Assumenda repudiandae, quia maxime in maiores ab itaque. Nihil iure corporis reprehenderit eaque reiciendis.</p>

      } */}
      <div>{showdata?<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus optio facere quam a dolores possimus aperiam obcaecati assumenda nemo architecto.</p>:<p>Data is hidden</p>}</div>
    </div>
  )
}

export default UseStateExample1
