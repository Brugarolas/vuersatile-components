import BasicInputMixin from './basic-input'

export default {
  mixins: [BasicInputMixin],
  props: {
    validations: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      validation: null
    }
  },
  computed: {
    isValid () {
      if (this.disabled) {
        return true
      }

      return this.validation ? this.validation.isValid : true
    },
    errorMessage () {
      if (this.isValid) {
        return ''
      }

      return this.$t(this.validation.message)
    },
    realValidations () {
      return this.validations || []
    }
  },
  created () {
    this.validate()
  },
  methods: {
    validate () {
      const validation = this.$validate(this.realValidations, this.value)

      if (this.validationHasChanged(validation)) {
        this.validation = validation
      }

      return validation.isValid
    },
    validationHasChanged (validation) {
      return !this.validation || this.validation.name !== validation.name
    }
  }
}
