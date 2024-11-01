import { useState } from "react";

function Incdec()
{
  const [count,setcount] = useState(0);
  // const inc = ()=>{
  //   setcount(count+1);
  // }
  return(
    <>
      <h1>Count: {count}</h1>
      <button   style={{color:'green',backgroundColor:'white'}} onClick={()=>{setcount(count+1)}}>Increment</button>
      <button style={{color:'red',backgroundColor:'white'}} onClick={()=>{setcount(count-1)}}>Decrement</button>
    </>
  )
}
export default Incdec;