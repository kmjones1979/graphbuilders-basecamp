/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7C4DFF", // Vibrant purple
          "primary-content": "#0A0A0A", // Black for contrast
          secondary: "#9575CD", // Softer lavender purple
          "secondary-content": "#FFFFFF", // White for readability
          accent: "#B39DDB", // Muted lavender accent
          "accent-content": "#0A0A0A", // Black for contrast
          neutral: "#121212", // Deep black neutral
          "neutral-content": "#FFFFFF", // White for text
          "base-100": "#1A1A1A", // Dark gray background
          "base-200": "#2A2A2A", // Slightly lighter gray
          "base-300": "#3A3A3A", // Light gray
          "base-content": "#E0D7FF", // Subtle purple-tinted text
          info: "#9575CD", // Soft purple for info
          success: "#7C4DFF", // Vibrant purple for success
          warning: "#FFC400", // Yellow for warning
          error: "#E57373", // Muted red for error

          "--rounded-btn": "6px", // Slightly rounded buttons for elegance

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#7C4DFF", // Vibrant purple
          "primary-content": "#0A0A0A", // Black for contrast
          secondary: "#9575CD", // Softer lavender purple
          "secondary-content": "#FFFFFF", // White for readability
          accent: "#B39DDB", // Muted lavender accent
          "accent-content": "#0A0A0A", // Black for contrast
          neutral: "#0A0A0A", // Deep black neutral
          "neutral-content": "#E0D7FF", // Subtle purple-tinted text
          "base-100": "#0A0A0A", // Black background
          "base-200": "#1A1A1A", // Slightly lighter black
          "base-300": "#2A2A2A", // Dark gray
          "base-content": "#E0D7FF", // Subtle purple-tinted text
          info: "#9575CD", // Soft purple for info
          success: "#7C4DFF", // Vibrant purple for success
          warning: "#FFC400", // Yellow for warning
          error: "#E57373", // Muted red for error

          "--rounded-btn": "6px", // Slightly rounded buttons for elegance

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgba(124, 77, 255, 0.5)", // Purple glow effect
      },
      animation: {
        "pulse-slow": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Slower pulse for elegance
      },
    },
  },
};
