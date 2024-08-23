/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font1: ["Roboto", "sans-serif"],
      },
      colors: {
        bgColor: "#02001D",
        primaryPurple: "#4E50E4",
        primaryBlue: "#3409E5",
        primaryGray: "#1A0D23",
      },
      backgroundImage: {
        headerColor:
          "linear-gradient(85deg, rgba(130,223,227,1) 0%, rgba(83,95,228,1) 37%, rgba(42,5,194,1) 69%)",
        btnGraH1:
          "linear-gradient(85deg, rgba(130,223,227,1) 0%, rgba(52,9,229,1) 90%)",
        btnGraH2:
          "linear-gradient(180deg,  rgba(35,50,129,1) 10%, rgba(3,1,30,1) 100%)",
        primaryGradient:
          "linear-gradient(105deg, rgba(130,223,227,1) 0%, rgba(35,50,129,1) 100%)",
        blueGradient:
          "radial-gradient(281deg, rgba(130,223,227,1) 0%, rgba(91,116,228,1) 100%)",
        SuperBlueGradient:
          "linear-gradient(281deg, rgba(130,223,227,1) 0%, rgba(90,114,228,1) 6%, rgba(2,0,29,1) 100%)",
        buttonGradient:
          "linear-gradient(151deg, rgba(52,9,229,1) 1%, rgba(35,50,129,1) 19%, rgba(3,1,30,1) 80%)",
        buttonGradientFooter:
          "linear-gradient(151deg, rgba(130,223,227,1) 0%, rgba(52,9,229,1) 100%)",
      },
      keyframes: {
        move1: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-500px, -650px)" },
        },
        move2: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(400px, -800px)" },
        },
        move3: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(300px, 40px)" },
        },
      },
      animation: {
        "move-1": "move1 3s ease-out forwards",
        "move-2": "move2 3s ease-out forwards",
        "move-3": "move3 3s ease-out forwards",
      },
    },
  },
  plugins: [],
};
