import React, { useState, useEffect } from 'react';
const Timer20 = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    let FirstCount = counter;
    let nextCount = true;
    const interval = setInterval(() => {
      console.log(FirstCount);
      if (nextCount) {
        if (FirstCount !== 20) {
          FirstCount = FirstCount + 1;
        } else {
          nextCount = false;
          FirstCount = FirstCount - 1;
        }
      } else if (!nextCount) {
        if (FirstCount != 17) {
          FirstCount = FirstCount - 1;
        } else {
          FirstCount = 0;
          clearInterval(interval);
        }
      }
      setCounter(FirstCount);
    }, 1000)
  }
  useEffect(() => {
    Increment();
  }, [])
  return (
    <>
      <h1>Counter: {counter} </h1>
    </>
  )
}
export default Timer20;