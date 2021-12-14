import {createStore,combineReducers} from "redux"
import { productReducer } from "../reducer/productReducer"
import reducerPractice from "../reducer/reducerPractice"


export const configStore =()=>{
    const myStore = createStore(
        combineReducers({productReducer,reducerPractice}),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return myStore
}