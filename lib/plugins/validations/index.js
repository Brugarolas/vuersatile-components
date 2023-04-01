import notEmpty from './is-not-empty'
import isDate from './is-date'
import email from './is-email'
import number from './is-number'
import int from './is-int'
import minValue from './min-value'
import maxValue from './max-value'
import minCurrentDate from './min-current-date'
import isEqual from './is-equal'
import isTime from './is-time'
import maxLength from './max-length'
import minLength from './min-length'

/* Valid validations */
const validationsTable = {
  'not-empty': { validate: notEmpty, errorMessage: 'FORM.ERROR.NOT_EMPTY' },
  date: { validate: isDate, errorMessage: 'FORM.ERROR.NOT_DATE' },
  email: { validate: email, errorMessage: 'FORM.ERROR.EMAIL' },
  number: { validate: number, errorMessage: 'FORM.ERROR.NOT_NUMBER' },
  int: { validate: int, errorMessage: 'FORM.ERROR.NOT_INT' },
  'min-value': { validate: minValue, errorMessage: 'FORM.ERROR.MIN_VALUE' },
  'max-value': { validate: maxValue, errorMessage: 'FORM.ERROR.MAX_VALUE' },
  'min-current-date': { validate: minCurrentDate, errorMessage: 'FORM.ERROR.MIN_CURRENT_DATE' },
  equal: { validate: isEqual, errorMessage: 'FORM.ERROR.NOT_EQUAL' },
  'is-time': { validate: isTime, errorMessage: 'FORM.ERROR.NOT_VALID_TIME' },
  'max-length': { validate: maxLength, errorMessage: 'FORM.ERROR.NOT_MAX_LENGTH' },
  'min-length': { validate: minLength, errorMessage: 'FORM.ERROR.NOT_MIN_LENGTH' }
}

/* Register new validation */
function registerValidation (name, validation) {
  validationsTable[name] = validation
}

/* Validation function */
const doValidation = (validations = [], value) => {
  const failedValidation = validations.find((validation) => {
    // It's for custom validations which have validate function
    if (validation.validate) {
      return !validation.validate(value)
    }

    // Other way we search in validations table to find validate function
    const name = typeof validation === 'string' ? validation : validation.name
    const config = validationsTable[name]
    const params = validation.params || []
    return !config.validate(...params, value)
  })

  if (failedValidation) {
    // It's for custom validations which have validate function
    if (failedValidation.validate) {
      return { isValid: false, name: failedValidation.name, message: failedValidation.errorMessage }
    }

    // If validation is an object, get it's errorMessage if exists, instead of original one
    const validationIsString = typeof failedValidation === 'string'
    const name = validationIsString ? failedValidation : failedValidation.name
    const originalErrorMessage = validationsTable[name].errorMessage
    const errorMessage = validationIsString ? originalErrorMessage : (failedValidation.errorMessage || originalErrorMessage)

    return { isValid: false, name: name, message: errorMessage }
  }

  return { isValid: true }
}

/* Plugin */
export default {
  install: (app) => {
    app.config.globalProperties.$validate = doValidation
    app.config.$registerValidation = registerValidation
  }
}
