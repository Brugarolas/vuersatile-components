<template lang="pug">
transition(name="fadeselect")
    slot
</template>

<style lang="scss">
// Using #body so selector has higher specificity and it can override element's style
#body {
  .fadeselect-enter-active {
    transition: transform .2s, opacity .2s;
  }

  .fadeselect-leave-active {
    transition: transform .15s, opacity .15s;
  }

  .fadeselect-enter,
  .fadeselect-leave-to {
    opacity: 0;
    transform: translate(0, 8px) scale(0.95);
  }
}
</style>
