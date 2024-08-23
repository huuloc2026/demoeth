import React from "react";
import NFTGrid from "../component/NFTGrid";
import CircleBlurUse from "../component/CircleBlurUse";
import LineChart from "../component/LineChart";

const Main2 = () => {
  return (
    <section className="pt-[120px] flex flex-col items-center m-5">
      <CircleBlurUse className="translate-x-[500px] translate-y-[200px] opacity-50" />

      {/* NFT Collection */}
      <div className="wrapper flex flex-col items-center justify-center">
        <h1 className="text-center font-extrabold text-[40px] bg-clip-text text-transparent bg-primaryGradient">
          Unlock Amazing Benefits
        </h1>
        <p className="text-gray-500 text-center text-[20px] m-1">
          This title emphasizes the value and exclusivity of the airdrops,
          encouraging users to take <br /> advantage of them to enhance their
          crypto experience.
        </p>
        <NFTGrid>Sale</NFTGrid>
      </div>
    </section>
  );
};

export default Main2;
