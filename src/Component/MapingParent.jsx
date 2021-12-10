import React from 'react';
import MapingChild from './MapingChild';
import {data} from "./CardReducer"

export const MapingParent = (  ) => {
    console.log(data);
    return (
        <div>
            <h1>i am the parent</h1>
            {data.userData.map((KuchhBhi)=>{
            return <MapingChild some={KuchhBhi}/>

                
             } )}
        </div>
    );
};

export default MapingParent;