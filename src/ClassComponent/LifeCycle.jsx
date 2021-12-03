import React, {Component} from "react";


export class LifeCycle extends Component{

    constructor(){
        super()
        console.log("this is constroctor");

    }
    static getDrivedStateFromProps(props,sate){
        console.log("this is get drived state props");

    }
    componentDidMount(){
        console.log("this is didi mount ");
    }
    componentDidUpdate(){
        console.log("this is component di update");
    }
    shouldComponentUpdate(){
        console.log("this is component update");
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}