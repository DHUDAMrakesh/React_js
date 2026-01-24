import React, { useEffect, useState } from 'react'
import usePageTitle from './usePageTitle'
const PageTitleOne = () => {
    const [count,setCount]=useState(0)
    function Incrment(){
        setCount((PrevCount)=>PrevCount+1)
    }
    usePageTitle(count)
  return (
    <div>

      <h1>{count}</h1>
      <button onClick={Incrment}>count</button>
    </div>
  )
}

export default PageTitleOne
