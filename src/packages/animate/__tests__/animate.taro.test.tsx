import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'

import { Animate } from '../animate.taro'

const testUtils = new TestUtils()
describe('animate-taro', () => {
  it('should change classname when using type prop ripple', async () => {
    const typeProp = 'ripple'
    await testUtils.mount(Animate, {
      props: {
        type: typeProp,
        loop: true,
      },
    })
    const animate = testUtils.queries.querySelector('.nut-ani-container')
    expect(animate).toHaveClass(`nut-animate-${typeProp}`)
  })
  it('trigger animate with loop', async () => {
    const typeProp = 'ripple'
    const animate = testUtils.queries.querySelectorAll('.nut-ani-container')[0]
    expect(animate).toHaveClass('loop')
    expect(animate).toHaveClass(`nut-animate-${typeProp}`)
  })
})
