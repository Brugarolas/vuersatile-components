<template lang="pug">
InputBase.input-password(
    {{showPassword}}
    v-model="value",
    :type="inputTypePassword",
    :name="name",
    :label="label",
    :icon="iconPassword",
    iconSize="xs",
    :error="shouldShowErrors ? errorMessage : null",
    :placeholder="placeholder",
    :autocomplete="autocomplete",
    :disabled="disabled",
    @input="input",
    @change="change",
    @iconClick="showPassword=!showPassword"
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
    iconPassword () {
      return this.showPassword ? 'eye-slash-solid' : 'eye-solid'
    },
    inputTypePassword () {
      return this.showPassword ? 'text' : 'password'
    }
  }
}
</script>
<style lang="scss">
.input-password {
  &.input-base--error {
    .input-base__right-icon {
      color: $input-icon;
    }
  }
}
</style>
