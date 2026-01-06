import { useState } from "react";
//Example 1: Counter
// function UsestateExample() {
//     const [count,setCount]=useState(0)
//     function Increment(){
//         setCount((prevCount)=>{
//             return prevCount+1
//         })
//     }
//     function Decrement(){
//         setCount((prevCount)=>{
//             return prevCount-1
//         })  
//     }
// return(
//     <div>
//         <button onClick={Increment}>+</button>
//         <span>{count}</span>
//         <button onClick={Decrement} disabled={count===0}>-</button>
//     </div>
// )
// }

//Example 2: Object state
// function UsestateExample() {
//     function ChangeName(){
//         setData({
//             ...data,
//             name:"Rakesh Sharma"
//         })
//     }
//     var details={
//         name:"Rakesh",
//         age:25,
//     }
//     const [data,setData]=useState(details)

//     return(
//         <div>
//             <h1>{data.name}</h1>
//             <button onClick={ChangeName}>Change name</button>
//             <h1> {data.age}</h1>
//         </div>
//     )
// }

// Example 3: Array state
function UsestateExample() {
const initalArray=[
    {
        id:"sdfsdggggggg",
        name:"Rakesh",
        age:25, 

    },
    {
        id:"sdfsdg222",
        name:"Suresh",
        age:30,
    },
    {
        id:"sdfsdg3333",    
        name:"Mahesh",        
        age:28,
    }
]
const [data,setData]=useState(initalArray);
function HandleDelete(Cid){   
console.log(Cid)
const filteredData=data.filter((item)=>item.id!==Cid)
setData(filteredData);
}
return(
    <div>
           {
               data.map((item,index)=>{
                const {name,age,id}=item;
                return(
                    <li  key={index}>
                        <div>FirstaName:{name}</div>
                        <div>Age {age}</div>
                        <button onClick={()=>HandleDelete(id)}>Delete me</button>
                    </li>
                )
            })
           }
        
    </div>
)
}
    export default UsestateExample;
