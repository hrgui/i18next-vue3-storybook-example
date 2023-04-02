<script setup lang="ts">
defineProps<{
  isAfternoon?: boolean
}>()
</script>

<template>
  <h1>{{ $t(isAfternoon ? 'goodAfternoon' : 'goodMorning') }}</h1>
</template>
