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
const mockKeyConfigOptions = [
  {
    name: '浙江',
    items: [
      {
        name: '杭州',
        disabled: true,
        items: [{ name: '西湖区' }, { name: '余杭区' }],
      },
      {
        name: '温州',
        items: [{ name: '鹿城区' }, { name: '瓯海区' }],
      },
    ],
  },
  {
    name: '湖南',
    disabled: true,
  },
  {
    name: '福建',
    items: [
      {
        name: '福州',
        items: [{ name: '鼓楼区' }, { name: '台江区' }],
      },
    ],
  },
]
const mockConvertOptions = [
  { value: '北京', text: '北京', nodeId: 1, nodePid: 0, sort: 2 },
  { value: '朝阳区', text: '朝阳区', nodeId: 11, nodePid: 1 },
  { value: '亦庄', text: '亦庄', nodeId: 111, nodePid: 11 },
  { value: '广东省', text: '广东省', nodeId: 2, nodePid: 0, sort: 1 },
  { value: '广州市', text: '广州市', nodeId: 21, nodePid: 2 },
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
  execFn(
    'options with valueKey/textKey/childrenKey',
    Cascader,
    {
      value: ['福建', '福州', '鼓楼区'],
      options: mockKeyConfigOptions,
      optionKey: {
        valueKey: 'name',
        textKey: 'name',
        childrenKey: 'items',
      },
    },
    async () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'options with format',
    Cascader,
    {
      value: ['广东省', '广州市'],
      options: mockKeyConfigOptions,
      format: {
        topId: 0,
        idKey: 'nodeId',
        pidKey: 'nodePid',
        sortKey: 'sort',
      },
    },
    async () => {
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'visible false',
    Cascader,
    {
      value: ['广东省', '广州市'],
      visible: false,
      options: mockOptions,
    },
    async () => {
      expect(testUtils.queries.querySelector('.nut-popup')).toBeNull()
    }
  )
  execFn(
    'visible true',
    Cascader,
    {
      value: ['广东省', '广州市'],
      visible: false,
      options: mockOptions,
    },
    async () => {
      expect(testUtils.queries.querySelector('.nut-popup')).toBe
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'value',
    Cascader,
    {
      options: mockOptions,
    },
    async () => {
      expect(
        testUtils.queries.querySelectorAll(
          '.nut-cascader-item[aria-checked="true"]'
        ).length
      ).toBe(0)
      expect(testUtils.html()).toMatchSnapshot()
    }
  )
  execFn(
    'init Value without defaultValue',
    Cascader,
    {
      visible: true,
      value: ['福建', '福州', '鼓楼区'],
      options: mockOptions,
    },
    async () => {
      const element = testUtils.queries.querySelectorAll(
        '.active.nut-tabpane .active .nut-cascader-item-title'
      )[0]
      expect(element).toHaveTextContent('鼓楼区')
    }
  )
  execFn(
    'init Value with both value and defaultValue',
    Cascader,
    {
      visible: true,
      value: ['福建', '福州', '台江区'],
      defaultValue: ['福建', '福州', '鼓楼区'],
      options: mockOptions,
    },
    async () => {
      const element = testUtils.queries.querySelectorAll(
        '.active.nut-tabpane .active .nut-cascader-item-title'
      )[0]
      expect(element).toHaveTextContent('台江区')
    }
  )
})
