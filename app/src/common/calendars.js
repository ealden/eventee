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

export function yearCalendar() {
  return {
    1: monthCalendar(new Date('2024-01-01')),
    2: monthCalendar(new Date('2024-02-01')),
    3: monthCalendar(new Date('2024-03-01')),
    4: monthCalendar(new Date('2024-04-01')),
    5: monthCalendar(new Date('2024-05-01')),
    6: monthCalendar(new Date('2024-06-01')),
    7: monthCalendar(new Date('2024-07-01')),
    8: monthCalendar(new Date('2024-08-01')),
    9: monthCalendar(new Date('2024-09-01')),
    10: monthCalendar(new Date('2024-10-01')),
    11: monthCalendar(new Date('2024-11-01')),
    12: monthCalendar(new Date('2024-12-01'))
  }
}
