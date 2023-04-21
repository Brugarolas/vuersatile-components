<template lang="pug">
form.form(:novalidate="!validate", @submit="submit")
    slot

    .form__buttons(v-if="hasButtons")
      .form__group-buttons
        slot(name="buttons")

      .form__submit-button(v-if="showSubmitButton")
        Button(
          button="submit",
          type="approve",
          :text="computedSubmitText",
          :disabled="disabledSubmit",
          :loading="loading",
          data-button-role="continue"
        )
</template>

<script>
import Button from '@/components/interactive/Button.vue'
import { reactive, computed } from "vue";

export default {
  components: {
    Button
  },
  provide () {
    // Provide/inject is not reactive
    const $form = {}

    // Form is loading
    Object.defineProperty($form, 'loading', {
      enumerable: true, // Necessary to loop over $form properties
      get: () => this.loading
    })

    // Form is valid
    Object.defineProperty($form, 'isValid', {
      enumerable: true, // Necessary to loop over $form properties
      get: () => this.isValid
    })

    // Insert field in form
    Object.defineProperty($form, 'addField', {
      get: () => this.insertField
    })

    // Remove field from form
    Object.defineProperty($form, 'removeField', {
      get: () => this.removeField
    })

    return { $form }
  },
  props: {
    validate: {
      type: Boolean,
      default: true
    },
    submitText: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    autoValidateOnStart: {
      type: Boolean,
      default: true
    },
    scrollOnFail: {
      type: Boolean,
      default: false
    },
    scrollToInvalidField: {
      type: Boolean,
      default: false
    },
    disableSubmitButton: {
      type: Boolean,
      default: false
    },
    resetOnSubmit: {
      type: Boolean,
      default: false
    },
    skipUnmodifiedFields: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dirty: false,
      formFields: []
    }
  },
  computed: {
    activeFormFields () {
      return this.formFields.filter(field => !field.isDisabled)
    },
    firstInvalidField () {
      return this.activeFormFields.find(field => !field.isValid)
    },
    isValid () {
      if (!this.activeFormFields.length) {
        return true
      }

      return !this.firstInvalidField
    },
    isDirty () {
      const isSomeFieldDirty = this.formFields.some(field => Boolean(field.valueHasChanged))
      return isSomeFieldDirty || this.dirty
    },
    disabledSubmit () {
      if (this.disableSubmitButton) {
        return true
      }

      return (this.autoValidateOnStart || this.dirty) ? !this.isValid : false
    },
    computedSubmitText () {
      return this.submitText || this.$t('GENERIC.CONTINUE')
    },
    hasButtons () {
      return Boolean(this.showSubmitButton || (this.$slots.buttons && this.$slots.buttons.length))
    }
  },
  created () {
    // To check inserted fields - we don't want repeated ones
    this.$fieldMap = new Map()
  },
  methods: {
    insertField (field) {
      // Don't insert field with existan name twice
      if (this.$fieldMap.has(field.name)) {
        return
      }

      this.$fieldMap.set(field.name, field)
      this.formFields.push(field)

      if (this.dirty) {
        // If form is dirty - tell fields to show erros
        field.startShowingFieldErrors()
      } else if (this.autoValidateOnStart) {
        // If form has autoValidateOnStart - tell fields to show errors only when they are modified
        field.setFormIsDirty()
      }
    },

    removeField (fieldName) {
      const index = this.formFields.findIndex((field) => field.name === fieldName)

      if (index > -1) {
        this.formFields.splice(index, 1)
        this.$fieldMap.delete(fieldName)
      }
    },

    resetField (fieldName) {
      const field = this.formFields.find((field) => field.name === fieldName)

      if (field) {
        field.component.reset()
      }
    },

    submit (event) {
      // Prevent form's default behavior
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      // Tell all fields to start show errors
      this.setFormIsDirty()

      // If form is not valid, finish here
      if (!this.isValid) {
        // But before scroll form or invalid component into view
        this.scrollIntoView(this.firstInvalidField && this.firstInvalidField.element)

        return
      }

      // Build form with fields to submit it
      const form = this.buildFormWithFields()
      if (this.resetOnSubmit) {
        this.reset()
      }
      this.$emit('submitForm', form)
    },
    reset () {
      this.dirty = false

      // Reset all form fields values to empty
      this.formFields.forEach((field) => {
        field.component.reset()
      })
    },
    buildFormWithFields () {
      // Build object with {fieldName: fieldValue} which will be sent on submit
      return this.activeFormFields.reduce((form, field) => {
        if (this.skipUnmodifiedFields && !field.valueHasChanged) {
          return form
        }

        form[field.name] = field.value

        return form
      }, {})
    },
    buildFormValidation () {
      // Return reactive object with form validation, so we can know if form is valid
      // from outside component:
      // Example: const formValidation = this.$refs.form.buildFormValidation()
      const component = this

      return new reactive({
        component,
        element: component.$el,

        isValid: computed(() => {
          return component.isValid
        }),
        isDirty: computed(() => {
          return component.isDirty
        })
      })
    },

    setFormIsDirty () {
      // No need to tell fields to show errors again
      if (this.dirty) {
        return
      }

      this.dirty = true

      // Tell all fields to show errors
      this.formFields.forEach((field) => {
        field.startShowingFieldErrors()
      })
    },
    scrollIntoView (element) {
      if (!this.scrollOnFail) {
        return
      }

      // Scroll to first invalid field or to top of Form - depending on configuration
      const elementToScroll = this.scrollToInvalidField ? (element || this.$el) : this.$el

      elementToScroll.scrollIntoView({ behavior: 'smooth', alignToTop: true, block: 'start' })
    }
  }
}
</script>

<style lang="scss">
.form {
  &__buttons {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-top: $space-10;
  }

  &__group-buttons {
    align-items: center;
    display: flex;
    flex: 1;
  }
}
</style>
