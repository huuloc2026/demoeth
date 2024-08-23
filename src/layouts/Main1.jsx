import React from "react";
import ButtonPrice from "../component/ButtonPrice";
import RotatingText from "../component/RotatingText";
import LogoCarousel from "../component/LogoCarousel";
import ButtonClaim from "../component/ButtonClaim";
import CircleBlurUse from "../component/CircleBlurUse";
import Button from "../component/Button";

const BannerLayout = () => {
  const prices = ["$1000", "$2000", "$3000"]; // Danh sách giá

  return (
    <section className="relative pt-[160px] overflow-hidden flex flex-col items-center isolate">
      {/* Circle Blur Effects */}
      <CircleBlurUse className="translate-x-[-600px] translate-y-[-200px] opacity-50 -z-10" />
      <CircleBlurUse className="translate-x-[500px] opacity-50" />

      {/* Text Section */}
      <div className="wrapper w-full max-w-screen-xl px-4 md:px-8">
        {/* RotatingText positioned above h1 */}
        <div className="my-6 h-full text-effect">
          {" "}
          {/* Áp dụng hiệu ứng text-slide-in */}
          <RotatingText>
            <span>Received A Reward From Us?</span>
            <span>Congratulations!</span>
            <span>Are You Ready</span>
            <span>Free Rewards</span>
          </RotatingText>
        </div>
        <h1 className="text-[40px] font-regular mb-4 text-left text-effect">
          Welcome to Ethereum Events
          <br />
          Start Earning Now!
        </h1>
        <p className="text-xl my-[20px] text-left text-gray-500 text-effect">
          If you{"'"}ve received the airdrop,
          <br />
          it means you{"'"}re one of the lucky random winners selected in our
          event.
          <br />
          Don{"'"}t miss out on this exclusive chance to claim your rewards!
          <br />
          You have only 29 days to claim your rewards.
          <br />
          Enjoy!
        </p>

        {/* Airdrop Selection */}
        <div className="flex text-[15px] w-full max-w-screen gap-[30px] items-center">
          {/* Đường thẳng đứng với gradient nền */}
          <div className="vertical-line"></div>{" "}
          {/* Áp dụng hiệu ứng slide-down */}
          <p className="flex">
            Select the Airdrop <br /> amount you received:
          </p>
          {/* Airdrop Button Selection */}
          <div className="border rounded-xl p-1">
            <ButtonPrice className="" prices={prices} />
          </div>
          {/* Claim Button */}
          <div className="flex h-[50px] relative z-10">
            <Button className="bg-btnGraH1 btnchung">Claim</Button>
          </div>
        </div>

        {/* Energy Lines */}
        <div className="my-3">
          <div className="relative my-2 w-full flex flex-col">
            {/* Đường phân cách nền */}
            <hr className="separator-background" />{" "}
            {/* Áp dụng hiệu ứng separator-background-slide */}
            {/* Đường phân cách chính với gradient */}
            <hr className="separator-gradient" />{" "}
            {/* Áp dụng hiệu ứng gradient-slide */}
          </div>
        </div>
      </div>

      {/* Banner Image */}
      <div className="relative md:absolute md:right-0 md:translate-x-[50px] md:translate-y-[-250px] w-full flex justify-center md:block">
        <img
          src="/anim.gif"
          alt="gif"
          className="w-[150px] h-[150px] md:w-[600px] md:h-[900px] object-contain translate-x-[800px]"
        />
      </div>

      {/* Logo Carousel */}
      <div className="w-full text-center mt-[120px] mb-4">
        <LogoCarousel />
      </div>
    </section>
  );
};

export default BannerLayout;
