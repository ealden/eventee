import { monthStart, monthEnd, dateFrom, dateKey } from './dates.js'

export function monthCalendar(currentDate) {
  const startDate = monthStart(currentDate)
  const endDate = monthEnd(currentDate)

  let week = []

  for (let i = 0; i < startDate.getUTCDay(); i++) {
    week.push(null)
  }

  const calendar = []

  for (let i = 0; i < endDate.getUTCDate(); i++) {
    const date = dateFrom(monthStart(currentDate), i)

    week.push(dateKey(date))

    if (week.length == 7) {
      calendar.push(week)

      week = []
    }
  }

  if (week.length > 0) {
    while (week.length < 7) {
      week.push(null)
    }

    calendar.push(week)
  }

  return calendar
}
