import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        glowing: "0.25px -0.5px 7px 2px rgba(249,168,212,0.65)"
      },
      transform: {
        'mirror-horizontal': 'scaleX(-1)',
      },
      keyframes: {
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        topDown: {
          '0%': { top: '0', opacity: '1' },
          '100%': { top: '100%', opacity: '1' },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slowSpin: {
          '0%': { transform: 'rotate(8deg)' },
          '100%': { transform: 'rotate(368deg)' },
        }
      },
      animation: {
        slideInRight: 'slideInRight 0.7s ease-out forwards',
        slideInTop: 'slideInTop 1s ease-out forwards',
        slideInBottom: 'slideInBottom 0.3s ease-out forwards',
        topDown: 'topDown 7.5s linear infinite',
        slowSpin: 'slowSpin 13s linear infinite',
      },
    },
  },
  plugins: [


  ],
};
export default config;
