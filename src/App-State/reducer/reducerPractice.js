import React from 'react';

const reducerPractice = (state={item:[]}, action) => {
    if (action.type==="ADD_PRACTICE")
    return{
        ...state,
        item:[action.data]
    }
    return state
};

export default reducerPractice;