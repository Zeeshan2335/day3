import React, { useState } from "react";
import { FData } from "./SearchData";
import "./Cars.css"


export const Cars = () => {
    const [propt, setpro] = useState(FData.data);
    const [text, setText] = useState("");
    const handelF = () => {
        const filt = FData.data.filter((elem) => elem.name.toUpperCase().includes(text.toUpperCase()))
        text !== "" ? setpro(filt) : setpro(FData.data)
    }

    return (
        <div>
            <div>
                <input className="input" type="text" onChange={(e) => setText(e.target.value)} placeholder="search..." name="" id="" />
                <button onClick={() => handelF()}>Search</button>
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
