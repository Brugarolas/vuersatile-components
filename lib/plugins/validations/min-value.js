export default (minValue, value) => {
  if (minValue || minValue === 0) return value >= minValue

  return true
}
