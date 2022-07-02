/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                // "hero-pattern": "url('../assets/wickedbackground.svg')",
                // "bottom-wave": "url('../assets/wave1.svg')",
                // arrowSvg: "url('./assets/arrowSvg.svg')",
                // "card-wave": "url('../assets/card-svg.svg')",
                // "phone-card-wave": "url('../assets/phone-card-wave.svg')",
                "hero-pattern": "url('./assets/wickedbackground.svg')",
                "bottom-wave": "url('./assets/wave1.svg')",
                arrowSvg: "url('./assets/arrowSvg.svg')",
                "card-wave": "url('./assets/card-svg.svg')",
                "phone-card-wave": "url('./assets/phone-card-wave.svg')",
            },
            colors: {
                blueColor: "#008CFF",
            },
        },
    },
    plugins: [require("preline/plugin")],
};
