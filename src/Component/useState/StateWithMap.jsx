import React,{useState} from 'react';

const StateWithMap = () => {
    const [generate,setGenerate]=useState([])
    const handelGen =()=>{
    
        setGenerate([ ...generate, {id: generate.length, value: Math.floor(Math.random() * 10)+1}]) //plus 1 isliye dale ke 0 na aai
    }
    return (
        <div>
            <h1>use sate in arraq</h1>
            <button onClick={handelGen} >generate</button>
            {generate.map((elem, id)=>{
                return <li key={id}> {elem.value} </li>
            })}
        </div>
    );
};

export default StateWithMap;