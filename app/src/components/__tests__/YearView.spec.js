import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearView from '../YearView.vue'

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
    today: new Date('2024-06-25'),
    modelValue: new Date('2024-06-25')
  }
}

describe('YearView', () => {
  it('renders properly', () => {
    const wrapper = mount(YearView, options)

    expect(wrapper.get('#current-period').text()).toEqual('2024')
    expect(wrapper.findAll('.has-events')).toHaveLength(4)
  }),
  it('shows last year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#prev-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2023')
    expect(wrapper.findAll('.has-events')).toHaveLength(0)
  }),
  it('shows next year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#next-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2025')
    expect(wrapper.findAll('.has-events')).toHaveLength(0)
  }),
  it('shows this year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#prev-period').trigger('click')
    await wrapper.get('#this-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2024')
    expect(wrapper.findAll('.has-events')).toHaveLength(4)
  })
})
