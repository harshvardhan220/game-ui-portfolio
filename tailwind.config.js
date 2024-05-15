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
        xxs: "355px",
        xs: "480px", // Extra small devices
        sm: "640px", // Small devices, like mobile (default)
        md: "768px", // Medium devices, like tablets
        lg: "1024px", // Large devices, like laptops
        xl: "1280px",
        'smartwatch': { 'raw': '((min-width: 320px) and (max-width: 480px))' },
        'mobile': { 'raw': '((min-width: 481px) and (max-width: 767px)))' },
        'tablet': { 'raw': '((min-width: 768px) and (max-width: 1023px))' },
        'tabletToDesktop': { 'raw': '((min-width: 1024px) and (max-width: 1279px))' },
        'desktop': { 'raw': '( (min-width: 1280px) and (max-width: 1439px))' },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      "bottom-left-vector": "url('/public/assets/bottom-left.png')",
      fontFamily: {
        "big-shoulders": ["Big Shoulders Display"],
      },
    },
  },
  plugins: [],
};
