/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        'rosey-white': '#FFF5F7',
        'soft-peach': '#FFE5EC',
        'pearl': '#F9F5FF',
        'lavender-blush': '#FFF0F5',
        'cotton-candy': '#FFCEE5',
        
        // Dark Mode Colors
        'midnight-blue': '#0A192F',
        'deep-sky': '#1E3A8A',
        'navy-blue': '#172554',
        'electric-blue': '#3B82F6',
        'sky-blue': '#38BDF8',
        'cyan-glow': '#22D3EE',
        'neon-cyan': '#06B6D4',
        
        // Accent Colors (Works in both modes)
        'coral': '#FF6B6B',
        'sunset': '#FF9A76',
        'golden': '#FFD166',
        'mint': '#06D6A0',
        'violet': '#9D4EDD',
        'pink-glow': '#FF6B9D',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-500px 0' },
          '100%': { backgroundPosition: '500px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}