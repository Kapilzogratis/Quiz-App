import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, OnTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    const timer = setTimeout(OnTimeOut, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, OnTimeOut]);

  useEffect(() => {
    const Interval = setInterval(() => {
      setRemainingTime((prevRemainigTime) => prevRemainigTime - 100);

      return () => {
        clearInterval(Interval);
      };
    }, 100);
  }, []);

  return (
    <progress id="question-time" 
    value={remainingTime} 
    max={timeout}
   className={mode}
    />
  );
}
