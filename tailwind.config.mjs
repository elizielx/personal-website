/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            animation: {
                marquee: "marquee 25s linear infinite",
                marquee2: "marquee2 25s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
            fontFamily: {
                sans: ["'Manrope Variable'", "sans-serif"],
            },
            colors: {
                "blue-charcoal": {
                    50: "#f3f8fc",
                    100: "#e7f0f7",
                    200: "#c9dfee",
                    300: "#9ac6df",
                    400: "#64a7cc",
                    500: "#408cb7",
                    600: "#2f719a",
                    700: "#275a7d",
                    800: "#244d68",
                    900: "#224158",
                    950: "#0d1821",
                },
                "ship-gray": {
                    50: "#f8f7f8",
                    100: "#f0eeef",
                    200: "#ded9dc",
                    300: "#c2b7be",
                    400: "#a0909b",
                    500: "#84737f",
                    600: "#6d5c67",
                    700: "#584c54",
                    800: "#4b4148",
                    900: "#41393e",
                    950: "#2b2629",
                },
            },
        },
    },
    plugins: [],
};
