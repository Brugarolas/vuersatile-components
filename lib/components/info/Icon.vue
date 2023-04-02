<template lang="pug">
i.v-icon(:class="[iconClass, colorClass, iconSize]")
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
    size: {
      type: String,
      validator: (value) => !value || ['xs', 's', 'm', 'l'].includes(value),
      required: false,
      default: 's'
    },
    variant: {
      type: String,
      validator: (value) => !value || ['fa-solid', 'fa-regular', 'fa-light'].includes(value),
      required: false,
      default: 'fa-solid'
    }
  },
  computed: {
    iconClass () {
      return `${this.variant} fa-${this.icon}`
    },
    colorClass () {
      return this.colorType ? `v-icon--${this.colorType}` : ''
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
  display: inline-block;

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
