export default (maxLength, value) => {
  const textValue = `${value}`

  if (maxLength || maxLength === 0) return textValue.length <= maxLength

  return true
}
