import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MonthView from '../MonthView.vue'

const options = {
  props: {
    events: {
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
      ]
    },
    today: new Date('2024-06-20'),
    modelValue: new Date('2024-06-20')
  }
}

describe('MonthView', () => {
  it('renders properly', () => {
    const wrapper = mount(MonthView, options)

    expect(wrapper.get('#current-period').text()).toEqual('June 2024')
    expect(wrapper.findAll('.event')).toHaveLength(5)
  }),
  it('shows last month', async () => {
    const wrapper = mount(MonthView, options)

    await wrapper.get('#prev-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('May 2024')
    expect(wrapper.findAll('.event')).toHaveLength(0)
  }),
  it('shows next month', async () => {
    const wrapper = mount(MonthView, options)

    await wrapper.get('#next-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('July 2024')
    expect(wrapper.findAll('.event')).toHaveLength(1)
  }),
  it('shows this month', async () => {
    const wrapper = mount(MonthView, options)

    await wrapper.get('#prev-period').trigger('click')
    await wrapper.get('#this-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('June 2024')
    expect(wrapper.findAll('.event')).toHaveLength(5)
  })
})
