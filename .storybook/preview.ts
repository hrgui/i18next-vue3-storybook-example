import { type Preview, setup } from '@storybook/vue3'
import '@/setupi18n'
import I18NextVue from 'i18next-vue'
import i18next from 'i18next'
import TranslationHelper from '../src/stories/TranslationHelper.vue'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (story, context) => ({
      components: { story, TranslationHelper },
      template: '<TranslationHelper><story /></TranslationHelper>'
    })
  ],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en_US',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en_US', right: '🇺🇸', title: 'English' },
          { value: 'ja_JP', right: '🇯🇵', title: '日本語' },
          { value: 'es_ES', right: '🇪🇸', title: 'Español' },
          { value: 'de_DE', right: '🇩🇪', title: 'Deutsch' },
          { value: 'ar_SA', right: '🇸🇦', title: 'العربية' },
          { value: 'id_ID', right: '🇮🇩', title: 'Bahasa Indonesia' }
        ]
      }
    }
  }
}

setup((app) => {
  app.use(I18NextVue, { i18next })
})

export default preview
