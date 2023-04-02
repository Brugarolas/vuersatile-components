<template lang="pug">
.tooltip-info
  Tooltip(:text="text")
    Icon.tooltip-info__icon(icon="circle-info", :class="colorClass")
</template>

<script>
import Tooltip from './Tooltip.vue'
import Icon from './Icon.vue'
import { ColorNames } from '@/constants'

export default {
  name: 'TooltipInfo',

  components: {
    Tooltip,
    Icon
  },

  props: {
    text: {
      required: true,
      type: String
    },
    color: {
      type: String,
      default: null
    }
  },

  computed: {
    colorSlug () {
      if (!this.color) {
        return ''
      }

      return this.color.replace(/\s+/g, '').toUpperCase()
    },

    colorClass () {
      if (!this.color) return undefined

      const colorName = ColorNames[this.colorSlug]
      return colorName ? `tooltip-info__icon--${colorName}` : undefined
    }
  }
}
</script>
<style lang="scss">
.tooltip-info {
  display: flex;
  align-items: center;
  color: $greyscale-color-90;

  &__icon {
    &--green {
      color: $lime-color-110;
    }

    &--blue {
      color: $blue-color-100;
    }

    &--white {
      color: $greyscale-color-0;
    }

    &--black {
      color: $greyscale-color-100;
    }

    &--red {
      color: $red-color-100;
    }

    &--gray {
      color: $greyscale-color-20;
    }

    &--yellow {
      color: $amber-color-100;
    }

    &--violet {
      color: $pink-color-130;
    }

    &--darkblue {
      color: $blue-color-140;
    }

    &--brown {
      color: $amber-color-30;
    }

    &--silver-grey {
      color: $greyscale-color-30;
    }

    &--orange {
      color: $orange-color-100;
    }
  }
}
</style>
