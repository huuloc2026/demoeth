import React, { useEffect, useRef, useState } from "react";

const RotatingTextHelp = ({ children, textColor = "text-black" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={textRef}
      className={`transform transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      } ${textColor}`}
    >
      <h2 className="text-center text-[20px]">{children}</h2>
    </div>
  );
};

export default RotatingTextHelp;
