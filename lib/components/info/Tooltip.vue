<template lang="pug">
.tooltip
    .tooltip__reference(
      ref="convstooltip",
      @mouseleave="mouseleavex",
      @mouseenter="mouseenterx",
      @click="toggleVisible"
    )
      transition(name="tooltip-fade")
        .tooltip__wrapper(
          v-show="tooltipVisible",
          ref="vstooltip",
          :class="tooltipWrapperClasses",
          :style="style"
        )
          h4.tooltip__title(v-if="title") {{ title }}
          span(v-html="text")
          img.tooltip__image(v-if="img" :src="img")
      slot
</template>

<script>
import Utils from '@/utils'

const PADDING = 8
const MAX_TOOLTIP_WIDTH = 220

export default {
  name: 'Tooltip',
  props: {
    title: {
      default: null,
      type: [String, Number]
    },
    text: {
      default: null,
      type: [String, Number]
    },
    img: {
      default: null,
      type: String
    },
    position: {
      default: 'top',
      type: String,
      validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value)
    },
    delay: {
      default: '0s',
      type: [Number, String]
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    openOnClick: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    cords: {},
    active: false,
    clicked: false,
    widthx: 'auto',
    positionx: null,
    noneAfter: false,
    mountedTooltip: false
  }),
  computed: {
    tooltipWrapperClasses () {
      const classes = [`tooltip__wrapper--${this.positionx || this.position}`]

      if (this.noneAfter) {
        classes.push('after-none')
      }

      return classes
    },

    style () {
      return {
        left: this.cords.left,
        top: this.cords.top,
        transitionDelay: this.active ? this.delay : '0s',
        width: this.widthx
      }
    },

    tooltipVisible () {
      return this.active || this.clicked
    }
  },

  beforeUnmount () {
    this.active = false
    this.clicked = false

    if (this.mountedTooltip) {
      Utils.removeBody(this.$refs.vstooltip)
    }
  },

  methods: {
    mouseenterx () {
      if (!this.showTooltip) {
        return
      }

      this.active = true

      this.$nextTick(() => {
        Utils.insertBody(this.$refs.vstooltip)
        this.mountedTooltip = true

        requestAnimationFrame(() => {
          this.changePosition(this.$refs.convstooltip, this.$refs.vstooltip)
        })
      })
    },
    mouseleavex () {
      this.active = false
    },

    toggleVisible () {
      if (!this.showTooltip || !this.openOnClick) {
        return
      }

      this.clicked = !this.clicked
    },

    changePosition (elxEvent, tooltipElx) {
      this.noneAfter = false
      this.positionx = null

      const elx = elxEvent.closest('.tooltip__reference')

      // (Optimization) Calculate element bounding client rect once - don't trigger reflow
      // Layout trashing: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
      const el = {
        clientRect: elx.getBoundingClientRect(),
        clientHeight: elx.clientHeight,
        clientWidth: elx.clientWidth
      }
      const tooltip = {
        clientHeight: tooltipElx.clientHeight,
        clientWidth: tooltipElx.clientWidth
      }

      // Calculate top and left position of tooltip
      const { leftx, topx } = this.calculateCoordinates(el, tooltip)

      // Set calculated coordinates and width
      this.cords = {
        left: `${leftx}px`,
        top: `${topx}px`,
        width: `${el.clientWidth}px`
      }

      // Change tooltip width if too close to window edge
      this.changeMaxTooltipWidth(el)
    },

    calculateCoordinates (el, tooltip) {
      const scrollTopx = window.pageYOffset || document.documentElement.scrollTop
      const innerWidthx = window.innerWidth

      const coordinatesByPosition = {
        top: () => ({
          topx: el.clientRect.top + scrollTopx - tooltip.clientHeight - PADDING,
          leftx: el.clientRect.left - tooltip.clientWidth / 2 + el.clientWidth / 2
        }),

        bottom: () => ({
          topx: el.clientRect.top + scrollTopx + el.clientHeight + PADDING,
          leftx: el.clientRect.left - tooltip.clientWidth / 2 + el.clientWidth / 2
        }),

        left: () => {
          const leftx = el.clientRect.left - tooltip.clientWidth - PADDING
          const doesNotFitInViewport = Math.sign(leftx) === -1

          if (doesNotFitInViewport) {
            this.positionx = 'bottom'
            this.noneAfter = true

            return {
              topx: el.clientRect.top + scrollTopx + el.clientHeight + PADDING,
              leftx: el.clientRect.left
            }
          }

          return {
            topx: el.clientRect.top + scrollTopx + (el.clientHeight / 2) - (tooltip.clientHeight / 2),
            leftx
          }
        },

        right: () => {
          const leftx = el.clientRect.left + el.clientWidth + PADDING
          const doesNotFitInViewport = innerWidthx - (leftx + tooltip.clientWidth) <= 20

          if (doesNotFitInViewport) {
            this.positionx = 'bottom'
            this.noneAfter = true

            return {
              topx: el.clientRect.top + scrollTopx + el.clientHeight + PADDING,
              leftx: el.clientRect.left - tooltip.clientWidth / 2 - 10
            }
          }

          return {
            topx: el.clientRect.top + scrollTopx + (el.clientHeight / 2) - (tooltip.clientHeight / 2),
            leftx
          }
        }
      }

      return coordinatesByPosition[this.position]()
    },

    changeMaxTooltipWidth (el) {
      if (this.widthx !== 'auto' || (this.position !== 'top' && this.position !== 'bottom')) {
        return
      }

      // Available width depends on wether tooltip element is close to the viewport edge
      const availableTooltipWidth = (window.innerWidth - Math.round(el.clientRect.left) - Math.round(el.clientWidth / 2)) * 2

      if (availableTooltipWidth < MAX_TOOLTIP_WIDTH) {
        this.widthx = `${availableTooltipWidth}px`

        this.$nextTick(() => {
          this.changePosition(this.$refs.convstooltip, this.$refs.vstooltip)
        })
      }
    }
  }
}
</script>

