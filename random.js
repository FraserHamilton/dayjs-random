const dayjs = require('dayjs')

exports.extend = (option, dayjsClass, dayjsFactory) => {
  dayjsFactory.between = (from, to) => {
    const fromMilli = dayjs(from).valueOf()
    const max = dayjs(to).valueOf() - fromMilli

    const dateOffset = Math.floor(Math.random() * max + 1)

    const newDate = dayjs(fromMilli + dateOffset)

    return dayjs(newDate)
  }

  dayjsFactory.soon = (days = 1, refDate = dayjs()) => {
    const to = refDate.add(days, 'day')

    return dayjs.between(refDate, to)
  }

  dayjsFactory.recent = (days = 1, refDate = dayjs()) => {
    const from = refDate.subtract(days, 'day')

    return dayjs.between(from, refDate)
  }
}
