import React, { useState,useEffect } from "react";
import {Row, Col, Button} from "react-bootstrap"
import { Data } from "./data";
import FilterChild from "./FilterChild";

export const Filter =()=>{
    const [filt,setfilt]= useState(Data)
    const [search,setSearch]=useState("")
    const handelS= ()=>{
        const result=Data.filter((elem)=>elem.name.toUpperCase().includes( search.toUpperCase()))
        if(search !=="")
        setfilt(result)
        else setfilt(Data)
    }
    useEffect(()=>{
        
    },[])
    return(
        <div>
            <Row>
                <Col>
                <input type="text" onChange={(e)=>setSearch(e.target.value)}  placeholder="search here" />
                </Col>

                <Col>
                    <Button onClick={()=>handelS()}>search</Button>
                </Col>



            </Row>

            <Row>
                {filt.map((item)=><FilterChild some={item}/>)}
            </Row>

        </div>


    )
}