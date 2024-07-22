import { dateKey, dateTimeKey } from './dates.js'

export function groupEvents(events) {
  const groups = {}

  for (const event of events) {
    const date = dateKey(event.starts_at)

    if (!Object.hasOwn(groups, date)) {
      groups[date] = []
    }

    groups[date].push(event)

    const dateTime = dateTimeKey(event.starts_at)

    if (!Object.hasOwn(groups, dateTime)) {
      groups[dateTime] = []
    }

    groups[dateTime].push(event)
  }

  return groups
}
