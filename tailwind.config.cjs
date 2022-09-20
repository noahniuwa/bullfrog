/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        ubuntu: ['Ubuntu', 'monospace'],
        majorMono: ['Major Mono Display', 'monospace'],
        quicksand: ['Quicksand', 'monospace'],
      },
      colors: {
        'dark-honey': '#78350f',
        'light-honey': '#FECE2F'
      },

    },
  },
  plugins: [],
}
