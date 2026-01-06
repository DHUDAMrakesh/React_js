import { useState } from "react"


function UsestateExample2(){
    const [firstname,setFirstname]=useState("")
    const [email,setEmail]=useState("") 
    const [password,setPassword]=useState("")
const changefirstname=(event)=>{
    setFirstname(event.target.value)
}
const changeemail=(event)=>{
    setEmail(event.target.value)
}
const changepass=(event)=>{     
    setPassword(event.target.value)
}
const handlesubmit=(e)=>{
    e.preventDefault()
}

    return(

        <div> 
<form onSubmit={handlesubmit}>
    <div className="form-content">
            <input type="text" 
            name="firstname" 
            id="firstname" 
            placeholder="enter your firstname" 
            value={firstname}
            onChange={changefirstname}
            />

    </div>
    <div className="form-content">
            <input type="email"
             name="email"
              id="email" 
              placeholder="enter your email"
              value={email}
              onChange={changeemail}
              />
    </div>
<div className="form-content">
    <input type="password"
    name="password"
    id="password"
    placeholder="enter your password" 
    value={password}
    onChange={changepass}
    />
</div>

<div className="btn">
        <button type="submit">Submit</button>

</div>
</form>
        </div>
    )
}
export default UsestateExample2