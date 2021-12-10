import React, { useState, useEffect } from "react";
import axios from "axios";

export const ApiPractice = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((respounce) => setUser(respounce.data))


    }, [])

    return (
        <div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
                {user.map((elem) => {
                    return (
                        <div style={{ margin: "5px", backgroundColor: "#f8b0ff  ", width: "480px", height: "300px", textAlign: "left", border: "solid 4px" }}>
                            <h1><b> <span style={{ color: "#018c11", fontSize: "25px" }}> Name:</span></b><span style={{ color: "#e60303", fontSize: "25px" }}> {elem.name} </span></h1>
                            <h1><b> <span style={{ color: "#018c11", fontSize: "25px" }}> Phone:</span></b><span style={{ color: "#e60303", fontSize: "25px" }}> {elem.phone} </span></h1>
                            <h1><b> <span style={{ color: "#018c11", fontSize: "25px" }}> Email:</span></b><span style={{ color: "#e60303", fontSize: "25px" }}> {elem.email} </span></h1>
                            <h1><b> <span style={{ color: "#018c11", fontSize: "25px" }}> City:</span></b><span style={{ color: "#e60303", fontSize: "25px" }}> {elem.address.city} </span></h1>
                            <h1><b> <span style={{ color: "#018c11", fontSize: "25px" }}> Zipcode:</span></b><span style={{ color: "#e60303", fontSize: "25px" }}> {elem.address.zipcode} </span></h1>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

