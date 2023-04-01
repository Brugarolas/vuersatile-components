<template lang="pug">
InputBase.input-password(
  :initialValue="initialValue",
  :type="inputTypePassword",
  :name="name",
  :label="label",
  :icon="iconShowPassword",
  iconSize="s",
  :error="shouldShowErrors ? errorMessage : null",
  :placeholder="placeholder",
  :autocomplete="autocomplete",
  :disabled="disabled",
  @input="input",
  @change="change",
  @iconClick="switchShowPassword"
)
</template>

<script>
import InputText from './InputText.vue'

export default {
  mixins: [InputText],
  props: {
    autocomplete: {
      type: String,
      default: 'current-password'
    }
  },
  data () {
    return {
      showPassword: false
    }
  },
  computed: {
    iconShowPassword () {
      return this.showPassword ? 'eye-slash' : 'eye'
    },
    inputTypePassword () {
      return this.showPassword ? 'text' : 'password'
    }
  },
  methods: {
    switchShowPassword () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
