import { useState } from 'react'

import { dateFrom, formatTime, formatDayViewHeader } from '../common/dates.js'
import { dayCalendar } from '../common/calendars.js'
import ViewHeader from './ViewHeader'
import Event from './Event'

interface Event {
  id: number,
  summary: string,
  starts_at: string,
  ends_at: string
}

export default function DayView({
  events,
  today
}: Readonly<{
  events: { [key: string]: Event[] },
  today: Date
}>) {
  const [currentDate, setCurrentDate] = useState(today)

  const header = formatDayViewHeader(currentDate)

  const calendar = dayCalendar(currentDate)

  function prevDay() {
    setCurrentDate(dateFrom(currentDate, -1))
  }

  function thisDay() {
    setCurrentDate(today)
  }

  function nextDay() {
    setCurrentDate(dateFrom(currentDate, 1))
  }

  return (
    <div id="day-view">
      <ViewHeader header={header}
                  prevAction={prevDay}
                  thisAction={thisDay}
                  nextAction={nextDay} />
      <div id="day" className="container">
      {calendar.map((dateTime) => (
        <div className="row event-row"
             key={dateTime}>
          <div className="col-1 border text-end">
            {formatTime(dateTime)}
          </div>
          <div className="col border">
            <div className="position-relative row">
            {(events[dateTime] ?? []).map((event) => (
              <Event event={event} key={event.id} />
            ))}
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
