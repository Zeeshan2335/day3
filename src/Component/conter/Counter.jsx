import React, {useState} from "react"
import {Button} from "react-bootstrap"


export const Counter = ()=>{

    const [counterHai,setCounterHai]=useState(0);

    return(
        <div>
        <Button onClick={()=>  setCounterHai(counterHai+1)}>plus by one</Button>
        <h1> {counterHai} </h1>
        <Button disabled={!(counterHai >0)} onClick={()=> counterHai >0 && setCounterHai(counterHai-1)}>minis by one</Button> 
        </div>
    )
}

