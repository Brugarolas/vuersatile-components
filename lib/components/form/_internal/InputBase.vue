<template lang="pug">
.input-base(
  :data-field-name="fieldName",
  :class="[statusClass, disabledClass, focusClass, ...classes]"
)
  label.input-base__label(v-if="label", :for="fieldId") {{ label }}

  .input-base__wrapper(:class="showFirstIcon ? 'input-base--first-icon' : 'input-base--second-icon'")
    Button.input-base__left-button(v-if="leftButtonProps", :disabled="leftButtonProps.disabled" :type="leftButtonProps.type", :size="leftButtonProps.size", :icon="leftButtonProps.icon", :variant="leftButtonProps.variant", :colorType="leftButtonProps.colorType" @click="_ => leftButtonProps.clickHandler()")

    input.input-base__input(
      ref="input",
      :readonly="allowReadOnly ? 'readonly' : null"
      :id="label && fieldId",
      v-model="_value",
      v-on="listeners",
      v-bind="attributes"
    )

    Icon.input-base__right-icon.icon-base--first(v-if="icon", :icon="icon", :iconVariant="iconVariant", :size="iconSize", @click="clickIconHandler")
    Icon.input-base__right-icon.icon-base--second(v-if="secondIcon", :icon="secondIcon", :iconVariant="iconVariant", :size="iconSize", @click="clickIconHandler")

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

  inheritAttrs: false,

  props: {
    classes: {
      type: Array,
      required: false,
      default: () => []
    },
    initialValue: {
      type: [Object, String, Number, Boolean],
      required: false
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
    secondIcon: {
      type: String,
      default: null,
    },
    showFirstIcon: {
      type: Boolean,
      default: true
    },
    iconVariant: {
      type: String,
      default: 'fa-solid'
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
      _value: null,
      focus: false,
      internalId: nanoid()
    }
  },

  created () {
    if (Boolean(this.initialValue)) {
      this._value = this.initialValue
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
        input: (event) => {
          this.$emit('input', event.target.value)
          this.$emit('input-native', event)
        },

        change: (event) => {
          this.$emit('change', event.target.value)
          this.$emit('change-native', event)
        },

        focusin: (event) => {
          this.$emit('focusin', event)
          this.setFocus(true)
        },

        focusout: (event) => {
          this.$emit('focusout', event)
          this.setFocus(false)
        },

        keyup: (event) => {
          this.$emit('keyup', event.target.value)
          this.$emit('keyup-native', event)
        },

        keydown: (event) => {
          this.$emit('keydown', event.target.value)
          this.$emit('keydown-native', event)
        },

        resize: (event) => {
          this.$emit('resize', event);
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
    clickIconHandler () {
      this.$refs.input.focus()
      this.$emit('iconClick')
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

  .input-base--first-icon {
    .icon-base--second {
      display: none;
    }
  }

  .input-base--second-icon {
    .icon-base--first {
      display: none;
    }
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
