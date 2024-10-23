import { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const baseConfig = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        map: "url('https://www.hostelworld.com/pwa/_nuxt/img/8a208fd.svg')",
      },

      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "#f1fafa",
          100: "#dbeff2",
          200: "#bcdfe5",
          300: "#8dc8d3",
          400: "#57a8b9",
          500: "#3c8c9e",
          600: "#347286",
          700: "#305e6e",
          800: "#2e4f5c",
          900: "#2a434f",
          950: "#182b34",
          10: "#2e4f5c",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          50: "#f7f7f8",
          100: "#f2f0f3",
          200: "#e7e1e9",
          300: "#d6c9d8",
          400: "#bba7bf",
          500: "#a58ba9",
          600: "#8f7191",
          700: "#785c7a",
          800: "#654e66",
          900: "#564457",
          950: "#322532",
          10: "#8f7191",
        },
        sgray: {
          50: "#e7e7e7",
          100: "#808080",
          200: "#3d3d3d",
          10: "#e7e7e7",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default baseConfig;
