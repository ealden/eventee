import { describe, it, expect } from 'vitest'

import {
  dateKey,
  dateFrom,
  dateTimeKey,
  dateTimeFrom,
  weekStart,
  weekFrom,
  monthStart,
  monthEnd,
  monthFrom,
  formatDate,
  formatTime,
  formatDateTime,
  formatDay,
  formatDayViewHeader,
  formatMonthViewHeader
} from '../dates.js'

describe('dateKey', () => {
  it('returns YYYY-MM-DD', () => {
    expect(dateKey('2024-06-21T11:00:00.000Z')).toEqual('2024-06-21')
  })
})

describe('dateFrom', () => {
  it('returns +offset from date', () => {
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), 1)).toEqual(new Date('2024-06-21T00:00:00.000Z'))
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), 2)).toEqual(new Date('2024-06-22T00:00:00.000Z'))
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), 3)).toEqual(new Date('2024-06-23T00:00:00.000Z'))
  }),
  it('returns -offset from date', () => {
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), -1)).toEqual(new Date('2024-06-19T00:00:00.000Z'))
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), -2)).toEqual(new Date('2024-06-18T00:00:00.000Z'))
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), -3)).toEqual(new Date('2024-06-17T00:00:00.000Z'))
  }),
  it('returns no offset from date', () => {
    expect(dateFrom(new Date('2024-06-20T00:00:00.000Z'), 0)).toEqual(new Date('2024-06-20T00:00:00.000Z'))
  })
})

describe('dateTimeKey', () => {
  it('returns YYYY-MM-DDTHH:00:00.000Z', () => {
    expect(dateTimeKey('2024-06-21T01:00:00.000Z')).toEqual('2024-06-21T01:00:00.000Z')
    expect(dateTimeKey('2024-06-21T01:23:45.678Z')).toEqual('2024-06-21T01:00:00.000Z')
  })
})

describe('dateTimeFrom', () => {
  it('returns +offset from hour', () => {
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), 1)).toEqual(new Date('2024-06-20T01:00:00.000Z'))
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), 2)).toEqual(new Date('2024-06-20T02:00:00.000Z'))
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), 3)).toEqual(new Date('2024-06-20T03:00:00.000Z'))
  }),
  it('returns -offset from hour', () => {
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), -1)).toEqual(new Date('2024-06-19T23:00:00.000Z'))
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), -2)).toEqual(new Date('2024-06-19T22:00:00.000Z'))
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), -3)).toEqual(new Date('2024-06-19T21:00:00.000Z'))
  }),
  it('returns no offset from hour', () => {
    expect(dateTimeFrom(new Date('2024-06-20T00:00:00.000Z'), 0)).toEqual(new Date('2024-06-20T00:00:00.000Z'))
  })
})

describe('weekStart', () => {
  it('returns start of the week', () => {
    const expected = new Date('2024-06-16T00:00:00.000Z')

    expect(weekStart(new Date('2024-06-16T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-17T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-18T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-19T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-20T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-21T00:00:00.000Z'))).toEqual(expected)
    expect(weekStart(new Date('2024-06-22T00:00:00.000Z'))).toEqual(expected)
  })
})

describe('weekFrom', () => {
  it('returns +offset from week start', () => {
    const expected = new Date('2024-06-23T00:00:00.000Z')

    expect(weekFrom(new Date('2024-06-16T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-17T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-18T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-19T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-20T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-21T00:00:00.000Z'), 1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-22T00:00:00.000Z'), 1)).toEqual(expected)
  }),
  it('returns -offset from week start', () => {
    const expected = new Date('2024-06-09T00:00:00.000Z')

    expect(weekFrom(new Date('2024-06-16T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-17T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-18T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-19T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-20T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-21T00:00:00.000Z'), -1)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-22T00:00:00.000Z'), -1)).toEqual(expected)
  }),
  it('returns no offset from week start', () => {
    const expected = new Date('2024-06-16T00:00:00.000Z')

    expect(weekFrom(new Date('2024-06-16T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-17T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-18T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-19T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-20T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-21T00:00:00.000Z'), 0)).toEqual(expected)
    expect(weekFrom(new Date('2024-06-22T00:00:00.000Z'), 0)).toEqual(expected)
  })
})

describe('monthStart', () => {
  it('returns start of the month', () => {
    expect(monthStart(new Date('2024-06-20T00:00:00.000Z'))).toEqual(new Date('2024-06-01T00:00:00.000Z'))
  })
})

describe('monthEnd', () => {
  it('returns end of the month', () => {
    expect(monthEnd(new Date('2024-01-01T00:00:00.000Z'))).toEqual(new Date('2024-01-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-02-02T00:00:00.000Z'))).toEqual(new Date('2024-02-29T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-03-03T00:00:00.000Z'))).toEqual(new Date('2024-03-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-04-04T00:00:00.000Z'))).toEqual(new Date('2024-04-30T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-05-05T00:00:00.000Z'))).toEqual(new Date('2024-05-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-06-06T00:00:00.000Z'))).toEqual(new Date('2024-06-30T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-07-07T00:00:00.000Z'))).toEqual(new Date('2024-07-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-08-08T00:00:00.000Z'))).toEqual(new Date('2024-08-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-09-09T00:00:00.000Z'))).toEqual(new Date('2024-09-30T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-10-10T00:00:00.000Z'))).toEqual(new Date('2024-10-31T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-11-11T00:00:00.000Z'))).toEqual(new Date('2024-11-30T00:00:00.000Z'))
    expect(monthEnd(new Date('2024-12-12T00:00:00.000Z'))).toEqual(new Date('2024-12-31T00:00:00.000Z'))

    // Not leap year
    expect(monthEnd(new Date('2025-02-13T00:00:00.000Z'))).toEqual(new Date('2025-02-28T00:00:00.000Z'))
  })
})

