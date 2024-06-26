import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Event from '../Event.vue'

describe('Event', () => {
  it('renders properly', () => {
    const wrapper = mount(Event, {
      props: {
        event: {
          summary: 'Event',
          starts_at: '2024-06-26T16:00:00.000Z',
          ends_at: '2024-06-26T17:00:00.000Z'
        }
      }
    })

    expect(wrapper.get('.summary').text()).toEqual('Event')
    expect(wrapper.get('.starts_at').text()).toEqual('2024-06-26 16:00')
    expect(wrapper.get('.ends_at').text()).toEqual('2024-06-26 17:00')
  })
})
