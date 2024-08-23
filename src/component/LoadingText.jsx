import React, { useState, useEffect } from "react";

const LoadingText = ({
  baseText = "Waiting there is more",
  interval = 500,
}) => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const maxDots = 3;
    const intervalId = setInterval(() => {
      setDotCount((prevCount) => (prevCount % maxDots) + 1);
    }, interval);

    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div className="loading-text bg-clip-text text-transparent bg-primaryGradient">
      {baseText}
      <span className="dots">{".".repeat(dotCount)}</span>
    </div>
  );
};

export default LoadingText;
