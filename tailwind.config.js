
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    minHeight: {
      'img-height': '230px'
    },
    extend: {
      backgroundImage: {
        'header-img': "url('~/assets/img/film-70638.jpg')"
      },
      gridTemplateColumns: {
        header: '500px 2fr'
      },

      lineHeight: {
        12: '4rem'
      }
    },
    color: {
      midnight: '#f0f8ff'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
