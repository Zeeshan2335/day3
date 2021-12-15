import React,{useState} from 'react';

const Test = () => {
    const [cl,setcl]=useState("black")


    return (
        
            <div  style={{height:"900px", backgroundColor:cl}} id='c'>

            {/* <button onClick={()=>setcl(cl === "red" ? "blue" : "red")}> {cl==="red" ? "i am red" : "i am blue"} </button> */}
            <button onClick={()=>setcl(cl === "black" ? "red" : "black")}> {cl==="black" ? "on" : "off"} </button>
            </div>
        
    );
};

export default Test;