
export const productReducer =(state={products:[]},action)=>{
    if(action.type==="ADD_PRODUCTS"){

        return {
            ...state,
            products:[...action.data]
        }
    }
    return state
}