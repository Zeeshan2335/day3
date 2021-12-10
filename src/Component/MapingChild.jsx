import React from 'react';
import {Card} from "react-bootstrap"

export const MapingChild = ({some}) => {
     return (
        <div >
            {/* <h1>this is child component</h1> */}
            <Card style={{width:"18rem" ,border:"none", float:'left', color:'balck',backgroundColor:'lightcoral',margin:"7px"} }>
                <img src={some.img}
                style={{width:"280px" , height:"290px", paddingLeft:"10px" }} />
                <h2>{some.title}</h2>
                <p><b> {some.desc}</b></p>
            </Card>
           

        </div>
    );
}; 

export default MapingChild;