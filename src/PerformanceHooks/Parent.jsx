import React, { useCallback, useState } from 'react'
import Count from './Count'
import Btn from './Btn'
const Parent = () => {
const [age,setAge]=useState(0)
const [salary,setSalary]=useState(7000)
    const Increment=useCallback(function Increment(){
        
setAge(age+1)

    },[age])
    const IncrementSal=useCallback(function IncrementSal(){
        setSalary(salary+1000)
    },[salary])

  return (
    <>
      <Count text={"age"}
number={age}      />
   <Count text={"salary"}
number={salary}/>

    {/* <Btn onClick={Increment}>Increment</Btn>
        <Btn onClick={IncrementSal}>Increment sal</Btn> */}
<Btn clickHandler={Increment} >Increment age</Btn>
<Btn clickHandler={IncrementSal} >Increment sal</Btn>

    </>
  )
}

export default React.memo(Parent)
