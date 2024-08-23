import React from "react";
import RotatingTextHelp from "../component/RotatingTextHelp";

const Footer = () => {
  return (
    <footer className="bg-bgColor py-[100px]">
      <div className="wrapper flex flex-col md:flex-row justify-between items-center mb-8"></div>

      {/* Section 2 */}
      <div className="wrapper text-center py-[50px] ">
        {/* <h1 className="text-2xl font-bold mb-6 leading-relaxed">
          Still need help?
        </h1> */}
        <RotatingTextHelp textColor="text-white">
          Still Need help?
        </RotatingTextHelp>

        <button className="bg-btnGraH1 btnchung btnhover m-5 round-2xl ">
          Learn how to claim Airdrop
        </button>
        {/* <p className="text-gray-600 wrapper text-center justify-center  my-[30px] flex ">
          Ethereum Airdrop Event provided smooth sailing for participants,
          making earning <br /> rewards and global token distribution an
          attractive experience.
        </p> */}

        <RotatingTextHelp textColor="text-gray-500">
          Ethereum Airdrop Event provided smooth sailing for participants,
          making earning <br /> rewards and global token distribution an
          attractive experience.
        </RotatingTextHelp>
      </div>
    </footer>
  );
};

export default Footer;
