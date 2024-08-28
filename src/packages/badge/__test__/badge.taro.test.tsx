import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Badge } from '../badge.taro'

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
describe('backtop-taro', () => {
  execFn(
    'should match snapshot',
    Badge,
    {
      value: 8,
    },
    () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn('should match value is string', Badge, { value: 'new' }, () => {
    const badgeContent =
      testUtils.queries.querySelectorAll('.nut-badge-content')[0]
    expect(badgeContent).toHaveTextContent('new')
  })
  execFn('should match max size', Badge, { value: 200, max: 9 }, () => {
    const badgeContent =
      testUtils.queries.querySelectorAll('.nut-badge-content')[0]
    expect(badgeContent.textContent).toBe('9+')
  })
  execFn('should match dot', Badge, { value: 20, dot: true }, () => {
    const badgeContent = testUtils.queries.querySelectorAll('.nut-badge-dot')
    expect(badgeContent.length).toBe(1)
  })
  execFn(
    'should match top、right: bad number',
    Badge,
    { value: 20, top: '--10', right: '0' },
    () => {
      const badgeContent =
        testUtils.queries.querySelectorAll('.nut-badge-content')[0]
      expect(badgeContent).toHaveStyle({ top: '0px' })
    }
  )
  execFn(
    'should match top、right: have px',
    Badge,
    { value: 20, top: '-10', right: '0' },
    () => {
      const badgeContent =
        testUtils.queries.querySelectorAll('.nut-badge-content')[0]
      expect(badgeContent).toHaveStyle({ top: '-10px', right: '0px' })
    }
  )
  execFn(
    'should match top、right: float',
    Badge,
    { value: 20, top: '-10.8', right: '0' },
    () => {
      const badgeContent =
        testUtils.queries.querySelectorAll('.nut-badge-content')[0]
      expect(badgeContent).toHaveStyle({ top: '-10.8px', right: '0px' })
    }
  )
  execFn(
    'should match custom color',
    Badge,
    { value: 20, color: 'red' },
    () => {
      const badgeContent =
        testUtils.queries.querySelectorAll('.nut-badge-content')[0]
      expect(badgeContent).toHaveStyle({ 'background-color': 'red' })
    }
  )
  execFn(
    'should match custom color when fill = outline',
    Badge,
    { value: 20, color: 'orange', fill: 'outline' },
    () => {
      const badgeContent =
        testUtils.queries.querySelectorAll('.nut-badge-content')[0]
      expect(badgeContent).toHaveStyle({
        border: '1px solid orange',
        color: 'orange',
        background: '#fff',
      })
    }
  )
})
