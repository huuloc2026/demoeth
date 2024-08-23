import React from 'react';

const EthMatrix = () => {
  return (
    <div className="w-full flex justify-center items-center bg-bgColor">
      <div className="flex w-64 h-64">
        <div className="absolute w-full flex justify-center items-center">
          <div className="bg-blue-500 w-40 h-40 transform rotate-45 animate-ping" />
        </div>
        <div className="absolute w-full flex justify-center items-center">
          <div className="bg-blue-700 w-40 h-40 transform rotate-45" />
        </div>
        <div className="absolute w-full flex justify-center items-center">
          <div className="bg-purple-500 w-40 h-40 transform rotate-45" style={{ transform: 'rotate(45deg) translateZ(-100px)' }} />
        </div>
      </div>
    </div>
  );
};

export default EthMatrix;
