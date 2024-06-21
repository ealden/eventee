import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DayView from '../DayView.vue'

describe('DayView', () => {
  it('renders properly', () => {
    const wrapper = mount(DayView, {
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
    })

    const header = wrapper.get('[data-test="header"]')
    const events = wrapper.findAll('[data-test="event"]')

    expect(header.text()).toEqual('June 20, 2024')
    expect(events).toHaveLength(3)
  })
})
