import React, { useState, useEffect } from 'react';
const Timer20 = () => {
    const [counter, setCounter] = useState(0);
      const Update = () => {
        let counter =0;
        const interval = setInterval(() =>{
          if(counter < 20){
        counter = counter + 1;
          }
          else{
              counter=0;
              clearInterval(interval); 
          }
          setCounter(counter);
      }, 1000)
    }
    useEffect(() => {
      Update();
    },[])
      
    return (
      <>
      <h1> Counter : {counter}</h1>
      </>
    ) 
  };
export default Timer20;