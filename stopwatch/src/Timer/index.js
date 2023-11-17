import { useEffect, useState } from "react";
import "../stopwatch.css";

//values in milliseconds
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

const Timer = ({ duration, onExpire }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    // break condition
    if (time <= 0) {
      onExpire && onExpire();
      clearTimeout(timerId);
    }

    // clean up
    return () => {
      clearTimeout(timerId);
    };
  }, [time, onExpire]);

  const getFormattedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);

    return (
        <div className="stopwatch-container">
            <p className="stopwatch-time">{days}: {hours}: {minutes}: {seconds}</p>
        </div>
        );
  };

  return getFormattedTime(time);
};

export default Timer;