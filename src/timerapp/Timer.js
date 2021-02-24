import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return()=>{
      clearInterval(interval)
    }
  });
  return <div>Seconds Elapsed: {seconds}</div>;
}
