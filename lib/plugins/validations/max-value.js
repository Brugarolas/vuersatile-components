export default (maxValue, value) => {
  if (maxValue) return value <= maxValue

  return true
}
