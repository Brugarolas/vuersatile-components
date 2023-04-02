<template lang="pug">
Icon.boolean-icon(:icon="icon", :colorType="colorValue", size="m")
</template>

<script>
import Icon from './Icon.vue'

export default {
  components: {
    Icon
  },

  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    icon () {
      return this.value ? 'check' : 'xmark'
    },
    colorValue () {
      return this.value ? 'success' : 'danger'
    }
  }
}
</script>
