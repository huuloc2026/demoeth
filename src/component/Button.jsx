import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-3 py-3 rounded-lg text-white btnchung ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
