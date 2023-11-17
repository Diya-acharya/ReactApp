import { useState } from "react";
import Timer from ".";
import "../stopwatch.css"

const TimerWrapper = ({ duration, onExpire, beforeRestart }) => {
  const [hasExpired, setExpired] = useState(false);

  const onExpireHelper = () => {
    onExpire && onExpire();
    setExpired(true);
  };

  const handleRestart = () => {
    setExpired(false);
  };

  return !hasExpired ? (
    <Timer duration={duration} onExpire={onExpireHelper} />
  ) : (
    <div className="stopwatch-buttons">
    <button className="stopwatch-button" onClick={handleRestart}>Restart</button>
    </div>

  );
};

export default TimerWrapper;