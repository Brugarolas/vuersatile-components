<template lang="pug">
CheckboxBase(
  :classes="['checkbox']",
  :initialValue="initialValue",
  :label="label",
  :name="name",
  :disabled="disabled",
  :invalid="shouldShowErrors || forceError",
  @click="input",
  @change="change"
)
</template>

<script>
import { CheckboxBase, RequiredInputMixin } from './_internal'

export default {
  components: {
    CheckboxBase
  },
  mixins: [RequiredInputMixin],

  props: {
    initialValue: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: false
    },
    forceError: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: false
    }
  },

  methods: {
    input (newValue) {
      this.dirty = true
      this.value = newValue
      console.log('input', newValue)
      this.$emit('input', newValue)
    },

    change (newValue) {
      this.dirty = true
      this.value = newValue
      console.log('change', newValue)
      this.$emit('change', newValue)
    }
  }
}
</script>
