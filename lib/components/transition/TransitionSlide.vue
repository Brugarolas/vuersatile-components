<template lang="pug">
transition(:name="transitionName", @before-enter="willTransition", @after-enter="endTransition", @before-leave="willTransition")
  slot
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right',
      validator: (value) => ['right', 'left'].includes(value)
    },
    useAbsolutePosition: {
      type: Boolean,
      default: false
    },
    useParentContainer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    transitionName () {
      return `slide-${this.direction}`
    }
  },
  methods: {
    preserveCurrentHeight (el) {
      const container = this.useParentContainer ? el.parentElement : el
      const height = el.clientHeight

      if (height && container) {
        container.style.minHeight = `${height}px`
      }
    },
    willTransition (el) {
      if (!this.useAbsolutePosition) {
        return
      }

      this.preserveCurrentHeight(el)

      el.classList.add('transition-absolute')
    },
    endTransition (el) {
      if (!this.useAbsolutePosition) {
        return
      }

      el.classList.remove('transition-absolute')
    }
  }
}
</script>

<style lang="scss">
// Using #body so selector has higher specificity and it can override element's style
#body {
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.25s;
    transition-property: opacity, transform;
    transition-timing-function: ease;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    transform: translate(2%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    transform: translate(-2%, 0);
  }
}
</style>
