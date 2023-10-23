/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s forwards',
        fadeOut: 'fadeOut 0.5s forwards',
        anime: 'anime 3s cubic-bezier(0.16, 1, 0.3, 1) 1s alternate forwards',
        animeReverse:
          'animeReverse 3s cubic-bezier(0.16, 1, 0.3, 1) 1s alternate forwards',
        longFadeIn: 'fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards',
        longFadeOut: 'fadeOut 3s cubic-bezier(0.16, 1, 0.3, 1) 1s forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '80%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1, width: '250px', height: '45px' },
          '100%': { opacity: 0 },
        },
        anime: {
          '0%': {
            opacity: 0,
            width: '60px',
            height: '30px',
            background: '#f0f0f0',
          },
          '25%': {
            opacity: 1,
            width: '250px',
            height: '45px',
            background: '#fafafa',
          },
          '100%': {
            opacity: 1,
            width: '250px',
            height: '45px',
            background: '#fafafa',
          },
        },
        animeReverse: {
          '0%': {
            width: '250px',
            height: '45px',
            background: '#fafafa',
            boxShadow:
              '40px 40px 40px #cccccc, 0 0 0 #ffffff, 0 0 0 #cccccc inset, 2px 2px 2px #ffffff inset',
          },
          '100%': {
            width: '60px',
            height: '30px',
            background: '#f0f0f0',
            boxShadow:
              '0 0 0 #cccccc, 0 0 0 #ffffff, 10px 10px 10px #cccccc inset, -10px -10px 10px #ffffff inset',
          },
        },
      },
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
