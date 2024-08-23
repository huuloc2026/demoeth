import React from "react";
import Button from "../component/Button";

const navMenudata = [
  { title: "HOME's Loc", link: "#" },
  { title: "MYSTERY BOX", link: "#" },
  { title: "HOW CAN I CLAIM ?", link: "#" },
  { title: "ABOUT US", link: "#" },
];

const Headertest = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-headerColor shadow-md z-50">
      <div className="wrapper flex items-center justify-between h-[90px] font-light">
        {/* Logo */}
        <div className="logo flex-shrink-0">
          <img src="/logo.png" alt="logo" className="h-8 md:h-10" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden min-[1024px]:flex flex-grow justify-center items-center">
          <ul className="flex items-center justify-center gap-x-[40px] whitespace-nowrap">
            {navMenudata.map((item) => (
              <li className="hover:text-base" key={item.title}>
                <a
                  href={item.link}
                  className="text-lg hover:text-blue-300 transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex gap-x-2">
          <Button className="bg-btnGraH1 btnchung">MYSTERYBOX BONUS</Button>
          <Button className="bg-btnGraH2 btnchung">ETHERUM FOUNDATION</Button>
        </div>
      </div>
    </header>
  );
};

export default Headertest;
