import React from "react";

const CircleBlurUse = ({ className = "", style = {} }) => {
  return (
    <div
      className={`absolute flex justify-center items-center ${className}`}
      style={style}
    >
      {/* Circle 1 */}
      <div className="w-[400px] h-[400px] bg-blue-400 blur-[100px] rounded-full " />
    </div>
  );
};

export default CircleBlurUse;
