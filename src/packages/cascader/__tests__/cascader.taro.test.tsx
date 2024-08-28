import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Cascader } from '../cascader'

const testUtils = new TestUtils()
const mockOptions = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' },
        ],
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' },
        ],
      },
    ],
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true,
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' },
        ],
      },
    ],
  },
]
const execFn = (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    cb()
    testUtils.unmout()
  })
}
describe('cascader-taro', () => {
  execFn(
    'options',
    Cascader,
    {
      value: ['福建', '福州', '鼓楼区'],
      options: mockOptions,
    },
    async () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
})
