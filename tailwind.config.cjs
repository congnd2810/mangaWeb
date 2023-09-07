/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
    './public/**/*.html'
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
