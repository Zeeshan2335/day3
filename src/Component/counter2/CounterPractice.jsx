import React, {useState} from "react";


export const Countrt = () =>{
    const [count,seqtc]= useState(0)
    const sum = ()=>count<10 && seqtc(count+1)  
    
    const subs =()=> count>0 && seqtc(count-1) 
    
    const mul =()=>  seqtc(count*2)
    
    const clr =()=>  seqtc(count+1-count-1)

    return(
        <div>
            <h1>this is something i made </h1>
            <p>Currunt count:{count} </p>
            <button onClick={sum}>incriment</button> 
            <button onClick={subs}>minus</button>
            <button onClick={mul}>multiplay</button>
            <button onClick={clr}>clear</button>
        </div>
    )

}







