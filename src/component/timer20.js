import React, { useState, useEffect } from 'react';
const Timer20 = () => {
    const [counter, setCounter] = useState(0);
      const Update = () => {
        let counter =0;
        const interval = setInterval(() =>{
          if(counter < 20){
        counter = counter + 1;}
          else if ( counter = 18){
             counter=0
              clearInterval(interval); 
          
        }
          setCounter(counter);
      },  1000)
    }
    useEffect(() => {
      Update();
    },[])
      
    return (
      <>
      <h1> Counter : { counter }</h1>
      </>
    ) 
  };
export default Timer20;
// import React, { useState, useEffect } from 'react';
// const Timer20 = () => {
//     const [counter, setCounter] = useState(0);
//     const [flag, setFlag] = useState("0");
//       const Update = () => {
//         let counter =0;

//         const interval = setInterval(() =>{
//             console.log(flag)
//            if(flag == "0"){
//             if(counter < 20){
//                 counter = counter + 1;
//                   }
//                   else {
//                       setFlag({flag:"1"});
//                       console.log("false")
//                   }
//           setCounter(counter);
//            }
//            else{
//             if(counter > 0){
//                 counter = counter - 1;
//                 console.log(flag)
//                   }
//                   else {
                   
//                       clearInterval(interval); 
                 
//                       console.log(flag)
//                   }
//           setCounter(counter);
//            }
//       },  1000)

//     }
//     useEffect(() => {
//       Update();
//     },[])
      
//     return (
//       <>
//       <h1> Counter : {counter}</h1>
//       </>
//     ) 
//   };
// export default Timer20;