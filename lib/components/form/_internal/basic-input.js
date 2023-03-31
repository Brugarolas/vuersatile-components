import fieldReactiveModel from './field-reactive-model.js'

export default {
  inject: {
    $form: { default: null }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: false
    },
    initialValue: {
      type: [Object, String, Number, Boolean],
      required: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    useForm: {
      type: Boolean,
      default: true
    },
    reseteable: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      value: null,
      dirty: false,
      formIsDirty: false,
      disallowEmptyString: false
    }
  },
  computed: {
    /* SHOULD OVERRIDE */
    // Tells if field is valid - binded to parent via field()
    isValid () {
      return true
    },

    /* INTERNAL */
    // Component will bind automatically with it's parent form using this reactive property
    field () {
      const component = this

      return fieldReactiveModel(component)
    },
    shouldShowErrors () {
      return this.dirty && this.formIsDirty && !this.isValid
    },
    hasError () {
      return this.shouldShowErrors && !this.isValid
    },
    hasValue () {
      return Boolean(this.value)
    },
    isInsideForm () {
      return Boolean(this.$form)
    }
  },
  created () {
    // Set initial value
    if (this.shouldSetInitialValue()) {
      const value = this.formatInitialValue()

      this.value = value
    }
  },
  mounted () {
    if (!this.useForm) {
      return
    }

    // Bind field with parent Form - but wait with this.$nextTick() until all components tree is mounted
    this.$nextTick(() => {
      if (this.isInsideForm) {
        // We are inside a Form, this is the field we will bind to the Form so it can handle validations
        // and decide when to make the submit or show input errors
        this.$form.addField(this.field)
      }
    })
  },
  unmounted () {
    // Unbind field from parent Form
    if (this.useForm && this.isInsideForm) {
      this.$form.removeField(this.name)
    }
  },
  methods: {
    /** AUX METHODS - overridable, mostly used from other mixin's methods **/

    // Function to know if initialValue is valid, and if it is set it to this.value in created() hook
    shouldSetInitialValue () {
      return Boolean(this.initialValue)
    },

    // Function to format initialValue if it is necessary for the component (probably date inputs and such)
    formatInitialValue () {
      return this.initialValue
    },

    // Function to reset input field
    reset () {
      if (!this.reseteable) {
        return
      }

      this.value = null
      this.dirty = false
      this.formIsDirty = false

      if (this.validate) {
        this.validate()
      }
    }
  }
}
