import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AllEventsView from '../AllEventsView.vue'

describe('AllEventsView', () => {
  it('renders properly', () => {
    const wrapper = mount(AllEventsView, {
      props: {
        events: [
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
            starts_at: '2024-06-20T18:00:00.000Z',
            ends_at: '2024-06-20T19:00:00.000Z'
          }
        ],
        isCurrentView: true
      }
    })

    const header = wrapper.get('[data-test="header"]')
    const events = wrapper.findAll('[data-test="event"]')

    expect(header.text()).toEqual('All Events')
    expect(events).toHaveLength(3)
  })
})
