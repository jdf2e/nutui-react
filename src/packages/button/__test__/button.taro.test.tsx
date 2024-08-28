import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Button } from '../button.taro'

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
describe('button-taro', () => {
  execFn(
    'should match snapshot',
    Button,
    {
      type: 'primary',
      shape: 'round',
      children: '主要按钮',
    },
    () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'should fill is outline',
    Button,
    {
      type: 'primary',
      shape: 'round',
      fill: 'outline',
      children: '主要按钮',
    },
    () => {
      expect(testUtils.queries.querySelector('.nut-button')).toHaveClass(
        'nut-button-outline'
      )
    }
  )
  execFn(
    'should props color when use fill correctly',
    Button,
    {
      type: 'primary',
      fill: 'outline',
      children: '主要按钮',
      color: 'blue',
    },
    () => {
      expect(testUtils.queries.querySelector('.nut-button')).toHaveStyle({
        'border-color': 'blue',
      })
    }
  )
  execFn(
    'should props color with no fill correctly',
    Button,
    {
      type: 'primary',
      children: '主要按钮',
      color: 'blue',
    },
    () => {
      expect(testUtils.queries.querySelector('.nut-button')).toHaveStyle({
        background: 'blue',
      })
    }
  )
  execFn(
    'should children correctly',
    Button,
    {
      type: 'primary',
      children: '主要按钮',
      color: 'blue',
    },
    () => {
      expect(testUtils.queries.querySelector('.nut-button')).toHaveTextContent(
        '主要按钮'
      )
    }
  )
  execFn(
    'should show loading correctly',
    Button,
    {
      type: 'primary',
      children: '主要按钮',
      color: 'blue',
      loading: true,
    },
    () => {
      expect(testUtils.queries.querySelector('.nut-button')).toHaveClass(
        'nut-button-loading'
      )
    }
  )
})
