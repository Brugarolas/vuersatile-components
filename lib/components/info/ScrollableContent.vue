<template lang="pug">
.scrollable-content
  slot
</template>

<style lang="scss">
.scrollable-content {
  /* https://dev.to/peiche/100vh-behavior-on-chrome-2hm8 */
  max-height: 100vh;
  flex: 1 1 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  scroll-behavior: smooth;
}
</style>