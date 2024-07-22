import { formatTime, formatDateTime } from '../common/dates.js'

export default function Event({
  event
} : Readonly<{
  event: Event
}>) {
  return (
    <div className="position-absolute col event border border-primary bg-primary-subtle bg-gradient px-1">
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
  )
}
