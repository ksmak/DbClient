import type { Config } from 'tailwindcss'

import withMT from "@material-tailwind/react/utils/withMT"

export default withMT({
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#42a5f5',
        secondary: '#ff6f61',
        button: '#b2b2b2',
        buttonhover: '#8b8b8b'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config)
