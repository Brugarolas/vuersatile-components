import BasicInputMixin from './basic-input.js'

export default {
  mixins: [BasicInputMixin],
  props: {
    required: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isValid () {
      if (this.disabled) {
        return true
      }

      return !this.required || Boolean(this.value)
    }
  },
  methods: {
    shouldSetInitialValue () {
      return Boolean(this.initialValue)
    }
  }
}
