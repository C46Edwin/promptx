/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#050303',
        panel: '#100608',
        crimson: '#FF1744',
        ember: '#FF5368',
        ink: '#F7F1F1',
        mute: '#B9A7AA',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'Rajdhani', 'sans-serif'],
        rajdhani: ['Rajdhani', 'system-ui', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(255, 23, 68, 0.45)',
        'neon-lg': '0 0 48px rgba(255, 23, 68, 0.6)',
      },
    },
  },
  plugins: [],
}
