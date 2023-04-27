<template lang="pug">
button.button(:class="[typeClass, sizeClass, onlyIconClass, loadingClass]", :disabled="isDisabled", :type="button")
  Icon.button__icon(v-if="buttonIcon", :icon="buttonIcon", :iconVariant="iconVariant", :size="iconSize", :variant="variant")
  span.button__text(v-if="text") {{ text }}
</template>

<script>
import Icon from '@/components/info/Icon.vue'

const COMPONENT_CLASS = 'button'

export default {
  components: {
    Icon
  },

  props: {
    text: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconVariant: {
      type: String,
      default: 'fa-solid'
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'secondary-transparent', 'tertiary', 'tertiary-transparent', 'approve', 'reject'].includes(value)
    },
    size: {
      type: String,
      default: 'm',
      validator: (value) => ['xs', 's', 'm', 'l'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    button: {
      type: String,
      default: 'button',
      validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    variant: {
      type: String,
      validator: (value) => !value || ['fa-solid', 'fa-regular', 'fa-light'].includes(value),
      required: false,
      default: 'fa-solid'
    }
  },
  computed: {
    buttonIcon () {
      return this.loading ? 'spinner-third' : this.icon
    },
    typeClass () {
      return this.type ? `${COMPONENT_CLASS}--${this.type}` : ''
    },
    sizeClass () {
      return this.size ? `${COMPONENT_CLASS}--${this.size}` : ''
    },
    iconSize () {
      switch (this.size) {
        case 's':
        case 'xs':
          return 'xs'
        default:
          return 's'
      }
    },
    onlyIconClass () {
      return this.text ? '' : `${COMPONENT_CLASS}--only-icon`
    },
    loadingClass () {
      return this.loading ? `${COMPONENT_CLASS}--loading` : ''
    },
    isDisabled () {
      return this.loading || this.disabled
    }
  }
}
</script>

<style lang="scss">
.button {
  @include button-reset-browser-tap-styles;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  justify-content: center;
  position: relative;
  transition: color 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;

  &:after {
    border-radius: 4px;
    box-shadow: $box-shadow-2;
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    transition: opacity 0.25s ease;
    opacity: 0;
  }

  &:hover:after {
    opacity: 1;
  }

  &:disabled,
  &:disabled:hover {
    pointer-events: none;

    &:after {
      opacity: 0;
    }
  }

  &__text {
    font-weight: $fw-semibold;
    line-height: $line-height-small;
    margin-left: $space-2;
    white-space: nowrap;

    &:only-child {
      margin-left: 0;
    }
  }

  // Button types
  &--primary {
    background-color: $button-primary-background;
    color: $button-primary-text;

    &:hover {
      background-color: $button-primary-background-hover;
      color: $button-primary-text-hover;
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-primary-background-disabled;
      color: $button-primary-text-disabled;
    }
  }

  &--secondary {
    background-color: $button-secondary-background;
    border-color: $button-secondary-border;
    color: $button-secondary-text;

    &:hover {
      background-color: $button-secondary-background-hover;
      border-color: $button-secondary-border-hover;
      color: $button-secondary-text-hover;
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-secondary-background-disabled;
      border-color: $button-secondary-border-disabled;
      color: $button-secondary-text-disabled;
    }
  }

  &--secondary-transparent {
    background-color: $button-secondary-transparent-background;
    color: $button-secondary-text;

    &:hover {
      background-color: $button-secondary-transparent-background-hover;
      box-shadow: $box-shadow-0;
      color: $button-secondary-text-hover;

      &:after {
        opacity: 0;
      }
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-secondary-transparent-background-disabled;
      color: $button-secondary-text-disabled;
    }
  }

  &--tertiary {
    background-color: $button-tertiary-background;
    border-color: $button-tertiary-border;
    color: $button-tertiary-text;

    &:hover {
      background-color: $button-tertiary-background-hover;
      border-color: $button-tertiary-border-hover;
      color: $button-tertiary-text-hover;
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-tertiary-background-disabled;
      border-color: $button-tertiary-border-disabled;
      color: $button-tertiary-text-disabled;
    }
  }

  &--tertiary-transparent {
    background-color: $button-tertiary-transparent-background;
    color: $button-tertiary-transparent-text;

    &:hover {
      background-color: $button-tertiary-transparent-background-hover;
      box-shadow: $box-shadow-0;
      color: $button-tertiary-transparent-text-hover;

      &:after {
        opacity: 0;
      }
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-tertiary-transparent-background-disabled;
      color: $button-tertiary-transparent-text-disabled;
    }
  }

  &--approve {
    background-color: $button-approve-background;
    color: $button-approve-text;

    &:hover {
      background-color: $button-approve-background-hover;
      color: $button-approve-text-hover;
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-approve-background-disabled;
      color: $button-approve-text-disabled;
    }
  }

  &--reject {
    background-color: $button-reject-background;
    border-color: $button-reject-border;
    color: $button-reject-text;

    &:hover {
      background-color: $button-reject-background-hover;
      border-color: $button-reject-border-hover;
      color: $button-reject-text-hover;
    }

    &:disabled,
    &:disabled:hover {
      background-color: $button-reject-background-disabled;
      border-color: $button-reject-border-disabled;
      color: $button-reject-text-disabled;
    }
  }

  // Loading
  &--loading &__icon {
    animation: spin-ac 2s linear infinite;
  }

  // Button sizes
  &--xs {
    font-size: $font-size-12;
    height: 16px;
    padding: 0 $space-2;

    &.button--only-icon {
      padding: 0;
      width: 16px;
    }
  }

  &--s {
    font-size: $font-size-12;
    height: 24px;
    padding: 0 $space-2;

    &.button--only-icon {
      padding: 0;
      width: 24px;
    }
  }

  &--m {
    font-size: $font-size-12;
    height: 32px;
    padding: 0 $space-4;

    &.button--only-icon {
      padding: 0;
      width: 32px;
    }
  }

  &--l {
    font-size: $font-size-16;
    height: 40px;
    padding: 0 $space-4;

    &.button--only-icon {
      padding: 0;
      width: 40px;
    }
  }
}
</style>
