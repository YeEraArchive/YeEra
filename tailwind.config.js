/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fff", // 흰색
        foreground: "#232326", // 진한 그레이(텍스트)
        card: "#f4f4f5", // 밝은 실버(카드)
        "card-foreground": "#232326",
        muted: "#f4f4f5",
        "muted-foreground": "#a1a1aa",
        primary: "#bfc1c2", // 실버(메탈릭)
        "primary-foreground": "#232326",
        secondary: "#f4f4f5",
        "secondary-foreground": "#232326",
        accent: "#e50914", // 강렬한 레드
        "accent-foreground": "#fff",
        destructive: "#ef4444",
        "destructive-foreground": "#fff",
        border: "#e5e7eb",
        input: "#e5e7eb",
      },
      animation: {
        in: "animate-in 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s cubic-bezier(0.16,1,0.3,1)",
      },
      keyframes: {
        "animate-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
