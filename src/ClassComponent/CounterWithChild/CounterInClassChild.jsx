import React, { Component } from 'react';

class CounterInClassChild extends Component {  //no need of constructer in this case because we are using perent property we dont have any
    


    render() {
        return (
            <div>
                <button onClick={this.props.some} >decreement from child</button>
            </div>
        );
    }
}

export default CounterInClassChild;