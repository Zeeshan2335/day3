import React from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";

export const NavBar =()=>{

    return(
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/ts">test</Link>
            <Link to="/redux">redux</Link>
            <Link to="/prac">Redux Practice</Link>
            <Link to="/data">UseState</Link>
            <Link to="/filter">Filter</Link>
            <Link to="/counter">counter</Link>
            <Link to="/bike">Bike</Link>
            <Link to="/api">Api</Link>
            <Link to="/mapping" >Mapping</Link>
            <Link to="/DataLIst" >Data LIst</Link>
            <Link to="/api2">Api with redux</Link>
            <Link to="/counter2">Counte2</Link>
            <Link to="/StateWithMap">State With Map</Link>
            <Link to="/ConditionalRendring">Conditional Rendring</Link>
        </div>
    )
}