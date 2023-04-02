<template lang="pug">
InputBase.input-number(
  :value="value",
  type="number",
  :name="name",
  :label="label",
  :icon="icon",
  :error="shouldShowErrors ? errorMessage : null",
  :placeholder="placeholder",
  :step="step",
  :min="min",
  :max="max",
  :disabled="disabled",
  @input="input",
  @change="change"
)
</template>

<script>
import { InputBase, ValidationsInputMixin } from './_internal'

export default {
  components: {
    InputBase
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
    /* Input mixin overrided methods */
    shouldSetInitialValue () {
      return Boolean(this.initialValue) || this.initialValue === 0
    },

    /* Own methods */
    input (event) {
      this.dirty = true

      this.convertInputToNumber(event.target.value)

      this.$emit('input', event.target.value)

      this.validate()
    },
    change () {
      this.dirty = true

      this.$emit('change', this.value)
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
