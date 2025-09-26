import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Mario theme colors with vibrant palette
        mario: {
          red: "hsl(var(--mario-red))",
          "red-dark": "hsl(var(--mario-red-dark))",
          "red-foreground": "hsl(var(--mario-red-foreground))",
          blue: "hsl(var(--mario-blue))",
          "blue-dark": "hsl(var(--mario-blue-dark))",
          "blue-foreground": "hsl(var(--mario-blue-foreground))",
          gold: "hsl(var(--mario-gold))",
          "gold-dark": "hsl(var(--mario-gold-dark))",
          "gold-foreground": "hsl(var(--mario-gold-foreground))",
          green: "hsl(var(--mario-green))",
          "green-dark": "hsl(var(--mario-green-dark))",
          "green-foreground": "hsl(var(--mario-green-foreground))",
          block: "hsl(var(--mario-block))",
          "block-dark": "hsl(var(--mario-block-dark))",
          "block-foreground": "hsl(var(--mario-block-foreground))",
        },
        
        // Vibrant palette colors
        vibrant: {
          red: "hsl(var(--vibrant-red))",
          orange: "hsl(var(--vibrant-orange))",
          yellow: "hsl(var(--vibrant-yellow))",
          gold: "hsl(var(--vibrant-gold))",
          green: "hsl(var(--vibrant-green))",
          teal: "hsl(var(--vibrant-teal))",
          "blue-teal": "hsl(var(--vibrant-blue-teal))",
          "blue-gray": "hsl(var(--vibrant-blue-gray))",
          blue: "hsl(var(--vibrant-blue))",
        },
        
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
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
      fontFamily: {
        'pixel': ['VT323', 'monospace'],
        'heading': ['Orbitron', 'sans-serif'],
        'body': ['VT323', 'monospace'],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "mario-bounce": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        "coin-spin": {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(90deg) scale(0.8)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "power-up-pulse": {
          "0%, 100%": { 
            transform: "scale(1)",
          },
          "50%": { 
            transform: "scale(1.05)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "mario-bounce": "mario-bounce 1s ease-in-out infinite",
        "coin-spin": "coin-spin 2s linear infinite",
        "power-up-pulse": "power-up-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
