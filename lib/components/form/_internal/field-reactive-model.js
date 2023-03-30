import { reactive, computed } from "vue";

export default (component) => reactive({
  component,
  name: component.name,
  element: component.$el,

  setValue (newValue) {
    component.value = newValue
  },
  value: computed(() => {
    if (component.disallowEmptyString && component.value === '') {
      return null
    }

    return component.value
  }),

  isDisabled: computed(() => {
    return component.disabled
  }),
  isValid: computed(() => {
    return component.isValid
  }),
  valueHasChanged: computed(() => {
    if (!component.dirty) {
      return false
    }

    const initialValueIsEmpty = !component.initialValue && component.initialValue !== 0
    const currentValueIsEmpty = !component.value && component.value !== 0

    if (initialValueIsEmpty && currentValueIsEmpty) {
      return false
    }

    return component.formatInitialValue() !== component.value
  }),

  setFormIsDirty (value = true) {
    component.formIsDirty = value
  },
  startShowingFieldErrors (value = true) {
    component.dirty = value
    component.formIsDirty = value
  }
})