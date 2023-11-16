// @client
import React from "react";
import {useState} from 'react';

// class Counter extends React.Component{
//     constructor(props) {
//         super(props);
//       this.state = {counter: 0};
//       }
//     handleClick(){
//         this.setState({counter:this.state.counter+1})
//     }
//     render(){
//         return <div><button onClick={this.handleClick}>Click</button></div>
//     }
// }

// export default Counter;


function Counter() {
    const [counter, setCounter]= useState(0);

    const handleClick=()=>{
        setCounter(counter+1)
    }

    return <div><button onClick={handleClick}>Click</button></div>
}
export default Counter;


