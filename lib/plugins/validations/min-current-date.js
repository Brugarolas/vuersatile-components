import dayjs from 'dayjs' // eslint-disable-line no-restricted-imports

export default (value) => {
  if (!value) {
    return true
  }

  const date = dayjs.tz(value)
  return date.valueOf() > dayjs().tz().valueOf()
}
