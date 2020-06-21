var dayjs = require('dayjs')

var random = require('./random').extend

dayjs.extend(random)

const now = dayjs.between()

console.log(now.format())
