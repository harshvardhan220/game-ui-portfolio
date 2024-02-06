/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs:'375px',
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices, like mobile (default)
        md: "768px", // Medium devices, like tablets
        lg: "1024px", // Large devices, like laptops
        xl: "1280px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display"],
      },
    },
  },
  plugins: [],
};
