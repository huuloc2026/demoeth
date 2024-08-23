import React from "react";

const MovingImage = ({ images }) => {
  return (
    <div className="relative flex justify-center items-center h-[500px] w-[500px]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={`absolute w-[400px] h-[400px] transition-transform duration-[3000ms] ease-out 
            ${index === 0 ? "animate-move-1" : ""}
            ${index === 1 ? "animate-move-2" : ""}
            ${index === 2 ? "animate-move-3" : ""}
          `}
        />
      ))}
    </div>
  );
};

export default MovingImage;
