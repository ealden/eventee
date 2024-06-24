import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ViewHeader from '../ViewHeader.vue'

describe('ViewHeader', () => {
  it('renders properlty', async () => {
    const wrapper = mount(ViewHeader, {
      props: {
        header: 'June 2024'
      }
    })

    expect(wrapper.get('#current-period').text()).toEqual('June 2024')
  }),
  it('shows prev period', async () => {
    let actionClicked = false

    const wrapper = mount(ViewHeader, {
      props: {
        prevAction: () => actionClicked = true
      }
    })

    await wrapper.get('#prev-period').trigger('click')

    expect(actionClicked).toEqual(true)
  }),
  it('shows this period', async () => {
    let actionClicked = false

    const wrapper = mount(ViewHeader, {
      props: {
        thisAction: () => actionClicked = true
      }
    })

    await wrapper.get('#this-period').trigger('click')

    expect(actionClicked).toEqual(true)
  }),
  it('shows next period', async () => {
    let actionClicked = false

    const wrapper = mount(ViewHeader, {
      props: {
        nextAction: () => actionClicked = true
      }
    })

    await wrapper.get('#next-period').trigger('click')

    expect(actionClicked).toEqual(true)
  })
})
