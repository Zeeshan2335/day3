import React, {Component} from "react";


export class ClassTimer extends Component {
    constructor(props){
        super(props)
        this.state={timer:0,}

    }

    some;
    componentDidMount(){
        this.some = setInterval(() => {
         this.setState((pre)=>({timer:pre.timer + 1}))
        }, 1000);
    }
    
    

// componentWillUnmount(){
//     clearInterval(this.some)
    
//    }
        


    render(){

        return(
            <div>
                <h1>{this.state.timer} kjkjjh</h1>
                <button onClick={()=>clearInterval(this.some)}> clear</button>
                <button onClick={()=>this.setState((t)=>t*0)}> reset</button>
                
            </div>
        )
    }

}