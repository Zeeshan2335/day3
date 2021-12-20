import React, { useEffect, useState, useRef } from 'react';

const TimerFunctional = () => {
    // const interRef = useRef();
    // const [time, settime] = useState(0)
    // useEffect(() => {
    //     interRef.current = setInterval(() => {
    //         settime((t) => t + 1)
    //         return () => clearInterval(interRef.current)
    //     }, 1000);
    // }, [])

    // return (
    //     <div>
    //         <h1>this is timer in function </h1>
    //         <h2> {time} </h2>
    //         <button onClick={() => clearInterval(interRef.current)}>clear</button>
    //         <button >start</button>
    //     </div>
    // );


    const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle=()=> {
    setIsActive(!isActive);
  }

  const reset=() =>{
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

    return (
    <div className="app">
        {seconds}s <br />
        <button  onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button> 
        <button className="button" onClick={reset}>Reset</button>
    </div>
  );
};

export default TimerFunctional;