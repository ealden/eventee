import { describe, it, expect } from 'vitest'

import {
  dateToday,
  dateFrom,
  weekStart,
  weekFrom,
  monthStart,
  monthEnd,
  monthFrom,
  formatDate,
  formatTime,
  formatDateTime,
  formatHour,
  formatDateToday,
  formatMonthYear,
  formatDay
} from '../date.js'

describe('dateToday', () => {
  it('returns 2024-06-18', () => {
    expect(dateToday()).toEqual(new Date('2024-06-18T00:00:00Z'))
  })
})

describe('dateFrom', () => {
  it('returns +offset from date', () => {
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-06-21T00:00:00.000Z')
    const actual = dateFrom(date, 1)

    expect(actual).toEqual(expected)
  }),
  it('returns -offset from date', () => {
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-06-19T00:00:00.000Z')
    const actual = dateFrom(date, -1)

    expect(actual).toEqual(expected)
  }),
  it('returns no offset from date', () => {
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-06-20T00:00:00.000Z')
    const actual = dateFrom(date, 0)

    expect(actual).toEqual(expected)
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
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-06-01T00:00:00.000Z')
    const actual = monthStart(date)

    expect(actual).toEqual(expected)
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
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-07-01T00:00:00.000Z')
    const actual = monthFrom(date, 1)

    expect(actual).toEqual(expected)
  }),
  it('returns -offset from month start', () => {
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-05-01T00:00:00.000Z')
    const actual = monthFrom(date, -1)

    expect(actual).toEqual(expected)
  }),
  it('returns no offset from month start', () => {
    const date = new Date('2024-06-20T00:00:00.000Z')

    const expected = new Date('2024-06-01T00:00:00.000Z')
    const actual = monthFrom(date, 0)

    expect(actual).toEqual(expected)
  })
})

describe('formatDate', () => {
  it('returns yyyy-MM-dd', () => {
    const date = '2024-06-20T09:00:00.000Z'

    const expected = '2024-06-20'
    const actual = formatDate(date)

    expect(actual).toEqual(expected)
  })
})

describe('formatTime', () => {
  it('returns hh:mm', () => {
    const date = '2024-06-20T09:00:00.000Z'

    const expected = '09:00'
    const actual = formatTime(date)

    expect(actual).toEqual(expected)
  })
})

describe('formatDateTime', () => {
  it('returns yyyy-MM-ddThh:mm', () => {
    const date = '2024-06-20'
    const time = '09:00'

    const expected = '2024-06-20T09:00'
    const actual = formatDateTime(date, time)

    expect(actual).toEqual(expected)
  })
})

describe('formatHour', () => {
  it('returns hh:mm', () => {
    const i = 1

    const expected = '00:00'
    const actual = formatHour(i)

    expect(actual).toEqual(expected)
  })
})

describe('formatDateToday', () => {
  it('returns MMM dd, yyyy', () => {
    const date = '2024-06-20'

    const expected = 'June 20, 2024'
    const actual = formatDateToday(date)

    expect(actual).toEqual(expected)
  })
})

describe('formatMonthYear', () => {
  it('returns MMM yyyy', () => {
    const date = '2024-06-20'

    const expected = 'June 2024'
    const actual = formatMonthYear(date)

    expect(actual).toEqual(expected)
  })
})

describe('formatDay', () => {
  it('returns d', () => {
    const date = '2024-06-20'

    const expected = 20
    const actual = formatDay(date)

    expect(actual).toEqual(expected)
  })
})
