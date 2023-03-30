const emailRegExp = /(\S+)@(\S+)\.(\S+)/

export default (value) => {
  if (!value) {
    return true // not mandatory - use 'not-empty' before if you want it to be mandatory
  }

  return emailRegExp.test(value)
}
