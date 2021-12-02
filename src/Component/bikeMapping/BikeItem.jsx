import React from "react";

export const BikeItem = ({item}) =>{
    return(
    <div>
        <h2>{item.name}</h2>
        <h2> {item.model} </h2>
        <h2> {item.price} </h2>
    </div>
    ) 
}