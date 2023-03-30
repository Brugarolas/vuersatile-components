<template lang="pug">
CheckboxBase.checkbox(
    v-model="value",
    :label="label",
    :name="name",
    :disabled="disabled",
    :invalid="shouldShowErrors || forceError",
    @click="$emit('click', $event)",
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
      default: false
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

  watch: {
    initialValue (value) {
      this.value = value
    }
  },

  methods: {
    change () {
      this.dirty = true

      this.$emit('change', this.value)
    }
  }
}
</script>
