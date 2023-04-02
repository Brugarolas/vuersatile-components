<template lang="pug">
.input-base(
  :data-field-name="fieldName",
  :class="[statusClass, disabledClass, focusClass]"
)
  label.input-base__label(v-if="label", :for="fieldId") {{ label }}
    
  .input-base__wrapper
    textarea.input-base__input(
      v-bind="attributes",
      :value="value",
      ref="input",
      :id="label && fieldId",
      v-on="listeners"
    )

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
      required: true
    },
    label: {
      type: String,
      default: null
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
    isTextarea () {
      return this.$attrs.type === 'textarea'
    },
    hasErrorMessage () {
      return this.error && typeof this.error === 'string'
    },
    listeners () {
      return {
        focusin: () => {
          this.setFocus(true)
        },

        focusout: () => {
          this.setFocus(false)
        }
      }
    },

    attributes () {
      const { name, placeholder, disabled, cols, rows, maxlength } = this.$attrs
    
      return { name, placeholder, disabled, cols, rows, maxlength }
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
