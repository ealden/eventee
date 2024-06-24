import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

const options = {
  props: {
    today: new Date('2024-06-18'),
  }
}

describe('App', () => {
  it('defaults to all events view', () => {
    const wrapper = mount(App, options)

    expect(wrapper.find('#all-events-view').exists()).toBe(true)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows day view', async () => {
    const wrapper = mount(App, options)

    await wrapper.get('#nav-day-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(true)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows week view', async () => {
    const wrapper = mount(App, options)

    await wrapper.get('#nav-week-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(true)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows month view', async () => {
    const wrapper = mount(App, options)

    await wrapper.get('#nav-month-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(true)
  })
})
