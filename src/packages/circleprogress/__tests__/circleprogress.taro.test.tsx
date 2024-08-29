import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { CircleProgress } from '../circleprogress.taro'

const testUtils = new TestUtils()
const execFn = (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    cb()
    testUtils.unmout()
  })
}
describe('circleprogress-taro', () => {
  execFn(
    'should change stoke when use width props',
    CircleProgress,
    {
      percent: 40,
      strokeWidth: 10,
      radius: 60,
    },
    () => {
      const element: any = testUtils.queries.querySelector(
        '.nut-circleprogress'
      )
      expect(element.style.width).toBe('120px')
      expect(element.style.height).toBe('120px')
    }
  )
  execFn(
    'should render text when use children',
    CircleProgress,
    {
      percent: 40,
      color: '#1988fa',
      children: '50%',
    },
    () => {
      const element: any = testUtils.queries.querySelector(
        '.nut-circleprogress-text'
      )
      expect(element).toHaveTextContent('50%')
    }
  )
})
