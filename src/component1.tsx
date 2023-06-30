import { useState } from "react"

export default function Component1(props:any){
    const [txtValue, settxtValue ] = useState("");
    return(
        <div>{props.value + txtValue}
        
        <div>
            <input type='text' value={txtValue} onChange={(e)=>{
                settxtValue(e.target.value)
            }}></input>
        </div>
        </div>
    )
}