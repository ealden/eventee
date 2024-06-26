import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Events from '../Events.vue'

describe('Events', () => {
  it('renders properly', () => {
    const wrapper = mount(Events, {
      props: {
        events: [
          {
            summary: 'Event 1a',
            starts_at: '2024-06-26T16:00:00.000Z',
            ends_at: '2024-06-26T17:00:00.000Z'
          },
          {
            summary: 'Event 1b',
            starts_at: '2024-06-26T16:00:00.000Z',
            ends_at: '2024-06-26T17:00:00.000Z'
          }
        ]
      }
    })

    expect(wrapper.findAll('.event')).toHaveLength(2)
  })
})
