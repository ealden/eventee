import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Event from '../Event.vue'

const event = {
  summary: 'Event',
  starts_at: '2024-06-26T16:00:00.000Z',
  ends_at: '2024-06-26T18:00:00.000Z'
}

describe('Event', () => {
  it('renders properly', () => {
    const wrapper = mount(Event, {
      props: {
        event: event,
        total: 1,
        index: 0
      }
    })

    expect(wrapper.get('.hour').text()).toEqual('16:00')
    expect(wrapper.get('.summary').text()).toEqual('Event')
    expect(wrapper.get('.starts_at').text()).toEqual('2024-06-26 16:00')
    expect(wrapper.get('.ends_at').text()).toEqual('2024-06-26 18:00')

    expect(wrapper.get('.event').attributes('style')).toEqual('width: 100%; height: 100px; left: 0%;')
  }),
  it('renders event 2 in group', () => {
    const wrapper = mount(Event, {
      props: {
        event: event,
        total: 2,
        index: 1
      }
    })

    expect(wrapper.get('.event').attributes('style')).toEqual('width: 50%; height: 100px; left: 50%;')
  }),
  it('renders event 3 in group', () => {
    const wrapper = mount(Event, {
      props: {
        event: event,
        total: 3,
        index: 2
      }
    })

    expect(wrapper.get('.event').attributes('style')).toEqual(
      'width: 33.333333333333336%; height: 100px; left: 66.66666666666667%;'
    )
  })
})
