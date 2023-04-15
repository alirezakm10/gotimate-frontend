
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        gotimate: "#05697E",
        bluegot: "#00ACCF",
        darkgot: "#1F2D3D",
        dimgot: "#637381",
      },
    },
    fontFamily: {
      ageo: ["ageoregular", "ageobold", "ageolight"],
    },
  },
  plugins: [],
};

