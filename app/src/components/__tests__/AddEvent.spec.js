import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AddEvent from '../AddEvent.vue'

describe('AddEvent', () => {
  it('renders properly', () => {
    const wrapper = mount(AddEvent)

    expect(wrapper.find('#summary').exists()).toBe(true)
    expect(wrapper.find('#starts_at').exists()).toBe(true)
    expect(wrapper.find('#ends_at').exists()).toBe(true)
  })
})
