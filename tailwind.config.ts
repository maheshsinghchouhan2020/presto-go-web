import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F56B55",
          dark: "#DB4B34",
          light: "rgba(245,107,85,0.2)"
        },
        secondary: {
          DEFAULT: "#141414",
          light: "#777777"
        },
        background: {
          white: "#FFFFFF",
          light: "#FAFAFA",
          muted: "#F9FAFB"
        },
        border: {
          light: "rgba(203,203,203,0.4)",
          DEFAULT: "#CBCBCB",
          strong: "rgba(203,203,203,0.6)"
        },
        status: {
          success: "#00A654",
          "success-light": "rgba(0,166,84,0.2)",
          "warning-bg": "#FBFBC8",
          "warning-text": "#884E1B",
          error: "#FF3B30",
          "error-light": "rgba(255,59,48,0.1)"
        }
      },
      borderRadius: {
        card: "18px",
        button: "15px"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(20,20,20,0.08)",
        hover: "0 24px 70px rgba(20,20,20,0.12)",
        glow: "0 0 38px rgba(245,107,85,0.45)"
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(108.73deg, #DB4B34 23.73%, #F56B55 79.34%)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
