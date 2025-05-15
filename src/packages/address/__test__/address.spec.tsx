import React, { useRef } from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Star } from '@nutui/icons-react'
import { Address } from '../address'

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
  {
    value: '北京',
    text: '北京',
    wordCode: 'B',
    children: [
      {
        value: '朝阳区',
        text: '朝阳区',
        wordCode: 'C',
      },
      {
        value: '昌平区',
        text: '昌平区',
        wordCode: 'C',
      },
      {
        value: '大兴区',
        text: '大兴区',
        wordCode: 'D',
      },
      {
        value: '东城区',
        text: '东城区',
        wordCode: 'D',
      },
      {
        value: '房山区',
        text: '房山区',
        wordCode: 'F',
      },
      {
        value: '丰台区',
        text: '丰台区',
        wordCode: 'F',
      },
    ],
  },
]

const hotList = [
  { name: '北京' },
  { name: '上海' },
  { name: '广州' },
  { name: '深圳' },
  { name: '杭州' },
  { name: '南京' },
  { name: '苏州' },
  { name: '天津' },
  { name: '武汉' },
  { name: '长沙' },
]

const elevatorList = [
  {
    value: '安徽',
    text: '安徽',
    wordCode: 'A',
    children: [
      {
        value: '安庆市',
        text: '安庆市',
        wordCode: 'A',
        disabled: true,
        children: [
          {
            value: '大观区',
            text: '大观区',
            disabled: true,
            wordCode: 'D',
          },
          { value: '怀宁县', text: '怀宁县', wordCode: 'H' },
          { value: '岳西县', text: '岳西县', wordCode: 'Y' },
          { value: '迎江区', text: '迎江区', wordCode: 'Y' },
          { value: '宜秀区', text: '宜秀区', wordCode: 'Y' },
        ],
      },
      {
        value: '合肥市',
        text: '合肥市',
        wordCode: 'H',
        children: [
          { value: '合肥高新', text: '合肥高新', wordCode: 'H' },
          { value: '合肥经济', text: '合肥经济', wordCode: 'H' },
        ],
      },
      {
        value: '淮北市',
        text: '淮北市',
        wordCode: 'H',
        children: [
          { value: '杜集区', text: '杜集区', wordCode: 'D' },
          { value: '烈山区', text: '杜集区', wordCode: 'L' },
        ],
      },
      {
        value: '淮南市',
        text: '淮南市',
        wordCode: 'H',
        children: [{ value: '八公山区', text: '八公山区', wordCode: 'B' }],
      },
      {
        value: '黄山市',
        text: '黄山市',
        wordCode: 'H',
        children: [
          { value: '黄山区', text: '黄山区', wordCode: 'H' },
          { value: '徽州区', text: '徽州区', wordCode: 'H' },
        ],
      },
    ],
  },
  {
    value: '北京',
    text: '北京',
    wordCode: 'B',
    children: [
      {
        value: '朝阳区',
        text: '朝阳区',
        wordCode: 'C',
      },
      {
        value: '昌平区',
        text: '昌平区',
        wordCode: 'C',
      },
      {
        value: '大兴区',
        text: '大兴区',
        wordCode: 'D',
      },
      {
        value: '东城区',
        text: '东城区',
        wordCode: 'D',
      },
      {
        value: '房山区',
        text: '房山区',
        wordCode: 'F',
      },
      {
        value: '丰台区',
        text: '丰台区',
        wordCode: 'F',
      },
    ],
  },
  {
    value: '重庆',
    text: '重庆',
    wordCode: 'C',
  },
  {
    value: '福建',
    text: '福建',
    wordCode: 'F',
  },
  {
    value: '贵州',
    text: '贵州',
    wordCode: 'G',
  },
  {
    value: '广东',
    text: '广东',
    wordCode: 'G',
    children: [
      {
        value: '广州市',
        text: '广州市',
        wordCode: 'G',
        children: [
          {
            value: '白云区',
            text: '白云区',
            wordCode: 'B',
          },
          {
            value: '黄埔区',
            text: '黄埔区',
            wordCode: 'H',
          },
          {
            value: '花都区',
            text: '花都区',
            wordCode: 'H',
          },
          {
            value: '海珠区',
            text: '海珠区',
            wordCode: 'H',
          },
        ],
      },
      {
        value: '深圳市',
        text: '深圳市',
        wordCode: 'S',
        children: [
          {
            value: '宝安区',
            text: '宝安区',
            wordCode: 'B',
          },
          {
            value: '罗湖区',
            text: '罗湖区',
            wordCode: 'L',
          },
          {
            value: '龙岗区',
            text: '龙岗区',
            wordCode: 'L',
          },
          {
            value: '龙华区',
            text: '龙华区',
            wordCode: 'L',
          },
        ],
      },
    ],
  },
  {
    value: '广西',
    text: '广西',
    wordCode: 'G',
  },
  {
    value: '甘肃',
    text: '甘肃',
    wordCode: 'G',
  },
  {
    value: '河北',
    text: '河北',
    wordCode: 'H',
    disabled: true,
  },
  {
    value: '河南',
    text: '河南',
    wordCode: 'H',
    disabled: true,
  },
  {
    value: '湖南',
    text: '湖南',
    wordCode: 'H',
    disabled: true,
  },
  {
    value: '湖北',
    text: '湖北',
    wordCode: 'H',
    disabled: true,
  },
  {
    value: '山东',
    text: '山东',
    wordCode: 'S',
  },
  {
    value: '山西',
    text: '山西',
    wordCode: 'S',
  },
  {
    value: '上海',
    text: '上海',
    wordCode: 'S',
    children: [
      {
        value: '宝山区',
        text: '宝山区',
        wordCode: 'B',
      },
      {
        value: '黄埔区',
        text: '黄埔区',
        wordCode: 'H',
      },
      {
        value: '虹口区',
        text: '虹口区',
        wordCode: 'H',
      },
      {
        value: '嘉定区',
        text: '嘉定区',
        wordCode: 'J',
      },
      {
        value: '静安区',
        text: '静安区',
        wordCode: 'J',
      },
      {
        value: '金山区',
        text: '金山区',
        wordCode: 'J',
      },
    ],
  },
  {
    value: '陕西',
    text: '陕西',
    wordCode: 'S',
  },
  {
    value: '四川',
    text: '四川',
    wordCode: 'S',
  },
  {
    value: '浙江',
    text: '浙江',
    wordCode: 'Z',
  },
]

