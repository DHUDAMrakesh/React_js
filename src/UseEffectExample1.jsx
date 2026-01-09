import React, { useEffect, useState } from 'react'
const URL='https://jsonplaceholder.typicode.com/users'
const UseEffectExample1 = () => {
    const [usersData,setUsersdata]=useState([])
    const[isloading,setIsloading]=useState(false)
    const [isError,setIsError]=useState({status: false,msg:""})
    const fetchUsersData= async (url)=>{
        setIsloading(true)
        setIsError({status:false,msg:""})
    try{
        const response=await fetch(url)
        const data= await response.json()
        console.log(data)
        setUsersdata(data)
        setIsloading(false)
        setIsError({status:false,msg:""})

         if(response.status===400){
            throw new Error("Data not found")
        }
    } catch (error){
        console.log(error.message)
        setIsloading(false)
console.log(error)
setIsError({status:true,msg:error.message||"something went wrong please try agian later!"})

    }
    };
    useEffect(()=>{
        setTimeout(() => {
            
            fetchUsersData(URL)
        }, [1000]);
    },[])
    if(isloading){
        return <div>
            <h1>Loading...</h1>
        </div>
    }
    if(isError?.status){
        return <div>
            <h1>{isError?.msg}</h1>
        </div>
    }
  return (
    <div>
        <h1>Fetching data from API</h1>
        <ul>
            {usersData.map((eachUser)=>{
                const {id,name,email}=eachUser
                return(
                  <li key={id}>
                    <div>{name}</div>
                    <div>{email}</div>
                  </li>
                )
            })}
        </ul>
      
    </div>
  )
}

export default UseEffectExample1
// import React, { useEffect, useState } from 'react'
// const URL='https://jsonplaceholder.typicode.com/user'
// const UseEffectExample1 = () => {
//     const [users,setUsers]=useState([])
//     const [isError,setIsError]=useState({status:false,msg:""})
// const [isloading,setIsloading]=useState(false)
//     const fetchingData= async (url)=>{
//         setIsloading(true)
// setIsError({status:false,msg:""})
//         try {
//          const response= await fetch(url)
//         const data= await response.json()
//         setUsers(data)
//         setIsloading(false)
// if(response.status===400){
//     throw new Error("data not found")
// }

//        } catch (error) {
//         console.log(error.message)
//         setIsloading(false)
//         setIsError({status:true,msg: error.message|| "something went wrong"})
//         console.log(error)
//        }
//     }
//     useEffect(()=>{
//         setTimeout(() => {
//             fetchingData(URL)
//         }, 1000);
//         setIsloading(true)
//     },[])
//     if(isloading){
//         return(
//         <div>
//             <h2>Loading...</h2>
            
//         </div>
//         )
//     }
// if(isError?.status){
//         return <div>
//             <h1>{isError?.msg}</h1>
//         </div>
//     }

//   return (
//     <div>
// <h1>Fetching data from API</h1>
// <ul>
//     {
        
//             users.map((eachuser)=>{
//             const {name,email,id}=eachuser
//             return(
//                 <li key={id}>
//                     <div>{name}</div>
//                     <div>{email}</div>
//                 </li>
//             )
            
//         })
        
//     }
// </ul>
        
    
//     </div>
//   )
// }

// export default UseEffectExample1
