/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Pink: "hsl(322, 100%, 66%)",
                c_Very_Pale_Cyan: "hsl(193, 100%, 96%)",
                c_Very_Dark_Cyan: "hsl(192, 100%, 9%)",
                c_Grayish_Blue: "hsl(208, 11%, 55%)",
            },
            fontFamily: {
                body: ["Open Sans", "system-ui"],
                heading: ["Poppins", "sans-serif"]
            }
        },
    },
    plugins: [],
}

