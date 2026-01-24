import React from 'react'
import { useEffect } from 'react'
const usePageTitle = (count) => {
  useEffect(()=>{
    document.title=`Count:${count}`
},[count])
}

export default usePageTitle
