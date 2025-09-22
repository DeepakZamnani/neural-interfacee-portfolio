/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
  	extend: {
      colors: {
        // Sci-fi color palette
        'cyan': {
          400: '#00FFFF',
          500: '#00D4D4',
        },
        'magenta': {
          500: '#FF00FF',
          600: '#D400D4',
        },
        'purple': {
          500: '#8B00FF',
          600: '#7500D4',
        },
        'teal': {
          500: '#008080',
          600: '#006666',
        },
        // Keep existing shadcn colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'exo': ['Exo', 'sans-serif'],
        'rajdhani': ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 0.3s infinite linear alternate-reverse',
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 255, 1), 0 0 30px rgba(0, 255, 255, 0.5)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        'glitch': {
          '0%, 14%, 16%, 18%, 20%, 24%, 25%, 30%, 32%, 34%, 36%, 40%, 41%, 42%, 43%, 45%, 50%, 52%, 54%, 55%, 58%, 60%, 61%, 62%, 68%, 70%, 72%, 75%, 76%, 78%, 80%, 83%, 85%, 86%, 87%, 90%, 92%, 95%, 100%': {
            textShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF'
          },
          '15%, 17%, 19%, 21%, 22%, 23%, 26%, 27%, 28%, 29%, 31%, 33%, 35%, 37%, 38%, 39%, 44%, 46%, 47%, 48%, 49%, 51%, 53%, 56%, 57%, 59%, 63%, 64%, 65%, 66%, 67%, 69%, 71%, 73%, 74%, 77%, 79%, 81%, 82%, 84%, 88%, 89%, 91%, 93%, 94%, 96%, 97%, 98%, 99%': {
            textShadow: '2px 0 #FF00FF, -2px 0 #00FFFF'
          }
        },
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};