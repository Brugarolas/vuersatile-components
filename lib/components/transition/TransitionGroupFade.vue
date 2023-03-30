<template lang="pug">
transition-group.transition-group-fade(name="fade", :tag="tag", @before-enter="willTransition", @enter="enter", @after-enter="endTransition", @before-leave="willTransition")
  slot
</template>

<script>
import TransitionFade from './TransitionFade.vue'

export default {
  mixins: [TransitionFade],
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    useAbsolutePosition: {
      type: Boolean,
      default: true
    },
    useParentContainer: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    willTransition (el) {
      if (!this.useAbsolutePosition) {
        return
      }

      this.preserveCurrentHeight(el)

      requestAnimationFrame(() => {
        el.classList.add('transition-absolute')
      })
    },
    enter (el) {
      this.preserveCurrentHeight(el)
    },
    endTransition (el) {
      if (!this.useAbsolutePosition) {
        return
      }

      requestAnimationFrame(() => {
        el.classList.remove('transition-absolute')
      })
    }
  }
}
</script>

<style lang="scss">
.transition-group-fade {
  height: auto;
  transition-duration: 0.25s;
  transition-property: height, min-height;
  transition-timing-function: ease;
  will-change: height, min-height;
}
</style>
