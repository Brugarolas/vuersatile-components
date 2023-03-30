<template lang="pug">
transition-group(:css="false", :duration="duration", :tag="tag", @before-enter="beforeEnter", @enter="enter", @after-enter="afterEnter", @before-leave="beforeLeave", @leave="leave")
    slot
</template>

<script>
import TransitionHeight from './TransitionHeight.vue'

export default {
  mixins: [TransitionHeight],
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
