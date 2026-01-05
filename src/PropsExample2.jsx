import data from "./data";
function PropsExample2(){
    return(


<main className="container">
  <ul className="comments-container">

    {/* <li className="comment">
      <div className="comments-header">
        <h3>Email@email.com</h3>
        <h3>Name</h3>
      </div>
      <p>Lorem ipsum...</p>
    </li> */}

    {data.map((item)=>{
     const   {id,email,name,body}=item;
        return(
            <li key={id} className="comment">
                
<div className="comments-header">
    <h3>{email}</h3>
    <h3 className="name">{name}</h3>
 
</div>
<p>{body}</p>
            </li>
        )
    })}


  </ul>
</main>


    )
}
export default PropsExample2;