import dayjs from 'dayjs' // eslint-disable-line no-restricted-imports

export default (value) => {
  if (!value) {
    return true // not mandatory - use 'not-empty' before if you want it to be mandatory
  }

  const dateValue = value.replace(/-/g, '/')
  const day = dayjs(dateValue, 'DD/MM/YYYY', 'es', true).tz()
  const isValid = day.isValid()

  return isValid
}
