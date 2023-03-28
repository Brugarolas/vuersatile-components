<template lang="pug">
    .scrollable-parent
        slot
</template>

<style lang="scss">
.scrolling-parent {
  /* https://dev.to/peiche/100vh-behavior-on-chrome-2hm8 */
  min-height: calc(100vh - 56px);
  min-height: -webkit-fill-available;
  flex: 1 1 0;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-flow: column;
}
</style>

