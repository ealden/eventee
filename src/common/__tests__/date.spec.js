import { describe, it, expect } from 'vitest'

import { formatDate, formatTime, formatDateTime, formatHour, formatDateToday, formatMonthYear, formatDay } from '../date.js'

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
