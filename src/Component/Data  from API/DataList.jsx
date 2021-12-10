import React, { useEffect, useState } from "react";
import axios from "axios"


export const DataLIst = () => {
    const [data,setdata]=useState([])
    const [propt, setpro] = useState(data);
    const [text, setText] = useState("");
    const handelF = () => {
        const filt = data.filter((elem) => elem.title.toUpperCase().includes(text.toUpperCase()))
        text !== "" ? setpro(filt) : setpro(data)
    }
    const calldata = async ()=>{
        const res = await axios.get("https://fakestoreapi.com/products");
            setdata(res.data)
        
    }
    useEffect(()=>{
        calldata()
    },[])
    useEffect(()=>{handelF()},[text,data]);//isse automayic search hota jaise hi typing start kare yane button click ki zarorat nahi 
    return (
        <div>
            <div>
                <input className="input" type="text" onChange={(j) => setText(j.target.value)} placeholder="search..." name="" id="" />
                <button onClick={() => handelF()}>Search</button> 
                {/* now button is optional because we used useEffect and it searc automatic whenevr we type  but its good to have*/}
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                
                }}
            >


                {propt.map((item) => {
                    return (
                        <div >
                            <img width="220px" src={item.image} alt="" />
                            <h3> <b>{item.title} </b></h3>
                            <h4>Price: <b>{item.price}</b></h4>
                            <h4>Type: {item.description} </h4>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
