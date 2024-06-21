import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DayView from '../DayView.vue'

const options = {
  props: {
    events: {
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
      '2024-06-21T00:00:00.000Z': [
        {
          summary: 'Event 4',
          starts_at: '2024-06-21T00:00:00.000Z',
          ends_at: '2024-06-21T01:00:00.000Z'
        }
      ]
    },
    today: new Date('2024-06-20'),
    isCurrentView: true
  }
}

const currentPeriod = '.current-period'
const event = '.event'

const prevDay = '#prev-day'
const thisDay = '#this-day'
const nextDay = '#next-day'

describe('DayView', () => {
  it('renders properly', () => {
    const wrapper = mount(DayView, options)

    expect(wrapper.get(currentPeriod).text()).toEqual('June 20, 2024')
    expect(wrapper.findAll(event)).toHaveLength(3)
  }),
  it('shows yesterday', async () => {
    const wrapper = mount(DayView, options)

    await wrapper.get(prevDay).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 19, 2024')
    expect(wrapper.findAll(event)).toHaveLength(0)
  }),
  it('shows tomorrow', async () => {
    const wrapper = mount(DayView, options)

    await wrapper.get(nextDay).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 21, 2024')
    expect(wrapper.findAll(event)).toHaveLength(1)
  }),
  it('shows today', async () => {
    const wrapper = mount(DayView, options)

    await wrapper.get(prevDay).trigger('click')
    await wrapper.get(thisDay).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 20, 2024')
    expect(wrapper.findAll(event)).toHaveLength(3)
  })
})
