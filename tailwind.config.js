/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#F66800",
        whiteColor: "#FFFFFF",
        lightBlue: "#2b3255",
        darkBlue: "#161928",
      },
      screens: {
        sm: { max: "767px" },
        // => @media (min-width: 640px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        img404: "url('/public/assets/images/404.png')",
        Avatar1: "url('/public/assets/images/Avatar (1).png')",
        Avatar2: "url('/public/assets/images/Avatar (2).png')",
        Avatar3: "url('/public/assets/images/Avatar (3).png')",
        Avatar4: "url('/public/assets/images/Avatar (4).png')",
        Avatar5: "url('/public/assets/images/Avatar (5).png')",
        Avatar6: "url('/public/assets/images/Avatar.png')",
        icon1: 'url("/public/assets/images/chart-pie.png")',
        icon2: 'url("/public/assets/images/clipboard-list.png")',
        icon3: 'url("/public/assets/images/collection.png")',
        icon4: 'url("/public/assets/images/inbox-in.png")',
        icon5: 'url("/public/assets/images/lock-closed.png")',
        icon6: 'url("/public/assets/images/shopping-bag.png")',
        icon7: 'url("/public/assets/images/support.png")',
        logo: 'url("/public/assets/images/Logo.png")',
        globe: 'url("/public/assets/images/globe.png")',
        adjustments: 'url("/public/assets/images/adjustments.png")',
        cog: 'url("/public/assets/images/cog.png")',
      },
    },
  },
  plugins: [],
};
