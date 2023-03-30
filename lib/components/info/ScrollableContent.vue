<template lang="pug">
.scrollable-content
  slot
</template>

<style lang="scss">
.scrolling-content {
  /* https://dev.to/peiche/100vh-behavior-on-chrome-2hm8 */
  max-height: calc(100vh - 56px);
  flex: 1 1 0;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  touch-action: pan-y;
  scroll-behavior: smooth;
}
</style>