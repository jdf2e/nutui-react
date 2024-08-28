import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { AnimatingNumbers } from '../animatingnumbers.taro'

const testUtils = new TestUtils()
describe('animatingnumbers-taro', () => {
  it('test value props', async () => {
    await testUtils.mount(AnimatingNumbers.CountUp, {
      props: {
        value: '678。56',
      },
    })

    const listNumbers = testUtils.queries.querySelectorAll('.nut-countup-list')
    expect(listNumbers.length).toBe(1)
  })
})
