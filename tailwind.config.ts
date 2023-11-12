import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'Dark-Blue': 'hsl(233, 26%, 24%)',
        'Lime-Green': 'hsl(136, 65%, 51%)',
        'Bright-Cyan': 'hsl(192, 70%, 51%)',
        'Grayish-Blue': 'hsl(233, 8%, 62%)',
        'Light-Grayish-Blue': 'hsl(220, 16%, 96%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
