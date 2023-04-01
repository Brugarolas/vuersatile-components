export default (minLength, value) => {
  const textValue = `${value}`

  if (minLength) return textValue.length >= minLength

  return true
}
