<template lang="pug">
.checkbox-base(
  :class="{ 'checkbox-base--error': invalid }",
  :data-field-name="fieldName"
)
  input.checkbox-base__input(
    type="checkbox",
    ref="checkbox",
    :id="label && fieldId",
    v-on="listeners",
    v-bind="attributes"
  )
  span.checkbox-base__check
    Icon.checkbox-base__icon(icon="check-solid", size="xs")
  label.checkbox-base__label(v-if="label", :for="fieldId") {{ label }}
</template>

<script>
import Icon from '@/components/info/Icon.vue'
import { nanoid } from 'nanoid/non-secure'

export default {
  components: {
    Icon
  },

  inheritAttrs: false,

  props: {
    label: {
      type: String,
      default: null
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      internalId: nanoid()
    }
  },

  computed: {
    fieldName () {
      return this.$attrs.name
    },

    fieldId () {
      return `${this.fieldName || 'checkbox'}_${this.internalId}`
    },

    listeners () {
      return {
        ...this.$listeners,

        input: (event) => {
          this.$emit('input', event.target.checked)
          this.$emit('input-native', event)
        },

        click: (event) => {
          this.$emit('click', event)
        }
      }
    },

    attributes () {
      const { value, name, disabled } = this.$attrs

      return { checked: value, name, disabled }
    }
  }
}
</script>

<style lang="scss">
.checkbox-base {
  display: flex;
  position: relative;

  &--error {
    .checkbox-base__check {
      border-color: $input-border-error;
    }
  }

  &__input {
    appearance: none;
    bottom: 0;
    cursor: pointer;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;

    &:checked {
      + .checkbox-base__check {
        background-color: $input-background-active;
        border-color: $input-border-active;

        .checkbox-base__icon {
          opacity: 1;
        }
      }
    }

    &:disabled {
      pointer-events: none;

      + .checkbox-base__check {
        background-color: $input-background-disabled;
        border-color: $input-border-disabled;
      }

      ~ .checkbox-base__label {
        color: $input-label-disabled;
      }
    }

    &:disabled:checked {
      + .checkbox-base__check {
        background-color: $input-background-active-disabled;
        border-color: $input-border-disabled;
      }
    }
  }

  &__check {
    background: $input-background;
    border: 1px solid $input-border;
    border-radius: 2px;
    flex-shrink: 0;
    height: 16px;
    overflow: hidden;
    position: relative;
    transition: all .3s ease;
    width: 16px;
  }

  &__icon {
    color: $input-icon-negative-active;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    transition: all .3s ease;
  }

  &__label {
    color: $input-text;
    display: block;
    margin-left: $space-2;
  }
}
</style>
