import { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter(props) {
  const [count, setCount] = useState(0);
  const { numberLabel, textLabel, number } = props;
  const duration = 2000;
  const frameDuration = 1000 / 60;

  const getProgress = (t) => {
    return 1 - Math.pow(1 - t, 6.5);
  };

  const timerFunction = () => {
    let start = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const timer = setInterval(() => {
      start += 1;
      const progress = getProgress(start / totalFrames);
      setCount(Math.round(Number(number) * progress));
      if (start === totalFrames) {
        clearInterval(timer);
      }
    }, frameDuration);
  };

  useEffect(() => {
    timerFunction();
  }, []);

  return (
    <div className="count">
      <span className="count-number-label">{`${count}${numberLabel}`}</span>
      <span className="count-text-label">{textLabel}</span>
    </div>
  );
}
