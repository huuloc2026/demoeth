import React, { useState, useEffect, Children } from "react";

const RotatingText = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = Children.toArray(children); // Chuyển đổi children thành một mảng

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-[60px] overflow-hidden">
      <div className="relative flex flex-col w-full h-full">
        {texts.map((text, index) => (
          <div
            key={index}
            className={`absolute text-left text-[40px] font-medium bg-clip-text text-transparent transition-transform duration-700 ease-in-out
              ${
                index === currentIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }
              bg-primaryGradient`}
            style={{
              transition:
                "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RotatingText;
