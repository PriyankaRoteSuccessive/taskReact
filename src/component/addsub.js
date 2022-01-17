import React from "react";
class Counter extends React.Component
{
    constructor()
    {
        super()
        this.state ={
            count:0
        }
    }
    increment(){
        this.setState({count:this.state.count+1})      
    }
    decrement(){
    this.setState({count:this.state.count-1})
    }
    reset(){
    this.setState({count:0})
    console.log("reset")
    }
    render()
    {
        return(
            <>
            <button onClick={()=>this.increment()} >ADDITION</button>
            
            <button onClick={()=>this.decrement()} >SUBTRACTION</button>

            <button onClick={()=>this.reset()}>Reset</button>
            <p>{this.state.count}</p>
           
            </>
        )
    }


}
export default Counter;