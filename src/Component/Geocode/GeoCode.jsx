import React,{useEffect,useState} from 'react';
import axios from 'axios';

const GeoCode = () => {
    const [f,ff]=useState() 


    useEffect(()=>{
        axios.get("https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json")
        .then((res)=>{console.log(res.data) 
            console.log(res)
                       ff(res.data)})

        .catch((err)=>console.log("LOL --->",err))

    },[])


    return (
        <div>
            <h1> {f} </h1>
        </div>
    );
};

export default GeoCode;