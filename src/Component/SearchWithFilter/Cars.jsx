import React, { useEffect, useState } from "react";
import { FData } from "./SearchData";
import "./Cars.css"


export const Cars = () => {
    const [propt, setpro] = useState(FData.data);
    const [text, setText] = useState("");
    const handelF = () => {
        const filt = FData.data.filter((elem) => elem.name.toUpperCase().includes(text.toUpperCase()))
        text !== "" ? setpro(filt) : setpro(FData.data)
    }
    useEffect(()=>{handelF()},[text]);//isse automayic search hota jaise hi typing start kare yane button click ki zarorat nahi 
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
                            <img width="420px" src={item.url} alt="" />
                            <h3> <b>{item.name} </b></h3>
                            <h4>Price: <b>{item.price}</b></h4>
                            <h4>Type: {item.type} </h4>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
