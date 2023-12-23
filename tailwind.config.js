const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        safron: "#E4BF3A",
        gold: "#DFB736",
        engorange: "#C22B0F",
        darkbrown: "#423802",
        applegreen: "#89A018",
        barnRed: "#720E06",
        smokyblack: "#101108",
        blackbean: "#4A0805",
        oldgold: "#C0AB3A",
        cocoabrown: "#C56C37",
        white: "#FFFF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
