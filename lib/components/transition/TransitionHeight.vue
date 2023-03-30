<template lang="pug">
transition(:css="false", :duration="duration", @before-enter="beforeEnter", @enter="enter", @after-enter="afterEnter", @before-leave="beforeLeave", @leave="leave")
    slot
</template>

<script>
import { FunctionUtils } from '@/mixins'

const SMALL_DELAY = 5

export default {
  mixins: [FunctionUtils],
  props: {
    // Animation duration in ms
    duration: {
      type: Number,
      default: 250
    },

    // Set 'static' position to element - useful to allow overflow of 'absolute' elements
    usePositionStatic: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.emitEnd = this.debounce(() => {
      this.$emit('end')
    })
  },
  methods: {
    beforeEnter (el) {
      if (this.usePositionStatic) {
        el.style.position = 'static'
      }

      el.style.height = 0
      el.style.opacity = 0
    },
    enter (el, done) {
      const finishAnimation = this.once(done)

      el.addEventListener('transitionend', finishAnimation, false)

      const h = el.scrollHeight
      el.style.height = h + 'px'
      el.style.opacity = 1

      setTimeout(finishAnimation, this.duration + SMALL_DELAY)
    },
    afterEnter (el) {
      el.style.removeProperty('height')
      el.style.removeProperty('position')

      this.emitEnd()
    },
    beforeLeave (el) {
      if (this.usePositionStatic) {
        el.style.position = 'static'
      }

      this.$nextTick(() => {
        const h = el.getBoundingClientRect().height
        el.style.height = h + 'px'
        el.style.opacity = 1
      })
    },
    leave (el, done) {
      const finishAnimation = this.once(done)

      el.addEventListener('transitionend', finishAnimation, false)

      setTimeout(() => {
        el.style.height = 0
        el.style.opacity = 0
        el.style.removeProperty('position')
      }, SMALL_DELAY)

      setTimeout(finishAnimation, this.duration + SMALL_DELAY)
    }
  }
}
</script>
