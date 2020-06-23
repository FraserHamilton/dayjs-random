const dayjs = require('dayjs')

exports.extend = (dayjsFactory) => {
  dayjsFactory.between = (from, to) => {
    const fromMilli = dayjs(from).valueOf()
    const max = dayjs(to).valueOf() - fromMilli

    const dateOffset = Math.floor(Math.random() * max + 1)

    const newDate = dayjs(fromMilli + dateOffset)

    return dayjs(newDate)
  }

  dayjsFactory.soon = (days = 1, refDate = dayjs()) => {
    const ref = dayjs(refDate)
    const to = ref.add(days, 'day')

    return dayjs.between(ref, to)
  }

  dayjsFactory.recent = (days = 1, refDate = dayjs()) => {
    const ref = dayjs(refDate)
    const from = ref.subtract(days, 'day')

    return dayjs.between(from, ref)
  }

  dayjsFactory.future = (years = 1, refDate = dayjs()) => {
    const ref = dayjs(refDate)
    const to = ref.add(years, 'year')

    return dayjs.between(ref, to)
  }

  dayjsFactory.past = (years = 1, refDate = dayjs()) => {
    const ref = dayjs(refDate)
    const from = ref.subtract(years, 'year')

    return dayjs.between(from, ref)
  }
}
