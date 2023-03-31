<template lang="pug">
.radiobutton(:class="{ 'radiobutton--error': error }")
  input.radiobutton__input(
    type="radio",
    :ref="`radio_${value}`",
    :name="name",
    :id="`radio_${internalId}`",
    :value="value",
    :checked="checked",
    :disabled="disabled",
    @click="radioClicked",
    @input="radioInput",
    @change="radioChanged"
  )
  span.radiobutton__check
  label.radiobutton__label(v-if="label" :for="`radio_${internalId}`") {{ label }}
</template>

<script>
import { nanoid } from 'nanoid/non-secure'

export default {
  name: 'RadioButton',

  inheritAttrs: false,

  props: {
    label: {
      type: String,
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

  data () {
    return {
      internalId: nanoid()
    }
  },

  methods: {
    radioChanged ({ target }) {
      console.log('radioChanged', target);
      this.$emit('change', target.value)
    },
    radioInput ({ target }) {
      console.log('radioInput', target);
      this.$emit('input', target.value)
    },
    radioClicked (event) {
      console.log('radioClicked', event);
      this.$emit('click', event)
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

    &::before {
      background-color: $input-background;
      border-radius: 16px;
      content: "";
      height: calc(100% - 7px);
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      width: calc(100% - 7px);
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
