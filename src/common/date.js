export function monthStart(date) {
  const target = new Date()
  target.setUTCFullYear(date.getUTCFullYear())
  target.setUTCMonth(date.getUTCMonth())
  target.setUTCDate(1)
  target.setUTCHours(0, 0, 0, 0)

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

export function formatDateTime(date, time) {
  return [date, 'T', time].join('')
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

export function formatMonthYear(date) {
  const dateObject = new Date(date)

  const year = dateObject.getUTCFullYear()
  const month = MONTHS[dateObject.getUTCMonth() + 1]

  return [month, year].join(' ')
}

export function formatDay(date) {
  return new Date(date).getUTCDate()
}
