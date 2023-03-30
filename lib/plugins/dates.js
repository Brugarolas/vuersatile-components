import dayjs from 'dayjs' // eslint-disable-line no-restricted-imports

const tzForcedDayjs = (...args) => {
  return dayjs.tz(...args)
}

const baseDayjs = (...args) => {
  return dayjs(...args).tz()
}

const withoutTzDayjs = (...args) => {
  return dayjs(...args)
}

const utcDayjs = (...args) => {
  return dayjs.utc(...args)
}
export default {
  install: (app) => {
    app.config.globalProperties.$date = baseDayjs // normal base dayjs use, with timezone apply
    app.config.globalProperties.$dateWithoutTz = withoutTzDayjs // normal base dayjs use, with timezone apply
    app.config.globalProperties.$tzDate = tzForcedDayjs // Date forced to use timezone
    app.config.globalProperties.$utcDate = utcDayjs // Date forced to use utc
  }
}
