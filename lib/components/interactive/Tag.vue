<template lang="pug">
.tag(:class="[colorClass, sizeClass]", @click="$emit('click', $event)")
    Icon.tag__icon(v-if="TagIcon", :icon="TagIcon" :variant="iconVariant")
    span.tag__text {{ text }}
    span.tag__number(v-if="hasNumber") {{ number }}
    button.tag__button(type="button", v-if="showCloseButton", @click.prevent="$emit('close', $event)")
      Icon(icon="xmark")
</template>

<script>
import Icon from '@/components/info/Icon.vue'

const COMPONENT_CLASS = 'tag'

export default {
  components: {
    Icon
  },

  props: {
    color: {
      type: String,
      validator: (value) => !value || [
        'amber',
        'orange',
        'red',
        'pink',
        'purple',
        'blue',
        'turquoise',
        'green',
        'lime',
        'greyscale'
      ].includes(value),
      default: 'greyscale'
    },
    size: {
      type: String,
      default: 's',
      validator: (value) => ['s', 'm'].includes(value)
    },
    icon: {
      type: String,
      default: null
    },
    iconVariant: {
      type: String,
      default: 'vuersatile'
    },
    text: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      default: null
    },
    showCloseButton: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    colorClass () {
      return `tag--${this.color}`
    },
    sizeClass () {
      return this.size ? `${COMPONENT_CLASS}--${this.size}` : ''
    },
    TagIcon () {
      return this.icon
    },
    hasNumber () {
      // Check for falsy values to allow them to render (eg. 0)
      return this.number !== undefined && this.number !== null
    }
  }
}
</script>

<style lang="scss">
.tag {
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex-shrink: 0;
  line-height: $line-height-small;

  // Tag colors
  &--greyscale {
    background-color: $greyscale-color-10;
    color: $greyscale-color-80;

    .tag__number {
      background-color: $greyscale-color-80;
      color: $greyscale-color-10;
    }

    .tag__button {
      &:hover {
        background-color: $greyscale-color-20;
      }
    }
  }

  &--green {
    background-color: $green-color-20;
    color: $green-color-140;

    .tag__number {
      background-color: $green-color-140;
      color: $green-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $green-color-30;
      }
    }
  }

  &--red {
    background-color: $red-color-20;
    color: $red-color-140;

    .tag__number {
      background-color: $red-color-140;
      color: $red-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $red-color-30;
      }
    }
  }

  &--amber {
    background-color: $amber-color-20;
    color: $amber-color-140;

    .tag__number {
      background-color: $amber-color-140;
      color: $amber-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $amber-color-30;
      }
    }
  }

  &--orange {
    background-color: $orange-color-20;
    color: $orange-color-140;

    .tag__number {
      background-color: $orange-color-140;
      color: $orange-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $orange-color-30;
      }
    }
  }

  &--pink {
    background-color: $pink-color-20;
    color: $pink-color-140;

    .tag__number {
      background-color: $pink-color-140;
      color: $pink-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $pink-color-30;
      }
    }
  }

  &--purple {
    background-color: $purple-color-20;
    color: $purple-color-140;

    .tag__number {
      background-color: $purple-color-140;
      color: $purple-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $purple-color-30;
      }
    }
  }

  &--blue {
    background-color: $blue-color-20;
    color: $blue-color-140;

    .tag__number {
      background-color: $blue-color-140;
      color: $blue-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $blue-color-30;
      }
    }
  }

  &--turquoise {
    background-color: $turquoise-color-20;
    color: $turquoise-color-140;

    .tag__number {
      background-color: $turquoise-color-140;
      color: $turquoise-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $turquoise-color-30;
      }
    }
  }

  &--lime {
    background-color: $lime-color-20;
    color: $lime-color-140;

    .tag__number {
      background-color: $lime-color-140;
      color: $lime-color-20;
    }

    .tag__button {
      &:hover {
        background-color: $lime-color-30;
      }
    }
  }

  // Tag sizes
  &--s {
    font-size: $font-size-12;
    height: 24px;

    .tag__button {
      width: 32px;
    }
  }

  &--m {
    height: 32px;

    .tag__button {
      width: 32px;
    }
  }

  // Tag Icon
  &__icon {
    margin-left: $space-2;
  }

  // Tag Text
  &__text {
    font-weight: $fw-semibold;
    margin: 0 $space-2;
    white-space: nowrap;
  }

  // Tag Number
  &__number {
    align-items: center;
    border-radius: 16px;
    display: flex;
    font-size: $font-size-12;
    font-weight: $fw-semibold;
    height: 18px;
    justify-content: center;
    margin-right: $space-2;
    min-width: 18px;
    padding: 0 $space-1;
  }

  // Tag Button
  &__button {
    @include button-reset-browser-tap-styles;
    @include button-reset-styles;
    align-items: center;
    border-radius: 4px;
    color: inherit;
    display: flex;
    height: 100%;
    justify-content: center;
  }
}
</style>
