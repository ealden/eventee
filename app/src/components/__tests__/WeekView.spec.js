import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WeekView from '../WeekView.vue'

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
      '2024-06-21T06:00:00.000Z': [
        {
          summary: 'Event 4',
          starts_at: '2024-06-21T16:00:00.000Z',
          ends_at: '2024-06-21T17:00:00.000Z'
        }
      ],
      '2024-06-22T09:00:00.000Z': [
        {
          summary: 'Event 5',
          starts_at: '2024-06-23T09:00:00.000Z',
          ends_at: '2024-06-23T10:00:00.000Z'
        }
      ],
      '2024-06-30T00:00:00.000Z': [
        {
          summary: 'Event 6',
          starts_at: '2024-06-30T00:00:00.000Z',
          ends_at: '2024-06-30T01:00:00.000Z'
        }
      ]
    },
    today: new Date('2024-06-20'),
    isCurrentView: true
  }
}

const currentPeriod = '.current-period'
const event = '.event'

const prevWeek = '#prev-week'
const thisWeek = '#this-week'
const nextWeek = '#next-week'

describe('WeekView', () => {
  it('renders properly', () => {
    const wrapper = mount(WeekView, options)

    expect(wrapper.get(currentPeriod).text()).toEqual('June 2024')
    expect(wrapper.findAll(event)).toHaveLength(5)
  }),
  it('shows last week', async () => {
    const wrapper = mount(WeekView, options)

    await wrapper.get(prevWeek).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 2024')
    expect(wrapper.findAll(event)).toHaveLength(0)
  }),
  it('shows next week', async () => {
    const wrapper = mount(WeekView, options)

    await wrapper.get(nextWeek).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 2024')
    expect(wrapper.findAll(event)).toHaveLength(0)
  }),
  it('shows this week', async () => {
    const wrapper = mount(WeekView, options)

    await wrapper.get(prevWeek).trigger('click')
    await wrapper.get(thisWeek).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('June 2024')
    expect(wrapper.findAll(event)).toHaveLength(5)
  })
})
