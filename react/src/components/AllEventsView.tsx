'use client'

import { formatDateTime } from '../common/dates.js'

export default function AllEventsView({
  events
}: Readonly<{
  events: Event[]
}>) {
  return (
    <div id="all-events-view">
      <div className="container mb-1">
        <div className="row">
          <div className="col">
            <h2 id="current-period">
              All Events
            </h2>
          </div>
          <div className="col text-end">
          </div>
        </div>
      </div>
      <table className="table mx-1">
        <thead>
          <tr>
            <th>Event</th>
            <th>Starts At</th>
            <th>Ends At</th>
          </tr>
        </thead>
        <tbody>
        {events.map((event) => (
          <tr className="event px-1" key={event.id}>
            <td className="summary" width="60%">
              {event.summary}
            </td>
            <td className="starts_at" width="20%">
              {formatDateTime(event.starts_at)}
            </td>
            <td className="ends_at" width="20%">
              {formatDateTime(event.ends_at)}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}
