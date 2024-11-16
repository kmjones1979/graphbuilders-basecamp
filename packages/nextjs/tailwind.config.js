/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["class", "[data-theme='dark']"], // Supports class-based toggling for flexibility
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7C4DFF", // Vibrant purple
          "primary-content": "#FFFFFF", // White text for clarity
          secondary: "#9575CD", // Soft lavender purple
          "secondary-content": "#1A1A1A", // Dark gray for contrast
          accent: "#B39DDB", // Muted lavender for accents
          "accent-content": "#1A1A1A", // Dark gray for contrast
          neutral: "#F5F5F5", // Light neutral background
          "neutral-content": "#1A1A1A", // Dark text for readability
          "base-100": "#FFFFFF", // White background
          "base-200": "#F0F0F0", // Slightly off-white for sections
          "base-300": "#E0E0E0", // Light gray for borders
          "base-content": "#3D3D3D", // Dark gray text
          info: "#9575CD", // Lavender for info
          success: "#7C4DFF", // Purple success highlights
          warning: "#FFC400", // Yellow for warning
          error: "#E57373", // Muted red for error

          "--rounded-btn": "6px",

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
          "primary-content": "#0A0A0A", // Black for strong contrast
          secondary: "#9575CD", // Lavender purple
          "secondary-content": "#FFFFFF", // White for readability
          accent: "#B39DDB", // Muted lavender accents
          "accent-content": "#0A0A0A", // Black for contrast
          neutral: "#0A0A0A", // Deep black neutral
          "neutral-content": "#E0D7FF", // Subtle purple-tinted text
          "base-100": "#121212", // Very dark gray background
          "base-200": "#1A1A1A", // Slightly lighter dark gray
          "base-300": "#2A2A2A", // Medium dark gray
          "base-content": "#E0D7FF", // Subtle purple-tinted text
          info: "#9575CD", // Lavender purple for info
          success: "#7C4DFF", // Vibrant purple for success
          warning: "#FFC400", // Yellow for warning
          error: "#E57373", // Muted red for error

          "--rounded-btn": "6px",

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
        "pulse-slow": "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite", // Smooth pulse
      },
    },
  },
};
