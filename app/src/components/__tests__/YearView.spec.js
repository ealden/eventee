import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearView from '../YearView.vue'

const options = {
  props: {
    modelValue: new Date('2024-06-25')
  }
}

const currentPeriod = '#current-period'

const prevYear = '#prev-period'
const nextYear = '#next-period'

describe('YearView', () => {
  it('renders properly', () => {
    const wrapper = mount(YearView, options)

    expect(wrapper.get(currentPeriod).text()).toEqual('2024')
  }),
  it('shows last year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get(prevYear).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('2023')
  }),
  it('shows next year', async () => {
    const wrapper = mount(YearView, options)

    await wrapper.get(nextYear).trigger('click')

    expect(wrapper.get(currentPeriod).text()).toEqual('2025')
  })
})
