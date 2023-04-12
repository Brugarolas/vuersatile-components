<template lang="pug">
i.v-icon(:class="[iconClass, colorClass, iconAnimation, iconSize]")
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    colorType: {
      type: String,
      validator: (value) => !value || ['primary', 'brand', 'negative', 'greyscale', 'success', 'danger', 'warning', 'info', 'disabled'].includes(value),
      required: false,
      default: ''
    },
    animation: {
      type: String,
      validator: (value) => !value || ['beat', 'beat-fade', 'bounce', 'fade', 'flip', 'shake', 'spin', 'spin-reverse', 'spin-pulse'].includes(value),
      required: false,
      default: ''
    },
    size: {
      type: String,
      validator: (value) => !value || ['xs', 's', 'm', 'l'].includes(value),
      required: false,
      default: 's'
    },
    variant: {
      type: String,
      validator: (value) => !value || ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'].includes(value),
      required: false,
      default: 'solid'
    }
  },
  computed: {
    iconClass () {
      return `fa-${this.variant} fa-${this.icon}`
    },
    colorClass () {
      return this.colorType ? `v-icon--${this.colorType}` : ''
    },
    iconAnimation () {
      return this.animation ? `fa-${this.animation}` : ''
    },
    iconSize () {
      return this.size ? `v-icon--${this.size}` : ''
    }
  }
}
</script>

<style lang="scss">
.v-icon {
  @include vuersatile-icons;

  // Icon color
  &--primary {
    color: $primary-color-100;
  }

  &--negative {
    color: $greyscale-color-0;
  }

  &--greyscale {
    color: $greyscale-color-70;
  }

  &--success {
    color: $success-color-100;
  }

  &--danger {
    color: $error-color-100;
  }

  &--warning {
    color: $warning-color-100;
  }

  &--info {
    color: $info-color-100;
  }

  &--disabled {
    color: $disabled-color;
    pointer-events: none;
  }

  // Icon Size
  &--xs {
    font-size: $font-size-12;
  }

  &--s {
    font-size: $font-size-16;
  }

  &--m {
    font-size: $font-size-24;
  }

  &--l {
    font-size: $font-size-32;
  }
}
</style>
