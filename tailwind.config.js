/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        wallpaper: "url('assets/wallpaper.jpg')",
      },
      backgroundColor: {
        'dark-blue': '#001f3f',
        'medium-blue': '#003366',
        'light-blue': '#007BFF',
        'soft-green': '#28a745',
        'dark-green': '#19692c',
        'slate-gray': '#708090',
        'lighter-gray': '#D3D3D3', // Added lighter gray
        'darker-gray': '#2F4F4F', // Added darker gray
      },
      textColor: {
        'off-white': '#f8f9fa',
        'lighter-white': '#e9ecef',
        'soft-green': '#28a745',
        'dark-green': '#19692c',
        'slate-gray': '#708090',
        'lighter-gray': '#D3D3D3', // Added lighter gray
        'darker-gray': '#2F4F4F', // Added darker gray
      },
      borderColor: {
        'soft-green': '#28a745',
        'medium-blue': '#003366',
        'slate-gray': '#708090',
        'lighter-gray': '#D3D3D3', // Added lighter gray
        'darker-gray': '#2F4F4F', // Added darker gray
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
