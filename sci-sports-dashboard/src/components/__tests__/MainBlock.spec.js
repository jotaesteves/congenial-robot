import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainBlock from '../MainBlock.vue'

describe('MainBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(MainBlock)
    expect(wrapper.text()).toContain('Player Finder')
  })
})
