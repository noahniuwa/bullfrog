/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],

      },
      colors: {
        'dark-honey': '#78350f',
        'light-honey': '#FECE2F'
      },

    },
  },
  plugins: [],
}
