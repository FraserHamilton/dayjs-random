var dayjs = require('dayjs')

var random = require('./random').extend

dayjs.extend(random)

const from = dayjs()
const to = from.add(1, 'day')

const test = dayjs.between(from, to)

const soon = dayjs.soon()

console.log(soon.format())
