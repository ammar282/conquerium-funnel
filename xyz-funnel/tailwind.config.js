module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'deep-purple-start': '#1f0536',
        'deep-purple-end': '#3b0b57',
        'gold': '#FFB020',
        'success-green': '#16A34A'
      },
      backgroundImage: {
        'purple-gradient': 'radial-gradient(circle at 50% 40%, rgba(109,40,217,0.45), rgba(59,11,87,0.95) 60%)'
      }
    }
  },
  plugins: []
}
