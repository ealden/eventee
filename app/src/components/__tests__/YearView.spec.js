import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearView from '../YearView.vue'

const options = {
  props: {
    today: new Date('2024-06-25'),
    modelValue: new Date('2024-06-25')
  }
}

describe('YearView', () => {
  it('renders properly', () => {
    const wrapper = mount(YearView, options)

    expect(wrapper.get('#current-period').text()).toEqual('2024')
  }),
  it('shows last year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#prev-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2023')
  }),
  it('shows next year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#next-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2025')
  }),
  it('shows this year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get('#prev-period').trigger('click')
    await wrapper.get('#this-period').trigger('click')

    expect(wrapper.get('#current-period').text()).toEqual('2024')
  })
})
