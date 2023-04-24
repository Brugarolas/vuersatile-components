<template lang="pug">
.input-number
  InputBase(
    :value="value",
    type="number",
    :name="name",
    :label="label",
    :icon="icon",
    :iconVariant="iconVariant",
    iconSize="s",
    :error="shouldShowErrors ? errorMessage : null",
    :placeholder="placeholder",
    :step="step",
    :min="min",
    :max="max",
    :disabled="disabled",
    @input="input",
    @change="change"
  )
  Icon.input-number__icon.input-number__icon--left(v-if="showSumClasses", icon="minus", @click="minus")
  Icon.input-number__icon.input-number__icon--right(v-if="showSumClasses", icon="plus", @click="plus")
</template>

<script>
import { InputBase, ValidationsInputMixin } from './_internal'
import Icon from '@/components/info/Icon.vue'

export default {
  components: {
    InputBase,
    Icon
  },
  mixins: [ValidationsInputMixin],

  props: {
    initialValue: {
      type: [String, Number],
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
    placeholder: {
      type: String,
      default: null
    },
    step: {
      type: [String, Number],
      default: 'any'
    },
    min: {
      type: Number,
      default: null
    },
    max: {
      type: Number,
      default: null
    }
  },

  computed: {
    showSumClasses () {
      return !this.icon;
    },
    hasMin () {
      return Boolean(this.min) || this.min === 0
    },
    hasMax () {
      return Boolean(this.max) || this.max === 0
    },

    /* Validations mixin overrided properties */
    realValidations () {
      if (!this.validations) {
        return []
      }

      // Change message of not-empty validation as it looks weird when input is invalid/empty
      // Ej: if you write "12,1,2" as it is not a valid number, this.value will be ""
      // and default not-empty message will appear
      const validations = this.validations.map((validation) => {
        if (validation === 'not-empty') {
          return { name: validation, errorMessage: 'FORM.ERROR.NOT_EMPTY_NUMBER' }
        }

        if (validation.name === 'not-empty') {
          return { ...validation, errorMessage: 'FORM.ERROR.NOT_EMPTY_NUMBER' }
        }

        return validation
      })

      return validations
    }
  },

  created () {
    this.convertInputToNumber()
    this.validate()
  },

  methods: {
    plus () {
      const quantity = this.step === 'any' ? 1 : this.step;

      this.value = this.hasMax ? Math.min(this.max, this.value + quantity) : this.value + quantity
    },
    minus () {
      const quantity = this.step === 'any' ? 1 : this.step;

      this.value = this.hasMin ? Math.max(this.min, this.value - quantity) : this.value - quantity
    },

    /* Input mixin overrided methods */
    shouldSetInitialValue () {
      return Boolean(this.initialValue) || this.initialValue === 0
    },

    /* Own methods */
    input (event) {
      this.dirty = true

      this.convertInputToNumber(event.target.value)

      this.$emit('inputField', event.target.value)

      this.validate()
    },
    change () {
      this.dirty = true

      this.$emit('changeField', this.value)
    },

    convertInputToNumber (newValue) {
      const value = newValue || this.value

      // If value is not valid or not a string, do nothing
      if (!value || typeof value !== 'string') {
        this.value = value

        return
      }

      // Convert string value to number if possible
      const numberValue = Number(value.replace(',', '.'))

      if (!isNaN(numberValue)) {
        this.value = numberValue
      }
    }
  }
}
</script>

<style lang="scss">
.input-number {
  position: relative;

  .input-base__input {
    -moz-appearance: textfield;
  }

  .input-number__icon {
    position: absolute;
    top: 33px;
    cursor: pointer;
    transition: color .3 ease-in-out;
    color: $greyscale-color-30;

    &:hover {
      color: $greyscale-color-90;
    }

    &--left {
      right: 25px;
    }

    &--right {
      right: 8px;
    }
  }
}
</style>
