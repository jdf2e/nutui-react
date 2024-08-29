import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Address } from '../address.taro'

const testUtils = new TestUtils()
const existList = [
  {
    id: 1,
    addressDetail: '',
    cityName: '次渠镇',
    countyName: '通州区',
    provinceName: '北京市',
    selectedAddress: true,
    townName: '',
    name: '探探鱼',
    phone: '182****1718',
  },
  {
    id: 2,
    addressDetail: '',
    cityName: '钓鱼岛全区',
    countyName: '',
    provinceName: '钓鱼岛',
    selectedAddress: false,
    townName: '',
    name: '探探鱼',
    phone: '182****1718',
  },
  {
    id: 3,
    addressDetail: '京东大厦',
    cityName: '大兴区',
    countyName: '科创十一街18号院',
    provinceName: '北京市',
    selectedAddress: false,
    townName: '',
    name: '探探鱼',
    phone: '182****1718',
  },
]
const optionsDemo1 = [
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区', disabled: true },
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
    children: [
      {
        value: '长沙',
        text: '长沙',
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
describe('address-taro', () => {
  it('Address: show custom', async () => {
    await testUtils.mount(Address, {
      props: {
        visible: true,
        options: optionsDemo1,
        title: '选择地址',
      },
    })

    const items = testUtils.queries.querySelectorAll('.nut-cascader-item-title')
    const title = testUtils.queries.querySelector('.nut-popup-title-title')
    expect(items[0]?.innerHTML).toBe('浙江')
    expect(items[2]?.innerHTML).toBe('福建')
    expect(title?.innerHTML).toBe('选择地址')
    expect(testUtils.html()).toMatchSnapshot()
  })

  it('Address: options disabled', async () => {
    const options = testUtils.queries.querySelectorAll('.nut-cascader-item')
    const disableItem = options[1]
    expect(disableItem).toHaveClass('disabled')
  })

  // it('Address: show exist', async () => {
  //   await testUtils.mount(Address, {
  //     props: {
  //       visible: true,
  //       type: 'exist',
  //       existList,
  //       title: '选择地址',
  //     },
  //   })

  //   const items = testUtils.queries.querySelectorAll(
  //     '.nut-address-exist-item-info'
  //   )
  //   const title = testUtils.queries.querySelector('.nut-popup-title-title')

  //   const icons = testUtils.queries.querySelectorAll(
  //     '.nut-address-exist .nut-icon'
  //   )
  //   expect(title?.innerHTML).toBe('选择地址')
  //   expect(items[0]?.innerHTML).toContain('通州区')
  //   expect(items[2]?.innerHTML).toContain('京东大厦')
  //   expect(icons[0]).toHaveClass('nut-icon-Check')
  //   expect(icons[1]).toHaveClass('nut-icon-Location')
  //   expect(icons[2]).toHaveClass('nut-icon-Location')
  //   expect(testUtils.html()).toMatchSnapshot()
  // })

  // test('Address: exist defaultIcon & selectIcon', async () => {
  //   const defaultIcon = <div className="default">123</div>
  //   const selectIcon = <div className="select">456</div>
  //   const { container } = render(
  //     <Address
  //       visible
  //       type="exist"
  //       existList={existList}
  //       defaultIcon={defaultIcon}
  //       selectIcon={selectIcon}
  //     />
  //   )
  //   expect(container.innerHTML).toMatchSnapshot()
  //   const items = container.querySelectorAll('.nut-address-exist-item')

  //   expect(items[0].innerHTML).toContain('<div class="default">123</div>')
  //   expect(items[1].innerHTML).toContain('<div class="default">123</div>')

  //   fireEvent.click(items[1])
  //   expect(items[1].innerHTML).toContain('<div class="select">456</div>')
  // })
})
