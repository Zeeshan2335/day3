import React from 'react';
import { useDispatch } from 'react-redux';

const ReduxPractice = () => {
    const dispatch = useDispatch()
    const handel =()=>{
        dispatch({
            type:"ADD_PRACTICE",
            data:[`hi i am mohammad daniyal siddiqui` , "i am 21"]
        })
    }

    return (
        <div>
            <button onClick={handel}>redux practice</button>
        </div>
    );
};

export default ReduxPractice;