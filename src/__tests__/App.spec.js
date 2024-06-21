import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('shows all events view', () => {
    const wrapper = mount(App, {
      props: {
        today: new Date('2024-06-18'),
        view: 0
      }
    })

    expect(wrapper.find('#all-events-view').exists()).toBe(true)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows day view', () => {
    const wrapper = mount(App, {
      props: {
        today: new Date('2024-06-18'),
        view: 1
      }
    })

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(true)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows week view', () => {
    const wrapper = mount(App, {
      props: {
        today: new Date('2024-06-18'),
        view: 2
      }
    })

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(true)
    expect(wrapper.find('#month-view').exists()).toBe(false)
  }),
  it('shows month view', () => {
    const wrapper = mount(App, {
      props: {
        today: new Date('2024-06-18'),
        view: 3
      }
    })

    expect(wrapper.find('#all-events-view').exists()).toBe(false)
    expect(wrapper.find('#day-view').exists()).toBe(false)
    expect(wrapper.find('#week-view').exists()).toBe(false)
    expect(wrapper.find('#month-view').exists()).toBe(true)
  })
})
