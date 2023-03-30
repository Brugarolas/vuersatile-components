export default (value) => {
  if (!value) {
    return true
  }
  const validator = /^([0-2][0-3]|[0-1]\d):[0-5]\d$/
  return validator.test(value)
}
