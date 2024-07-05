import { describe, it, expect, vi } from 'vitest'
import axios from 'axios'

import { mount } from '@vue/test-utils'
import AddEvent from '../AddEvent.vue'

vi.mock('axios')

describe('AddEvent', () => {
  it('renders properly', () => {
    const wrapper = mount(AddEvent)

    expect(wrapper.find('#summary').exists()).toBe(true)
    expect(wrapper.find('#starts_at').exists()).toBe(true)
    expect(wrapper.find('#ends_at').exists()).toBe(true)

    expect(wrapper.find('#submit').exists()).toBe(true)
  }),
  it('adds a new event', async () => {
    const wrapper = mount(AddEvent)

    axios.post.mockResolvedValue({
      data: {}
    })

    await wrapper.get('#submit').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('after-create')
  })
})
