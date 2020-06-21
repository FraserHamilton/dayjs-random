const dayjs = require('dayjs')

exports.extend = (option, dayjsClass, dayjsFactory) => {
  dayjsFactory.between = (start, end) => {
    return dayjs()
  }
}
