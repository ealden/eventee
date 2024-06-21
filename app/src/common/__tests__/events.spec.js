import { describe, it, expect } from 'vitest'

import { groupEvents } from '../events.js'

describe('groupEvents', () => {
  it('returns grouped by date and dateTime', () => {
    const events = [
      {
        summary: 'Event 1',
        starts_at: '2024-06-20T16:00:00.000Z',
        ends_at: '2024-06-20T17:00:00.000Z'
      },
      {
        summary: 'Event 2',
        starts_at: '2024-06-20T17:00:00.000Z',
        ends_at: '2024-06-20T18:00:00.000Z'
      },
      {
        summary: 'Event 3',
        starts_at: '2024-06-20T17:00:00.000Z',
        ends_at: '2024-06-20T18:00:00.000Z'
      },
      {
        summary: 'Event 4',
        starts_at: '2024-06-21T16:00:00.000Z',
        ends_at: '2024-06-21T17:00:00.000Z'
      },
      {
        summary: 'Event 5',
        starts_at: '2024-06-30T09:00:00.000Z',
        ends_at: '2024-06-30T10:00:00.000Z'
      },
      {
        summary: 'Event 6',
        starts_at: '2024-07-01T00:00:00.000Z',
        ends_at: '2024-07-01T01:00:00.000Z'
      }
    ]

    const expected = {
      '2024-06-20': [
        {
          summary: 'Event 1',
          starts_at: '2024-06-20T16:00:00.000Z',
          ends_at: '2024-06-20T17:00:00.000Z'
        },
        {
          summary: 'Event 2',
          starts_at: '2024-06-20T17:00:00.000Z',
          ends_at: '2024-06-20T18:00:00.000Z'
        },
        {
          summary: 'Event 3',
          starts_at: '2024-06-20T17:00:00.000Z',
          ends_at: '2024-06-20T18:00:00.000Z'
        }
      ],
      '2024-06-21': [
        {
          summary: 'Event 4',
          starts_at: '2024-06-21T16:00:00.000Z',
          ends_at: '2024-06-21T17:00:00.000Z'
        }
      ],
      '2024-06-30': [
        {
          summary: 'Event 5',
          starts_at: '2024-06-30T09:00:00.000Z',
          ends_at: '2024-06-30T10:00:00.000Z'
        }
      ],
      '2024-07-01': [
        {
          summary: 'Event 6',
          starts_at: '2024-07-01T00:00:00.000Z',
          ends_at: '2024-07-01T01:00:00.000Z'
        }
      ],
      '2024-06-20T16:00:00.000Z': [
        {
          summary: 'Event 1',
          starts_at: '2024-06-20T16:00:00.000Z',
          ends_at: '2024-06-20T17:00:00.000Z'
        }
      ],
      '2024-06-20T17:00:00.000Z': [
        {
          summary: 'Event 2',
          starts_at: '2024-06-20T17:00:00.000Z',
          ends_at: '2024-06-20T18:00:00.000Z'
        },
        {
          summary: 'Event 3',
          starts_at: '2024-06-20T17:00:00.000Z',
          ends_at: '2024-06-20T18:00:00.000Z'
        }
      ],
      '2024-06-21T16:00:00.000Z': [
        {
          summary: 'Event 4',
          starts_at: '2024-06-21T16:00:00.000Z',
          ends_at: '2024-06-21T17:00:00.000Z'
        }
      ],
      '2024-06-30T09:00:00.000Z': [
        {
          summary: 'Event 5',
          starts_at: '2024-06-30T09:00:00.000Z',
          ends_at: '2024-06-30T10:00:00.000Z'
        }
      ],
      '2024-07-01T00:00:00.000Z': [
        {
          summary: 'Event 6',
          starts_at: '2024-07-01T00:00:00.000Z',
          ends_at: '2024-07-01T01:00:00.000Z'
        }
      ]
    }

    const actual = groupEvents(events)

    expect(actual).toEqual(expected)
  })
})
