import { defineConfig, presetTypography, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno({
      dark: 'media',
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
        mono: 'Fira Code',
        display: 'Inter Tight',
      },
    }),
  ],
  theme: {
    fontSize: {
      // major second scale
      h1: '2.986rem',
      h2: '2.488rem',
      h3: '2.074rem',
      h4: '1.728rem',
      h5: '1.44rem',
      h6: '1.2rem',
      base: '1rem',
      sm: '0.833rem',
      xs: '0.694rem',

      // grid-aligned x height
      x2: '0.916rem',
      x3: '1.374rem',
      x4: '1.832rem',
      x5: '2.29rem',
      x6: '2.748rem',
      x7: '3.206rem',
      x8: '3.664rem',

      // grid-aligned cap height
      c2: '0.687rem',
      c3: '1.031rem',
      c4: '1.374rem',
      c5: '1.718rem',
      c6: '2.062rem',
      c7: '2.405rem',
      c8: '2.749rem',
    },
  },
  // custom rules for baseline utilities
  rules: [
    [
      /^baseline-(\d+)$/,
      function* ([, value], { symbols, theme }) {
        // multiply by 4 to get the baseline grid leading
        const leading = parseInt(value) * 4
        const conv = 1 / 16 // 1px = 1/16rem
        yield {
          'margin-bottom': `${(-leading / 2) * conv}rem`,
          'line-height': `${leading * conv}rem`,
        }
        yield {
          [symbols.selector]: (s) => `${s}::before`,
          content: '""',
          display: 'inline-block',
          height: `${leading * conv}rem`,
        }
        yield {
          [symbols.selector]: (s) => `${s}::after`,
          content: '""',
          display: 'inline-block',
          'vertical-align': `${(-leading / 2) * conv}rem`,
        }
      },
    ],
  ],
})
