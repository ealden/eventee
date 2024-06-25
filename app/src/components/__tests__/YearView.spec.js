import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import YearView from '../YearView.vue'

describe('YearView', () => {
  it('renders properly', () => {
    const wrapper = mount(YearView)

    expect(wrapper.get('#current-period').text()).toEqual('2024')
  })
})