test('Address: show cascader false', async () => {
  const { container } = render(
    <Address visible options={optionsDemo1} title="选择地址" />
  )
  const items = container.querySelectorAll('.nut-cascader-item-title')
  expect(items[0]?.innerHTML).toBe('浙江')
  expect(items[2]?.innerHTML).toBe('福建')

  const title = container.querySelector('.nut-popup-title-title')
  expect(title?.innerHTML).toBe('选择地址')

  expect(container.innerHTML).toMatchSnapshot()
})

test('Address: show custom true', async () => {
  const { container } = render(
    <Address visible options={optionsDemo1} custom title="选择地址" />
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('Address: show elevator', async () => {
  const { container } = render(
    <Address visible type="elevator" options={elevatorList} title="选择地址" />
  )
  expect(container.innerHTML).toMatchSnapshot()

  const elevatorContainer = container.querySelectorAll(
    '.nut-elevator-list-item-name'
  )
  fireEvent.click(elevatorContainer[8])
  await waitFor(() => {
    const selected = container.querySelector('.nut-address-selected-item')
    expect(selected?.innerHTML).toBe('河北')
  })
})

test('Address: show elevator hotlist', async () => {
  const { container } = render(
    <Address
      visible
      type="elevator"
      hotList={hotList}
      options={optionsDemo1}
      title="选择地址"
    />
  )
  const hotitems = container.querySelectorAll('.nut-address-hotlist-item')
  expect(hotitems.length).toBe(10)
  expect(hotitems[0]).toHaveTextContent('北京')
  fireEvent.click(hotitems[0])
  await waitFor(() => {
    const hotitems = container.querySelectorAll('.nut-address-hotlist-item')
    expect(hotitems.length).toBe(0)
    const selected = container.querySelectorAll('.nut-address-selected-item')
    expect(selected?.length).toBe(1)
  })
})

test('Address: show custom icon', async () => {
  const { container } = render(
    <Address
      visible
      options={optionsDemo1}
      custom
      backIcon={<Star />}
      title="选择地址"
    />
  )
  expect(container.innerHTML).toMatchSnapshot()
})

test('Address: show custom icon', async () => {
  const onExistSelect = vi.fn()
  const onSwitch = vi.fn()
  const { container } = render(
    <Address
      visible
      type="exist"
      existList={existList}
      options={optionsDemo1}
      custom="选择其他地址"
      onExistSelect={onExistSelect}
      onSwitch={onSwitch}
    />
  )
  expect(container.innerHTML).toMatchSnapshot()
  const btn = container.querySelector('.nut-address-footer-btn') as Element
  fireEvent.click(btn)
  const leftIcon = container.querySelector('.nut-address-left-icon') as Element
  expect(leftIcon).toBeTruthy()
  fireEvent.click(leftIcon)
})

test('Address: options disabled', async () => {
  const { container } = render(<Address visible options={optionsDemo1} />)
  const items = container.querySelectorAll('.nut-cascader-item')
  expect(items[1]).toHaveClass('disabled')
})

test('Address: show exist', async () => {
  const { container } = render(
    <Address visible type="exist" existList={existList} title="选择地址" />
  )
  const items = container.querySelectorAll('.nut-address-exist-item-info')
  expect(items[0]?.innerHTML).toContain('通州区')
  expect(items[2]?.innerHTML).toContain('京东大厦')

  const title = container.querySelector('.nut-popup-title-title')
  expect(title?.innerHTML).toBe('选择地址')

  const icons = container.querySelectorAll('.nut-icon')
  expect(icons[0]).toHaveClass('nut-icon-Close')
  expect(icons[1]).toHaveClass('nut-icon-Check')
  expect(icons[2]).toHaveClass('nut-icon-Location')

  expect(container.innerHTML).toMatchSnapshot()
})

test('Address: choose exist item', async () => {
  const onSelect = vi.fn()
  const { container } = render(
    <Address
      visible
      type="exist"
      existList={existList}
      onExistSelect={onSelect}
    />
  )
  const items = container.querySelectorAll('.nut-address-exist-item-info')
  fireEvent.click(items[2])

  expect(onSelect).toBeCalledWith(existList[2])
})

test('Address: exist defaultIcon & selectIcon', async () => {
  const defaultIcon = <div className="default">123</div>
  const selectIcon = <div className="select">456</div>
  const { container } = render(
    <Address
      visible
      type="exist"
      existList={existList}
      defaultIcon={defaultIcon}
      selectIcon={selectIcon}
    />
  )
  expect(container.innerHTML).toMatchSnapshot()
  const items = container.querySelectorAll('.nut-address-exist-item')

  expect(items[0].innerHTML).toContain('<div class="default">123</div>')
  expect(items[1].innerHTML).toContain('<div class="default">123</div>')

  fireEvent.click(items[1])
  expect(items[1].innerHTML).toContain('<div class="select">456</div>')
})

describe('Address', () => {
  interface WrapperProps {
    visible: boolean
  }

  const Wrapper: React.FC<WrapperProps> = ({ visible }) => {
    const ref = useRef<any>()
    return (
      <div>
        <button onClick={() => ref.current?.open()}>Open</button>
        <button onClick={() => ref.current?.close()}>Close</button>
        <Address
          defaultVisible={visible}
          ref={ref}
          options={optionsDemo1}
          title="选择地址"
        />
      </div>
    )
  }

  it('should handle open and close methods', async () => {
    const screen = render(<Wrapper visible={false} />)

    fireEvent.click(screen.getByText('Open'))
    await waitFor(() => {
      const title = screen.container.querySelector('.nut-popup-title-title')
      expect(title?.innerHTML).toBe('选择地址')
    })

    fireEvent.click(screen.getByText('Close'))
    await waitFor(() => {
      expect(
        screen.container.querySelector('.nut-popup-title-title')?.innerHTML
      ).toBe('选择地址')
    })
  })
})
