<template lang="pug">
InputBase.input-text(
  :value="value",
  :name="name",
  :label="label",
  :icon="icon",
  :iconVariant="iconVariant",
  iconSize="s",
  :error="realError",
  :placeholder="placeholder",
  :autocomplete="autocomplete",
  :pattern="pattern",
  :disabled="disabled",
  :allow-read-only="readOnly",
  :type="inputType",
  @input="input",
  @change="change",
  @keydown="enterPressed"
)
</template>

<script>
import { InputBase, ValidationsInputMixin } from './_internal'
import { DateUtils } from '@/mixins'

export default {
  components: {
    InputBase
  },
  mixins: [ValidationsInputMixin, DateUtils],

  props: {
    initialValue: {
      type: [String, Number],
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    pattern: {
      type: String,
      default: null
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
    customError: {
      type: String,
      default: null
    },
    inputType: {
      type: String,
      default: 'text',
      validator: (value) => ['text', 'tel', 'email', 'number'].includes(value)
    },
    customType: {
      type: String,
      default: null
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: ''
    }
  },

  computed: {
    isValid () {
      if (this.disabled) {
        return true
      }

      if (this.customError) {
        return false
      }

      return this.validation ? this.validation.isValid : true
    },
    realError () {
      if (this.customError) {
        return this.customError
      }

      return this.shouldShowErrors ? this.errorMessage : null
    }
  },

  methods: {
    input (event) {
      this.value = this.formatInput(event.target.value)

      this.$emit('inputField', this.value)

      this.validate()
    },
    change () {
      this.dirty = true

      this.$emit('changeField', this.value)
    },
    enterPressed (event) {
      this.keyPressed = event.keyCode
      this.keyPressed === 13 && this.$emit('enterPressed', this.value)
    },
    setFocus (focus) {
      if (this.disabled) {
        return
      }

      this.focus = focus
    },
    formatInput (input) {
      // Backspace and delete keys
      const deleteKeys = [8, 46]

      switch (this.customType) {
        case 'datetext':
          if (deleteKeys.includes(this.keyPressed)) return input
          return this.formatDate(input)
        default:
          return input
      }
    }
  }
}
</script>
