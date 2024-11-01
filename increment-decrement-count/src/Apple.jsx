import { useState } from "react";

function Apple()
{
    const [apple,setapple] = useState(0);
    return(
        <>
        <h1>Apples:{apple}</h1>
        {apple===0?<p>No Apples Left</p>:<p>Wow You Some Apples.....</p>}
        <button onClick={()=>{setapple(apple+1)}}>Add Apple</button>
        <button onClick={()=>{apple>0 && setapple(apple-1)}}>Remove Apple</button>
        <button onClick={()=>{setapple(0)}}>Reset</button>
        </>
        
        
    )
}
export default Apple;