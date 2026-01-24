import React from 'react'
import { useEffect,useState} from 'react'
 function useFetch(URL) {
    const [data,setData]=useState([])
    const[loading,setLoading]=useState(false)
    const[isError,setIsError]=useState(false)
const ApiCall= async ()=>{
    setIsError(true)
    setLoading(true)
   try {
        const response=await fetch(URL)

     const data=await response.json()
    console.log(data);
    setData(data)
    setLoading(false)
    setIsError(false)

   } catch (error) {
    setLoading(false)
    setIsError(true)
    
   }
    
}
  
    useEffect(()=>{
    ApiCall(URL)
},[])
return [data,loading,isError]
}
export default useFetch