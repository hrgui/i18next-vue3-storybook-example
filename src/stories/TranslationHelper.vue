<template>
  <div :dir="direction">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from 'i18next-vue'
import { ref, onMounted } from 'vue'
import { addons } from '@storybook/preview-api'
import { SET_GLOBALS, GLOBALS_UPDATED } from '@storybook/core-events'
import { getValueFromStorybookSearchParams } from './helpers'

const { i18next } = useTranslation()
const direction = ref('ltr')
const channel = addons.getChannel()

const handleLanguageChanged = (language: string) => {
  i18next.changeLanguage(language.replace('-', '_'))
  direction.value = i18next.dir(language.replace('_', '-'))
}

onMounted(() => {
  handleLanguageChanged(getValueFromStorybookSearchParams({ key: 'locale', defaultValue: 'en_US' }))
})

channel.addListener(SET_GLOBALS, ({ globals }) => handleLanguageChanged(globals.locale))
channel.addListener(GLOBALS_UPDATED, ({ globals }) => handleLanguageChanged(globals.locale))
</script>
