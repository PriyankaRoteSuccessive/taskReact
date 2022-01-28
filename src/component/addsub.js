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
             <p>{this.state.count}</p>
             <br></br>
            <button onClick={()=>this.increment()} >ADDITION</button>
            <br></br>  <br></br>
            <button onClick={()=>this.decrement()} >SUBTRACTION</button>
            <br></br>  <br></br>
            <button onClick={()=>this.reset()}>RESET</button>
            <br></br>  <br></br>
           
            </>
        )
    }


}
export default Counter;