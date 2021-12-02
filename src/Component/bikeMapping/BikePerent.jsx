import React from "react"
import { bikeData } from "./bikeData"
import { BikeItem } from "./BikeItem"


export const BikePerent =()=>{
    return(
        <div>
            {bikeData.map((item)=>{
                
            return    <BikeItem  item={item}/>
            })}
        </div>
    )
}