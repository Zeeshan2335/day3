import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Button} from "react-bootstrap"

const CheckRedux = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state=>state.productReducer.products)
    const handelClick=()=>{
        //logic of Dispatch
        dispatch({
            type:"ADD_PRODUCTS",
            data:["some","something",]
        })

    }
    return (
        <div>

            <Button onClick={handelClick}>Dispatch me</Button>
            {selector.map((item)=>(
                <p>{item}</p>

            ))}
        </div>
    );
};

export default CheckRedux;