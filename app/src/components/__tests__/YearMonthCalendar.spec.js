import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearMonthCalendar from '../YearMonthCalendar.vue'

describe('YearMonthCalendar', () => {
  it('renders properly', () => {
    const wrapper = mount(YearMonthCalendar, {
      props: {
        month: 6,
        events: [],
        calendar: {
          1: [],
          6: [
            [ null        , null        , null        , null        , null        , null        , '2024-06-01' ],
            [ '2024-06-02', '2024-06-03', '2024-06-04', '2024-06-05', '2024-06-06', '2024-06-07', '2024-06-08' ],
            [ '2024-06-09', '2024-06-10', '2024-06-11', '2024-06-12', '2024-06-13', '2024-06-14', '2024-06-15' ],
            [ '2024-06-16', '2024-06-17', '2024-06-18', '2024-06-19', '2024-06-20', '2024-06-21', '2024-06-22' ],
            [ '2024-06-23', '2024-06-24', '2024-06-25', '2024-06-26', '2024-06-27', '2024-06-28', '2024-06-29' ],
            [ '2024-06-30', null, null, null, null, null, null ]
          ],
        }
      }
    })

    expect(wrapper.get('.header').text()).toEqual('June')
    expect(wrapper.findAll('.day')).toHaveLength(42)
    expect(wrapper.findAll('.month-6')).toHaveLength(42)
    expect(wrapper.findAll('.has-events')).toHaveLength(0)
  })
})
