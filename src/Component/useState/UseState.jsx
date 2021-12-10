import React,{useState} from "react";

export const UseState = ()=>{
    const [details,setDetails]=useState({name:"",age:"",masage:""})
    // const [name,setName]=useState("")
    // const [age,setNge]=useState("")
    // const [madage,setmasage]=useState("")


    return(
        <div>
            <input placeholder="name" onChange={(e)=>setDetails({...details, name:e.target.value})} type="text" name="" id="" />
            <input placeholder="age" onChange={(e)=>setDetails({...details,age:e.target.value})} type="text" name="" id="" />
            <input placeholder="masage" onChange={(e)=>setDetails({...details,masage:e.target.value})}  type="text" name="" id="" />


            {/* <input placeholder="name" onChange={(e)=>setName(e.target.value)} type="text" name="" id="" />
            <input placeholder="age" onChange={(e)=>setNge(e.target.value)} type="text" name="" id="" />
            <input placeholder="masage" onChange={(e)=>setmasage(e.target.value)} type="text" name="" id="" /> */} 

            <br />
            <h1>name: {details.name} </h1>
            <h1>age: {details.age} </h1>
            <h1>massage: {details.masage} </h1>
            <h4>object: {JSON.stringify(details)} </h4>
        </div>
    )
}