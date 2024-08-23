import React, { useEffect, useRef } from "react";
import LoadingText from "../component/LoadingText";
import MovingImages from "../component/MovingImage";
import CircleBlurUse from "../component/CircleBlurUse";
import RefundButton from "../component/RefundButton";
import Button from "../component/Button";

const Circle = () => {
  const images = [
    { src: "gasfee.svg", alt: "Logo 1" },
    { src: "charticon.svg", alt: "Logo 2" },
    { src: "ethicon.svg", alt: "Logo 3" },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          // Start animations
          sectionRef.current
            .querySelectorAll(".move-1, .move-2, .move-3")
            .forEach((el) => {
              el.classList.add("animate");
            });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the scroll check once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="mt-[100px] relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Circle blur effects */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="circle-stroke circle-stroke-1"></div>
        <div className="circle-stroke circle-stroke-2"></div>
      </div>

      <div className="relative z-10 text-center flex flex-col justify-center items-center mt-[500px]">
        {/* Main content */}
        <h1 className="font-bold m-1 text-[50px] text-primarygradient">
          <LoadingText interval={600} />
        </h1>
        <h2 className="mb-5 text-[40px] text-primarygradient">
          Incredible Rewards!
        </h2>
        <p className="wrapper text-[20px] text-white mb-8 max-w-[400px]">
          Lucky random winners selected in this event now have the chance to
          <br />
          reclaim all the gas fees they spent from their first transaction.
        </p>
        {/* <button className="btnRefund btnhover">Refund</button> */}
        <Button className="bg-btnGraH2 btnchung btnhover ">Refund</Button>
      </div>

      <CircleBlurUse className="translate-x-[-500px] translate-y-[10px] opacity-30" />

      {/* Moving Images */}
      <MovingImages images={images} />
    </div>
  );
};

export default Circle;
// /test comment??
