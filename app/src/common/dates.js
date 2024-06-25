export function newDate(year, month, day) {
  const target = new Date()
  target.setUTCFullYear(year)
  target.setUTCMonth(month - 1)
  target.setUTCDate(day)

  return target
}

function copyDate(date) {
  const target = new Date()
  target.setUTCFullYear(date.getUTCFullYear())
  target.setUTCMonth(date.getUTCMonth())
  target.setUTCDate(date.getUTCDate())
  target.setUTCHours(0, 0, 0, 0)

  return target
}

export function dateKey(date) {
  return new Date(date)
    .toISOString()
    .split('T')[0]
}

export function dateFrom(date, offset) {
  const target = copyDate(date)
  target.setUTCDate(target.getUTCDate() + offset)

  return target
}

export function dateTimeKey(date) {
  return new Date(date)
    .toISOString()
    .split(':')[0]
    .concat(':00:00.000Z')
}

export function dateTimeFrom(date, hourOffset) {
  const target = copyDate(date)
  target.setUTCHours(target.getUTCHours() + hourOffset)

  return target
}

export function weekStart(date) {
  const target = copyDate(date)
  target.setUTCDate(target.getUTCDate() - target.getUTCDay())

  return target
}

export function weekFrom(date, offset) {
  return dateFrom(weekStart(date), (offset * 7))
}

export function monthStart(date) {
  const target = copyDate(date)
  target.setUTCDate(1)

  return target
}

export function monthEnd(date) {
  const target = copyDate(date)
  target.setUTCMonth(target.getUTCMonth() + 1)
  target.setUTCDate(0)

  return target
}

export function monthFrom(date, offset) {
  const target = monthStart(date)
  target.setUTCMonth(target.getUTCMonth() + offset)

  return target
}

export function yearStart(date) {
  const target = copyDate(date)
  target.setUTCMonth(1 - 1)
  target.setUTCDate(1)

  return target
}

export function yearFrom(date, offset) {
  const target = yearStart(date)
  target.setUTCFullYear(target.getUTCFullYear() + offset)

  return target
}

const MONTHS = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
}

export function formatDate(date) {
  return new Date(date)
    .toISOString()
    .split('T')[0]
}

export function formatTime(date) {
  return new Date(date)
    .toISOString()
    .split('T')[1]
    .replace(/^0/, '')
    .replace(':00.000Z', '')
}

export function formatDateTime(date) {
  return new Date(date)
    .toISOString()
    .replace('T', ' ')
    .replace(':00.000Z', '')
}

export function formatDay(date) {
  return new Date(date).getUTCDate()
}

export function formatDayViewHeader(date) {
  const target = copyDate(date)

  const year = target.getUTCFullYear()
  const month = MONTHS[target.getUTCMonth() + 1]
  const day = target.getUTCDate()

  return [month, ' ', day, ', ', year].join('')
}

export function formatMonthViewHeader(date) {
  const target = copyDate(date)

  const year = target.getUTCFullYear()
  const month = MONTHS[target.getUTCMonth() + 1]

  return [month, year].join(' ')
}

export function formatYearHeader(date) {
  return date.getUTCFullYear().toString()
}
