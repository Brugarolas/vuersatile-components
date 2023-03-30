export default (value) => {
  if (!value) {
    return true
  }

  const date = Vue.$tzDate(value)
  return date.valueOf() > Vue.$date().valueOf()
}
