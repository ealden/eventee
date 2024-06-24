import {
  dateFrom,
  dateKey,
  dateTimeFrom,
  dateTimeKey,
  weekStart,
  monthStart,
  monthEnd
} from '../common/dates.js'

export function dayCalendar(currentDate) {
  const calendar = []

  for (let h = 0; h < 24; h++) {
    const date = dateTimeFrom(currentDate, h)

    calendar.push(dateTimeKey(date))
  }

  return calendar
}

export function weekCalendar(currentDate) {
  const calendar = []

  const startDate = weekStart(currentDate)

  for (let h = 0; h < 24; h++) {
    const hour = []

    for (let d = 0; d < 7; d++) {
      const date = dateTimeFrom(startDate, ((d * 24) + h))

      hour.push(dateTimeKey(date))
    }

    calendar.push(hour)
  }

  return calendar
}

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
