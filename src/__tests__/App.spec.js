import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('shows all events view', () => {
    const wrapper = mount(App)

    expect(wrapper.find('#all-events-view').exists()).toBe(true)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  })
})
