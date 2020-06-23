const dayjs = require('dayjs')
const random = require('../random').extend

dayjs.extend(random)

test('between gets date between two dates', () => {
  const from = dayjs('2020-01-01')
  const to = dayjs('2020-05-01')
  const between = dayjs.between(from, to)

  expect(between.valueOf()).toBeGreaterThan(from.valueOf())
  expect(between.valueOf()).toBeLessThan(to.valueOf())
})

test('soon gets date within the next day without params', () => {
  const now = dayjs()

  const nextDay = now.add(1, 'day')

  const soon = dayjs.soon()

  expect(soon.valueOf()).toBeGreaterThan(now.valueOf())
  expect(soon.valueOf()).toBeLessThan(nextDay.valueOf())
})

test('recent gets date within past day without params', () => {
  const now = dayjs()

  const prevDay = now.subtract(1, 'day')

  const recent = dayjs.recent()

  expect(recent.valueOf()).toBeGreaterThan(prevDay.valueOf())
  expect(recent.valueOf()).toBeLessThan(now.valueOf())
})

test('soon gets date within the next day', () => {
  const now = dayjs()

  const nextDay = now.add(1, 'day')

  const soon = dayjs.soon(1, now)

  expect(soon.valueOf()).toBeGreaterThan(now.valueOf())
  expect(soon.valueOf()).toBeLessThan(nextDay.valueOf())
})

test('recent gets date within past day', () => {
  const now = dayjs()

  const prevDay = now.subtract(1, 'day')

  const recent = dayjs.recent(1, now)

  expect(recent.valueOf()).toBeGreaterThan(prevDay.valueOf())
  expect(recent.valueOf()).toBeLessThan(now.valueOf())
})

test('soon gets date within the next few days', () => {
  const now = dayjs()

  const nextDay = now.add(3, 'day')

  const soon = dayjs.soon(3, now)

  expect(soon.valueOf()).toBeGreaterThan(now.valueOf())
  expect(soon.valueOf()).toBeLessThan(nextDay.valueOf())
})

test('recent gets date within past few days', () => {
  const now = dayjs()

  const prevDay = now.subtract(3, 'day')

  const recent = dayjs.recent(3, now)

  expect(recent.valueOf()).toBeGreaterThan(prevDay.valueOf())
  expect(recent.valueOf()).toBeLessThan(now.valueOf())
})

test('future gets date within the next year without params', () => {
  const now = dayjs()

  const nextYear = now.add(1, 'year')

  const future = dayjs.future()

  expect(future.valueOf()).toBeGreaterThan(now.valueOf())
  expect(future.valueOf()).toBeLessThan(nextYear.valueOf())
})

test('past gets date within past year without params', () => {
  const now = dayjs()

  const prevYear = now.subtract(1, 'year')

  const past = dayjs.past()

  expect(past.valueOf()).toBeGreaterThan(prevYear.valueOf())
  expect(past.valueOf()).toBeLessThan(now.valueOf())
})

test('future gets date within the next year', () => {
  const now = dayjs()

  const nextYear = now.add(1, 'year')

  const future = dayjs.future(1, now)

  expect(future.valueOf()).toBeGreaterThan(now.valueOf())
  expect(future.valueOf()).toBeLessThan(nextYear.valueOf())
})

test('past gets date within past year', () => {
  const now = dayjs()

  const prevYear = now.subtract(1, 'year')

  const past = dayjs.past(1, now)

  expect(past.valueOf()).toBeGreaterThan(prevYear.valueOf())
  expect(past.valueOf()).toBeLessThan(now.valueOf())
})

test('future gets date within the next few days', () => {
  const now = dayjs()

  const nextFewYr = now.add(3, 'year')

  const future = dayjs.future(3, now)

  expect(future.valueOf()).toBeGreaterThan(now.valueOf())
  expect(future.valueOf()).toBeLessThan(nextFewYr.valueOf())
})

test('past gets date within the past few days', () => {
  const now = dayjs()

  const prevFewYr = now.subtract(3, 'year')

  const past = dayjs.past(3, now)

  expect(past.valueOf()).toBeGreaterThan(prevFewYr.valueOf())
  expect(past.valueOf()).toBeLessThan(now.valueOf())
})
