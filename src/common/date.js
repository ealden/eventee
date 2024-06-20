function copyDate(date) {
  const target = new Date()
  target.setUTCFullYear(date.getUTCFullYear())
  target.setUTCMonth(date.getUTCMonth())
  target.setUTCDate(date.getUTCDate())
  target.setUTCHours(0, 0, 0, 0)

  return target
}

export function dateToday() {
  return new Date('2024-06-18T00:00:00Z')
}

export function dateFrom(date, offset) {
  const target = copyDate(date)
  target.setUTCDate(target.getUTCDate() + offset)

  return target
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
  const target = weekStart(date)
  target.setUTCDate(target.getUTCDate() + (offset * 7))

  return target
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
    .replace(':00.000Z', '')
}

export function formatDateTime(date) {
  return new Date(date)
    .toISOString()
    .split(':')[0]
    .concat(':00:00.000Z')
}

export function formatHour(hour) {
  return [(hour - 1).toString().padStart(2, 0), ':00'].join('')
}

export function formatDateToday(date) {
  const dateObject = new Date(date)

  const year = dateObject.getUTCFullYear()
  const month = MONTHS[dateObject.getUTCMonth() + 1]
  const day = dateObject.getUTCDate()

  return [month, ' ', day, ', ', year].join('')
}

export function formatYear(date) {
  return copyDate(date).getUTCFullYear()
}

export function formatMonth(date) {
  return MONTHS[copyDate(date).getUTCMonth() + 1]
}

export function formatDay(date) {
  return new Date(date).getUTCDate()
}
