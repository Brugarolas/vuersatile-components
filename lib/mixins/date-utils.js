/**
 * Add '/' separator if value is complete (value.length === 2) and is not year (position < 2)
 * Meant to use as .map() function for a date array ([DD,MM,YYYY])
 *
 * @param {string} value - The date value (day, month or year)
 * @param {number} position - The position of the value in the date array
 * @returns {string} The value with or without the separator '/'
 */
const addDateSeparator = (value, position) => value.length === 2 && position < 2 ? value + '/' : value

/**
 * Returns the lowest-valued number or string passed into it
 *
 * @param {string|number} value - The value
 * @param {string|number} min - The min value
 * @returns {string} The lowest value
 */
const minValue = (value, min) => {
  const lowest = value ? `${Math.min(value, min)}` : ''

  if (lowest < 10 && value && value.length === 2) {
    return `0${lowest}`
  }

  return lowest
}

export default {
  methods: {
    /**
     * Will format any input value as 'DD/MM/YYYY' date, removing incorrect characters and automatically adding '/'
     *
     * @param {string} inputValue - The input value
     * @returns {string} The formatted date value
     */
    formatDate (inputValue) {
      const inputNumbers = inputValue.replace(/\D/g, '')

      const dates = [
        minValue(inputNumbers.substr(0, 2), 31),
        minValue(inputNumbers.substr(2, 2), 12),
        inputNumbers.substr(4, 4)
      ]

      const output = dates.map(addDateSeparator).join('')

      return output
    }
  }
}
