'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

import { newDate } from '../common/dates.js'
import { groupEvents } from '../common/events.js'
import AllEventsView from '../components/AllEventsView'
import DayView from '../components/DayView'

const today = newDate(2024, 6, 18)
const currentDate = newDate(2024, 6, 18)

export default function App() {
  const [events, setEvents] = useState([])
  const [view, setView] = useState(0)

  const [groups, setGroups] = useState({})

  function allEventsView() {
    setView(0)
  }

  function dayView() {
    setView(1)
  }

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_HOST + 'api/events')
      .then(response => {
        setEvents(response.data)
        setGroups(groupEvents(response.data))
      })
  }, [])

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
                        className="btn btn-outline-primary"
                        onClick={allEventsView}>
                  All
                </button>
                <button id="nav-day-view"
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={dayView}>
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
        {(view == 0) && <AllEventsView events={events} />}
        {(view == 1) && <DayView events={groups} today={today} currentDate={currentDate} />}
      </div>
    </>
  )
}
