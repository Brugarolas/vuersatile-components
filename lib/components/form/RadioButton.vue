<template lang="pug">
.radiobutton(:class="{ 'radiobutton--error': error }")
  input.radiobutton__input(
    type="radio"
    :ref="`radio_${value}`"
    :name="name"
    :id="`${name}_id_${value}`"
    :value="value"
    :checked="checked"
    :disabled="disabled"
    @click="radioClicked"
    @change="radioChanged"
  )
  span.radiobutton__check
  label.radiobutton__label(v-if="label" :for="`${name}_id_${value}`") {{ label }}
  component(
    v-if="inputForm"
    :is="inputForm.inputType || 'InputText'"
    :ref="`radioForm_${value}`"
    :name="inputForm.name || `inpur-form-${value}`",
    :placeholder="inputForm.placeholder || ''"
    :disabled="!checked"
    :initialValue="inputForm.initialValue || ''"
    :validations="[...inputForm.validations] || []"
    @change="inputFormChanged"
  )
</template>

<script>
import InputText from './InputText.vue'
import InputNumber from './InputNumber.vue'

export default {
  name: 'RadioButton',
  components: {
    InputText,
    InputNumber
  },
  props: {
    label: {
      type: String,
      default: null
    },
    inputForm: {
      type: Object,
      default: null
    },
    value: {
      type: String,
      default: '',
      require: true
    },
    name: {
      type: String,
      require: true,
      default: ''
    },
    error: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    enableEmpty: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    if (this.inputForm?.change && this.checked) {
      this.inputForm.change(this.inputForm.initialValue)
    }
  },
  methods: {
    radioChanged ({ target }) {
      if (this.inputForm?.change) {
        this.inputForm.change(this.$refs[`radioForm_${this.value}`].value)
      }
      this.$emit('change', target.value)
    },
    radioClicked ({ target }) {
      if (this.enableEmpty && this.value === target.value) {
        if (this.inputForm.change) {
          this.inputForm.change('')
        }
        this.$emit('change', '')
      }
    },
    inputFormChanged (event) {
      if (this.inputForm?.change) {
        this.inputForm.change(event)
      }
    }
  }
}
</script>

<style lang="scss">
.radiobutton {
  align-items: center;
  display: flex;
  position: relative;

  &--error {
    .radiobutton__check {
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
    width: 16px;
    z-index: 2;

    &:checked {
      + .radiobutton__check {
        background-color: $input-border-active;
        border-color: $input-border-active;
      }
    }

    &:disabled {
      pointer-events: none;

      + .radiobutton__check {
        background-color: $input-background-disabled;
        border-color: $input-border-disabled;
      }

      ~ .radiobutton__label {
        color: $input-label-disabled;
      }
    }

    &:disabled:checked {
      + .radiobutton__check {
        background-color: $input-border-disabled;
        border-color: $input-border-disabled;
      }
    }
  }

  &__check {
    background-color: $input-background;
    border: 1px solid $input-border;
    border-radius: 16px;
    flex-shrink: 0;
    height: 16px;
    position: relative;
    transition: all .3s ease;
    width: 16px;

    &:before {
      background-color: $input-background;
      border-radius: 16px;
      content: "";
      height: calc(100% - 3px);
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 3px);
    }
  }

  &__label {
    color: $input-text;
    display: block;
    margin: 0 $space-2;
    cursor: pointer;
    transition: all .3s ease;
  }
}
</style>
