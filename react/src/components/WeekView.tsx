import { useState } from 'react'

import { weekFrom, formatTime, formatDateTime, formatDay, formatMonthViewHeader } from '../common/dates.js'
import { weekCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader'

interface Event {
  id: number,
  summary: string,
  starts_at: string,
  ends_at: string
}

export default function WeekView({
  events,
  today
}: Readonly<{
  events: { [key: string]: Event[] },
  today: Date
}>) {
  const [currentDate, setCurrentDate] = useState(today)

  const header = formatMonthViewHeader(currentDate)

  const calendar = weekCalendar(currentDate)

  const days = weekDays(currentDate)

  function weekDays(currentDate: Date) {
    const week = weekCalendar(currentDate)[0]

    return [
      ['Sun', week[0]],
      ['Mon', week[1]],
      ['Tue', week[2]],
      ['Wed', week[3]],
      ['Thu', week[4]],
      ['Fri', week[5]],
      ['Sat', week[6]]
    ]
  }

  function prevWeek() {
    setCurrentDate(weekFrom(currentDate, -1))
  }

  function thisWeek() {
    setCurrentDate(today)
  }

  function nextWeek() {
    setCurrentDate(weekFrom(currentDate, 1))
  }

  return (
    <div id="week-view">
      <ViewHeader header={header}
                  prevAction={prevWeek}
                  thisAction={thisWeek}
                  nextAction={nextWeek} />
      <div id="week" className="container">
        <div className="row text-center">
          <div className="col-1">
            &nbsp;
          </div>
          {days.map(([label, value]) => (
          <div className="col" key={value}>
            <strong>{label}</strong>
            <span className="day ms-1">
              <strong>{formatDay(value)}</strong>
            </span>
          </div>
          ))}
        </div>
        {calendar.map((hour) => (
        <div className="row event-row" key={hour[0]}>
          <div className="col-1 border text-end">
            {formatTime(hour[0])}
          </div>
          {hour.map((dateTime) => (
          <div className="col border" key={dateTime}>
            <div className="position-relative row">
              {(events[dateTime] ?? []).map((event) => (
              <div className="position-absolute col event border border-primary bg-primary-subtle bg-gradient px-1"
                   key={event.id}>
                <div className="hour">
                  {formatTime(event.starts_at)}
                </div>
                <div className="summary">
                  <strong>{event.summary}</strong>
                </div>
                <span className="starts_at visually-hidden">
                  {formatDateTime(event.starts_at)}
                </span>
                <span className="ends_at visually-hidden">
                  {formatDateTime(event.ends_at)}
                </span>
              </div>
              ))}
            </div>
          </div>
          ))}
        </div>
        ))}
      </div>
    </div>
  )
}
