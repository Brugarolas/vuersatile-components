<template lang="pug">
CheckboxBase.checkbox(
  :initialValue="initialValue",
  :label="label",
  :name="name",
  :disabled="disabled",
  :invalid="shouldShowErrors",
  ref="checkboxBase",
  @click="input"
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
      default: false
    },
    required: {
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
    input (event) {
      this.dirty = true
      this.value = event.target.checked
      this.$emit('input', event.target.checked)
    }
  }
}
</script>
