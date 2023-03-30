export default (value) => {
  if (value === 0) {
    return true
  }

  if (!value) {
    return false
  }

  if (typeof value.trim === 'function') {
    return Boolean(value.trim())
  }

  return Boolean(value)
}
