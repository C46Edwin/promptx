/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#050303',
        ink2: '#100608',
        crimson: '#FF1744',
        'crimson-bright': '#FF294F',
        glow: '#FF5368',
        metal: '#FFDDE2',
        paper: '#F7F1F1',
        muted: '#B9A7AA',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'Haettenschweiler', 'sans-serif'],
        tech: ['Orbitron', '"Segoe UI"', 'sans-serif'],
        body: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      maxWidth: { arena: '1500px' },
    },
  },
  plugins: [],
};
