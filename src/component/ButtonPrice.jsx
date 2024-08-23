import React, { useState } from "react";

const SimpleRadioButton = () => {
  const [selectedPrice, setSelectedPrice] = useState(null); // Trạng thái giá được chọn
  const prices = ["$1000", "$2000", "$3000"]; // Danh sách giá

  const handlePriceChange = (price) => {
    setSelectedPrice(price); // Cập nhật giá được chọn
  };

  return (
    <div className="flex space-x-4 ">
      {prices.map((price) => (
        <label
          key={price}
          className={`px-4 z-10 py-2 rounded-lg cursor-pointer  transition-all ${
            selectedPrice === price
              ? "bg-buttonGradient border:bg-blue-400 text-white shadow-lg shadow-blue-500/50 "
              : " text-white"
          }`}
        >
          <input
            type="radio"
            name="price"
            value={price}
            checked={selectedPrice === price}
            onChange={() => handlePriceChange(price)}
            className="hidden"
          />
          {price}
        </label>
      ))}
    </div>
  );
};

export default SimpleRadioButton;