describe('monthFrom', () => {
  it('returns +offset from month start', () => {
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), 1)).toEqual(new Date('2024-07-01T00:00:00.000Z'))
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), 2)).toEqual(new Date('2024-08-01T00:00:00.000Z'))
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), 3)).toEqual(new Date('2024-09-01T00:00:00.000Z'))
  }),
  it('returns -offset from month start', () => {
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), -1)).toEqual(new Date('2024-05-01T00:00:00.000Z'))
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), -2)).toEqual(new Date('2024-04-01T00:00:00.000Z'))
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), -3)).toEqual(new Date('2024-03-01T00:00:00.000Z'))
  }),
  it('returns no offset from month start', () => {
    expect(monthFrom(new Date('2024-06-20T00:00:00.000Z'), 0)).toEqual(new Date('2024-06-01T00:00:00.000Z'))
  })
})

describe('formatDate', () => {
  it('returns YYYY-MM-DD', () => {
    expect(formatDate('2024-06-20T09:00:00.000Z')).toEqual('2024-06-20')
  })
})

describe('formatTime', () => {
  it('returns HH:mm', () => {
    expect(formatTime('2024-06-20T09:00:00.000Z')).toEqual('09:00')
  })
})

describe('formatDateTime', () => {
  it('returns YYYY-MM-DD HH:mm', () => {
    expect(formatDateTime('2024-06-21T11:00:00.000Z')).toEqual('2024-06-21 11:00')
  })
})

describe('formatDay', () => {
  it('returns D', () => {
    expect(formatDay('2024-06-20')).toEqual(20)
  })
})

describe('formatDayViewHeader', () => {
  it('returns MMM DD, YYYY', () => {
    expect(formatDayViewHeader(new Date('2024-06-21T02:00:00.000Z'))).toEqual('June 21, 2024')
  })
})

describe('formatMonthViewHeader', () => {
  it('returns MMM YYYY', () => {
    expect(formatMonthViewHeader(new Date('2024-01-01T00:00:00.000Z'))).toEqual('January 2024')
    expect(formatMonthViewHeader(new Date('2024-02-02T00:00:00.000Z'))).toEqual('February 2024')
    expect(formatMonthViewHeader(new Date('2024-03-03T00:00:00.000Z'))).toEqual('March 2024')
    expect(formatMonthViewHeader(new Date('2024-04-04T00:00:00.000Z'))).toEqual('April 2024')
    expect(formatMonthViewHeader(new Date('2024-05-05T00:00:00.000Z'))).toEqual('May 2024')
    expect(formatMonthViewHeader(new Date('2024-06-06T00:00:00.000Z'))).toEqual('June 2024')
    expect(formatMonthViewHeader(new Date('2024-07-07T00:00:00.000Z'))).toEqual('July 2024')
    expect(formatMonthViewHeader(new Date('2024-08-08T00:00:00.000Z'))).toEqual('August 2024')
    expect(formatMonthViewHeader(new Date('2024-09-09T00:00:00.000Z'))).toEqual('September 2024')
    expect(formatMonthViewHeader(new Date('2024-10-10T00:00:00.000Z'))).toEqual('October 2024')
    expect(formatMonthViewHeader(new Date('2024-11-11T00:00:00.000Z'))).toEqual('November 2024')
    expect(formatMonthViewHeader(new Date('2024-12-12T00:00:00.000Z'))).toEqual('December 2024')
  })
})
