import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

vi.mock('axios')

describe('App', () => {
  beforeEach(() => {
    axios
      .get
      .mockResolvedValueOnce({
        data: {
          today: '2024-06-18'
        }
      })
      .mockResolvedValueOnce({
        data: []
      })
  }),
  it('defaults to all events view', () => {
    const wrapper = mount(App)

    expect(wrapper.find('#all-events-view').exists()).toBe(true)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
    expect(wrapper.find('#year-view').exists()).toBe(false)
    expect(wrapper.find('#add-event').exists()).toBe(false)
  }),
  it('shows day view', async () => {
    const wrapper = mount(App)

    await wrapper.get('#nav-day-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(true)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
    expect(wrapper.find('#year-view').exists()).toBe(false)
    expect(wrapper.find('#add-event').exists()).toBe(false)
  }),
  it('shows week view', async () => {
    const wrapper = mount(App)

    await wrapper.get('#nav-week-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(true)
    expect(wrapper.find('#month-view').exists()).toBe(false)
    expect(wrapper.find('#year-view').exists()).toBe(false)
    expect(wrapper.find('#add-event').exists()).toBe(false)
  }),
  it('shows month view', async () => {
    const wrapper = mount(App)

    await wrapper.get('#nav-month-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(true)
    expect(wrapper.find('#year-view').exists()).toBe(false)
    expect(wrapper.find('#add-event').exists()).toBe(false)
  }),
  it('shows year view', async () => {
    const wrapper = mount(App)

    await wrapper.get('#nav-year-view').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
    expect(wrapper.find('#year-view').exists()).toBe(true)
    expect(wrapper.find('#add-event').exists()).toBe(false)
  }),
  it('shows add event', async () => {
    const wrapper = mount(App)

    await wrapper.get('#nav-add-event').trigger('click')

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
    expect(wrapper.find('#year-view').exists()).toBe(false)
    expect(wrapper.find('#add-event').exists()).toBe(true)
  })
})
