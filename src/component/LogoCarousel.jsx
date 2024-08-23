import React from "react";

const logos = [
  "unicrypt_avalanche.svg",
  "unicrypt_base.svg",
  "unicrypt_ethereum.svg",
  "unicrypt_polygon.svg",
  "unicrypt_avalanche.svg",
  "unicrypt_base.svg",
  "unicrypt_ethereum.svg",
  "unicrypt_polygon.svg",
  "unicrypt_avalanche.svg",
  "unicrypt_base.svg",
  "unicrypt_ethereum.svg",
  "unicrypt_polygon.svg",
  // Thêm nhiều URL logo hơn nếu cần
];

const repeatedLogos = [...logos, ...logos]; // Lặp lại logo

const LogoCarousel = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Carousel container */}
      <div className="flex items-center space-x-8 animate-scroll">
        {repeatedLogos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-7 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
