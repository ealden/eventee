const data = [
  { id: 1, summary: 'Event 1', starts_at: '2024-06-14 14:00', ends_at: '2024-06-14 15:00' },
  { id: 2, summary: 'Event 2', starts_at: '2024-06-14 15:00', ends_at: '2024-06-14 16:00' },
  { id: 3, summary: 'Event 3', starts_at: '2024-06-14 17:00', ends_at: '2024-06-14 18:00' },
  { id: 4, summary: 'Event 4', starts_at: '2024-06-17 14:00', ends_at: '2024-06-17 20:00' },
  { id: 5, summary: 'Event 5', starts_at: '2024-06-30 12:00', ends_at: '2024-06-30 18:00' }
];

export default function App() {
  const events = data.map(event =>
    <tr className="event px-1" key={event.id}>
      <td className="summary" width="60%">
        {event.summary}
      </td>
      <td className="starts_at" width="20%">
        {event.starts_at}
      </td>
      <td className="ends_at" width="20%">
        {event.ends_at}
      </td>
    </tr>
  );

  return (
    <>
      <div className="bg-body-secondary p-2 mb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <span className="fs-2">📆 Eventee</span>
            </div>
            <div className="col text-center">
              <div className="btn-group" role="group" aria-label="Navigation">
                <button id="nav-all-events-view"
                        type="button"
                        className="btn btn-outline-primary">
                  All
                </button>
                <button id="nav-day-view"
                        type="button"
                        className="btn btn-outline-primary">
                  Day
                </button>
                <button id="nav-week-view"
                        type="button"
                        className="btn btn-outline-primary">
                  Week
                </button>
                <button id="nav-month-view"
                        type="button"
                        className="btn btn-outline-primary">
                  Month
                </button>
                <button id="nav-year-view"
                        type="button"
                        className="btn btn-outline-primary">
                  Year
                </button>
              </div>
            </div>
            <div className="col text-end">
              <button id="nav-add-event"
                      type="button"
                      className="btn btn-success">
                + New Event
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
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
              {events}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
