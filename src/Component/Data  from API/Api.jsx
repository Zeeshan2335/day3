import React,{useState,useEffect} from "react";
import axios from "axios";


export const Appi = ()=>{
    const[albem,setAlbem]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/albums")
        .then((res)=>{console.log(res.data) 
                       setAlbem(res.data)})

        .catch((err)=>console.log("LOL --->",err))

    },[])


    return(
        <div>
            <h1>welcom</h1>
        <div style={{display:"flex", flexWrap:"wrap" }}>
            {albem.map((elem)=>{
                return(
                    <div style={{width:"200px" ,height:"200px" ,backgroundColor:"salmon",margin:"15px", border:"solid 3px"}}>
                        <h4> {elem.title} </h4>
                        <h4> {elem.id} </h4>
                    </div>
                )
            })}
        </div>
        </div>
   )
}

