export default (value) => {
  if (!value) {
    return true // not mandatory - use 'not-empty' before if you want it to be mandatory
  }

  const dateValue = value.replace(/-/g, '/')
  const day = Vue.$date(dateValue, 'DD/MM/YYYY', 'es', true)
  const isValid = day.isValid()

  return isValid
}
