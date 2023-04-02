<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ScrollableParent, ScrollableContent } from '@/components/info'
</script>

<template lang="pug">
ScrollableParent
  ScrollableContent
    RouterView
</template>

<style lang="scss">
body {
  background-color: $greyscale-color-10;
}
</style>
