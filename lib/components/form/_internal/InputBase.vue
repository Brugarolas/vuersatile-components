<template lang="pug">
.input-base(
    :data-field-name="fieldName",
    :class="[statusClass, disabledClass, focusClass]")
    label.input-base__label(v-if="label", :for="fieldId") {{ label }}

    .input-base__wrapper
      Button.input-base__left-button(v-if="leftButtonProps", :disabled="leftButtonProps.disabled" :type="leftButtonProps.type", :size="leftButtonProps.size", :icon="leftButtonProps.icon", :variant="leftButtonProps.variant", :colorType="leftButtonProps.colorType" @click="_ => leftButtonProps.clickHandler()")

      input.input-base__input(
        v-bind="attributes",
        :value="value",
        ref="input",
        :readonly="allowReadOnly ? 'readonly' : null"
        :id="label && fieldId",
        v-on="listeners"
      )
      Icon.input-base__right-icon(v-if="icon", :icon="icon", :variant="iconVariant", :size="iconSize", @click="clickIconHandler")

      Button.input-base__right-button(v-if="rightButtonProps", :disabled="rightButtonProps.disabled" :type="rightButtonProps.type", :size="rightButtonProps.size", :icon="rightButtonProps.icon", :variant="rightButtonProps.variant", :colorType="rightButtonProps.colorType" @click="_ => rightButtonProps.clickHandler()")

    TransitionHeight
      span.input-base__error-message(v-show="hasErrorMessage") {{ error }}
</template>

<script>
import { nanoid } from 'nanoid/non-secure'
import { Button } from '@/components/interactive'
import Icon from '@/components/info/Icon.vue'
import { TransitionHeight } from '@/components/transition'

const COMPONENT_CLASS = 'input-base'

export default {
  components: {
    Icon,
    Button,
    TransitionHeight
  },

  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    leftButtonProps: {
      type: Object,
      default: () => {}
    },
    rightButtonProps: {
      type: Object,
      default: () => {}
    },
    icon: {
      type: String,
      default: null
    },
    iconVariant: {
      type: String,
      validator: (value) => !value || ['solid', 'regular', 'light', 'thin', 'duotone', 'brands'].includes(value),
      default: 'solid'
    },
    iconSize: {
      type: String,
      default: 's'
    },
    error: {
      type: [String, Boolean],
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowReadOnly: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      focus: false,
      internalId: nanoid()
    }
  },

  computed: {
    fieldName () {
      return this.$attrs.name
    },
    fieldId () {
      return `${this.fieldName || 'input'}_${this.internalId}`
    },
    hasErrorMessage () {
      return this.error && typeof this.error === 'string'
    },

    listeners () {
      return {
        focusin: () => {
          if (this.allowReadOnly) {
            return
          }

          this.setFocus(true)
        },

        focusout: () => {
          this.setFocus(false)
        }
      }
    },

    attributes () {
      const { type, name, placeholder, disabled, autocomplete, pattern, step, min, max } = this.$attrs

      return { type, name, placeholder, disabled, autocomplete, pattern, step, min, max }
    },

    status () {
      return this.error ? 'error' : null
    },
    statusClass () {
      return this.status ? `${COMPONENT_CLASS}--${this.status}` : null
    },
    disabledClass () {
      return this.disabled ? `${COMPONENT_CLASS}--disabled` : null
    },
    focusClass () {
      return this.focus ? `${COMPONENT_CLASS}--active` : null
    }
  },

  methods: {
    setFocus (focus) {
      if (this.disabled) {
        return
      }

      this.focus = focus
    },
    clickIconHandler (event) {
      this.$refs.input.focus()

      this.$emit('iconClick', event)
    }
  }
}
</script>

<style lang="scss">
.input-base {
  &__label {
    @include text-overflow-ellipsis;
    color: $input-text;
    display: block;
    font-weight: $fw-semibold;
    margin-bottom: $space-2;
  }

  &__wrapper {
    align-items: center;
    background-color: $input-background;
    border: 1px solid $input-border;
    border-radius: $input-border-radius;
    display: flex;
    height: 32px;
    overflow: hidden;
    transition: color .3s ease, border-color .3s ease;
    width: 100%;
  }

  &__left-button {
    margin-left: $space-2;
  }

  &__right-button {
    margin-right: $space-2;
  }

  &__right-icon {
    align-items: center;
    color: $input-icon;
    cursor: pointer;
    display: inline-flex;
    height: 100%;
    padding-right: $space-2;
    transition: all .3s ease;
  }

  &__input {
    @include text-overflow-ellipsis;
    color: $input-text;
    height: 100%;
    padding: 0 $space-2;
    transition: color .3s ease;
    width: 100%;

    &::placeholder {
      color: $input-placeholder;
    }
  }

  &__error-message {
    @include transition-height;
    color: $input-text-error;
    display: block;
    font-size: $font-size-12;
    margin-top: $space-2;
  }

  // Input Active
  &--active {
    .input-base__wrapper {
      border-color: $input-border-active;
    }

    .input-base__right-icon {
      color: $input-icon-active;
    }
  }

  // Input Error
  &--error {
    .input-base__wrapper {
      border-color: $input-border-error;
    }

    .input-base__right-icon {
      color: $input-icon-error;
    }
  }

  // Input Disabled
  &--disabled {
    .input-base__wrapper {
      background-color: $input-background-disabled;
      border-color: $input-border-disabled;
    }

    .input-base__right-icon {
      color: $input-icon-disabled;
      pointer-events: none;
    }

    .input-base__input {
      background-color: $input-background-disabled;
      color: $input-text-disabled;
      pointer-events: none;
    }
  }
}
</style>
