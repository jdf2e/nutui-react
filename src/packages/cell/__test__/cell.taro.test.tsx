import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Cell } from '../cell.taro'

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
describe('cell-taro', () => {
  execFn(
    'prop title extra description test',
    Cell,
    {
      title: '我是标题',
      description: '我是描述',
      extra: '描述文字',
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-cell-title')?.innerHTML
      ).toBe('我是标题')
      expect(
        testUtils.queries.querySelector('.nut-cell-description')?.innerHTML
      ).toBe('我是描述')
      expect(
        testUtils.queries.querySelector('.nut-cell-extra')?.innerHTML
      ).toBe('描述文字')
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'prop',
    Cell,
    {
      title: 'URL 跳转',
      extra: 'https://m.jd.com/',
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-cell-extra')
      ).toBeInTheDocument()
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'prop',
    Cell,
    {
      title: 'URL 跳转',
      extra: 'https://m.jd.com/',
    },
    () => {
      expect(
        testUtils.queries.querySelector('.nut-cell-extra')
      ).toBeInTheDocument()
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
})
