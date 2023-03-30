<template lang="pug">
transition(name="fade", @before-enter="willTransition", @after-enter="endTransition", @before-leave="willTransition")
  slot
</template>

<script>
export default {
  props: {
    useAbsolutePosition: {
      type: Boolean,
      default: false
    },
    useParentContainer: {
      type: Boolean,
      default: false
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
  .transition-absolute {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    will-change: opacity, transform;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
