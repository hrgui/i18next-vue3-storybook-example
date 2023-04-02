import i18next from 'i18next'

i18next // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en_US',
    resources: {
      en_US: {
        translation: {
          helloWorld: 'Hello World',
          goodMorning: 'Good morning',
          goodAfternoon: 'Good afternoon'
        }
      },
      ja_JP: {
        translation: {
          helloWorld: 'こんにちは世界',
          goodMorning: 'おはようございます',
          goodAfternoon: 'こんにちは'
        }
      },
      es_ES: {
        translation: {
          helloWorld: 'Hola Mundo',
          goodMorning: 'Buenos días',
          goodAfternoon: 'Buenas tardes'
        }
      },
      de_DE: {
        translation: {
          helloWorld: 'Hallo Welt',
          goodMorning: 'Guten Morgen',
          goodAfternoon: 'Guten Tag'
        }
      },
      ar_SA: {
        translation: {
          helloWorld: 'مرحبا بالعالم',
          goodMorning: 'صباح الخير',
          goodAfternoon: 'مساء الخير'
        }
      },
      id_ID: {
        translation: {
          helloWorld: 'Halo Dunia',
          goodMorning: 'Selamat pagi',
          goodAfternoon: 'Selamat siang'
        }
      }
    }
  })

/*

  en: {
        translation: {
          welcome: 'Welcome to Your Vue.js App',
          descr: 'For a guide and recipes on how to configure / customize '
            + 'this project,<br>check out the '
            + '<a href="https://cli.vuejs.org" target="_blank" '
            + 'rel="noopener">vue-cli documentation</a>.'
        }
      }
      */
