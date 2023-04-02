<template lang="pug">
.locked-icon(:class="{ 'locked-icon--hidden': !locked }")
    Tooltip(:text="text", :position="position")
      Icon(icon="lock-keyhole", colorType="danger")
</template>

<script>
import Tooltip from './Tooltip.vue'
import Icon from './Icon.vue'

export default {
  components: {
    Tooltip,
    Icon
  },

  props: {
    locked: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      required: true
    },
    position: {
      type: String,
      default: 'top'
    }
  }
}
</script>

<style lang="scss">
.locked-icon {
  display: flex;
  cursor: pointer;

  &--hidden {
    display: none;
  }
}
</style>
