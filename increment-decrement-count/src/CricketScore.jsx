import { useState } from "react";

function CricketScore()
{
    const [score,setscore] = useState(0);
    const [wick,setwick] = useState(0);
    return(
        <>
         <h1>This is modification file</h1>
        <h1>Cricket</h1>
        <h1>Match Score: IND ({score}/{wick})</h1>
        
        <button onClick={()=>{setscore(score+1)}}>Single</button>
        <button onClick={()=>{setscore(score+2)}}>Double</button>
        <button onClick={()=>{setscore(score+4)}}>Four</button>
        <button onClick={()=>{setscore(score+6)}}>Six</button>
        <button onClick={()=>{wick<10 && setwick(wick+1)}}>Wicket</button>
        <h2>This is second modification</h2>


        </>
    )
}
export default CricketScore;