<style lang="scss">
.tooltip {
  display: inline-block;

  &__reference {
    display: inline-block;
  }
}
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity .2s, transform .2s;
}

.tooltip-fade-enter,
.tooltip-fade-leave-to {
  opacity: 0;

  &.tooltip__wrapper--top {
    transform: translate(0, -10px);
  }

  &.tooltip__wrapper--bottom {
    transform: translate(0, 10px);
  }

  &.tooltip__wrapper--left {
    transform: translate(-10px, 0%);
  }

  &.tooltip__wrapper--right {
    transform: translate(10px, 0%);
  }
}

.tooltip__wrapper {
  background: $greyscale-color-90;
  border-radius: 6px;
  color: $text-negative-color;
  display: block;
  font-size: $font-size-12;
  height: auto;
  left: 0px;
  max-width: 220px;
  padding: $space-1 $space-2;
  position: absolute;
  top: 0px;
  z-index: 53000;

  &:after {
    content: '';
    background: inherit;
    display: block;
    height: 8px;
    position: absolute;
    width: 8px;
  }

  &.tooltip__wrapper--top {
    &:after {
      bottom: -6px;
      left: 50%;
      transform: rotate(45deg) translate(-50%);
    }
  }

  &.tooltip__wrapper--bottom {
    &:after {
      left: 50%;
      top: -1px;
      transform: rotate(45deg) translate(-50%);
    }
  }

  &.tooltip__wrapper--left {
    &:after {
      right: -1px;
      top: 50%;
      transform: rotate(45deg) translate(0, -50%);
    }
  }

  &.tooltip__wrapper--right {
    &:after {
      left: -6px;
      top: 50%;
      transform: rotate(45deg) translate(0, -50%);
    }
  }

  &.after-none {
    &:after {
      display: none;
    }
  }
}

.tooltip {
  &__title {
    border-bottom: 1px solid $greyscale-color-0;
    margin-bottom: $space-2;
    padding-bottom: $space-2;
    text-align: center;
    width: 100%;
  }

  &__image {
    max-width: 200px;
    width: 100%;
  }
}
</style>
