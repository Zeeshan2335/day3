import React,{Component} from "react";
import CounterInClassChild from "./CounterInClassChild";

// export class CounterInClacc extends Component {
//     constructor(){
//         super()
//         this.state = {count:0}
//     }
//     componentDidUpdate(){
//         document.title = count: this.state.count +1
//     }
//     handelINcreement=()=>{
//         this.setState({count: this.state.count + 1})
//     }

//     render(){
//         return(
//                 <div>
//                     <h1>Class Counter wiyh ComponentDidUpdate</h1>
//                     <h1> count: {this.state.count} </h1>
//                     <button onClick={this.handelINcreement}>increement</button>
//                     <button onClick={()=>this.setState({count:this.state.count - 1}) } > decriment</button>
//                 </div>
//             )
//     }

// }

export class CounterInClacc extends Component{
  

    constructor(){
        super()
        this.state={count:0}
    }
    minus=()=>{
        this.setState({count: this.state.count -1})
    }
    render(){
        return(
            <div>
                <CounterInClassChild some={this.minus}/>
                <h1>  {this.state.count} </h1>
                <button onClick={()=>this.setState({count: this.state.count +1})}>+</button>
            </div>
        )
    }
}