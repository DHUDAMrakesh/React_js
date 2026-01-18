import React, { use, useContext } from 'react'
import { themecontext } from './HomeComponent';
const Product = () => {
    const theme=useContext(themecontext)
    console.log(theme);
    
   return(
    <div>
        {/* this is for class componenets */}
{/* <themecontext.Consumer>
    {
        (theme)=>{
            return(
                <div>
                    <button style={{border:"theme"=== "light"? "1px solid blue":"1px solid red" }}>Add to cart</button>
                </div>
            )
        }
    }
</themecontext.Consumer> */}


<h1>Product component</h1>
<button style={{border:theme==="light"? "1px solid green":"none " }}>Add to cart</button>
    </div>
   )
}
    
export default Product
  
