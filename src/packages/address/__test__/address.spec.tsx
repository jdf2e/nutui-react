import React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Address } from '../address'

const addressData = {
  province: [
    { id: 1, name: '北京', title: 'B' },
    { id: 2, name: '广西', title: 'G' },
    { id: 3, name: '江西', title: 'J' },
    { id: 4, name: '四川', title: 'S' },
    { id: 5, name: '浙江', title: 'Z' },
  ],
  city: [
    { id: 7, name: '朝阳区', title: 'C' },
    { id: 8, name: '崇文区', title: 'C' },
    { id: 9, name: '昌平区', title: 'C' },
    { id: 6, name: '石景山区', title: 'S' },
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 10, name: '北苑', title: 'B' },
  ],
  country: [
    { id: 3, name: '八里庄街道', title: 'B' },
    { id: 9, name: '北苑', title: 'B' },
    { id: 4, name: '常营乡', title: 'C' },
  ],
  town: [],
}

const existAddress = [
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

test('Show Address', async () => {
  const { container } = render(
    <Address
      modelValue
      province={addressData.province}
      city={addressData.city}
      country={addressData.country}
      town={addressData.town}
      customAddressTitle="请选择所在地区"
    />
  )
  const regionItem = container.querySelectorAll('.nut-address__region-item')
  expect(regionItem.length).toBe(5)
})

test('choose address item', async () => {
  const changeHandle = jest.fn()
  const { container } = render(
    <Address
      modelValue
      province={addressData.province}
      city={addressData.city}
      country={addressData.country}
      town={addressData.town}
      customAddressTitle="请选择所在地区"
      onChange={changeHandle}
    />
  )
  const regionItem = container.querySelectorAll('.nut-address__region-item')[0]
    .firstElementChild
  regionItem && fireEvent.click(regionItem)

  await waitFor(() => {
    const regionItemNext = container.querySelectorAll(
      '.nut-address__tab-item '
    )[0]
    expect(changeHandle.mock.calls[0][0].next).toEqual('city')
    expect(regionItemNext.textContent).toEqual('北京')
  })
})

test('default choose address', async () => {
  const changeHandle = jest.fn()
  const { container } = render(
    <Address
      modelValue
      modelSelect={[1, 7, 3]}
      province={addressData.province}
      city={addressData.city}
      country={addressData.country}
      town={addressData.town}
      customAddressTitle="请选择所在地区"
    />
  )
  const regionItem = container.querySelectorAll('.nut-address__region-tab')[0]
  const contentItem = container.querySelectorAll('.nut-address__region-item')[0]
  await waitFor(() => {
    expect(regionItem.textContent).toEqual('北京朝阳区请选择')
    expect(contentItem.querySelector('.nutui-iconfont')).toBeEmptyDOMElement()
  })
})

test('exist address', async () => {
  const { container } = render(
    <Address
      modelValue
      type="exist"
      existAddress={existAddress}
      isShowCustomAddress={false}
      customAddressTitle="请选择所在地区"
    />
  )
  const existItem = container.querySelectorAll('.nut-address__exist-item')

  await waitFor(() => {
    expect(existItem.length).toBe(3)
  })
})

test('exist address choose event', async () => {
  const selectHandle = jest.fn()
  const { container } = render(
    <Address
      modelValue
      type="exist"
      existAddress={existAddress}
      customAddressTitle="请选择所在地区"
      isShowCustomAddress={false}
      onSelected={selectHandle}
    />
  )
  const existSecondItem = container.querySelectorAll(
    '.nut-address__exist-item'
  )[1].firstElementChild
  existSecondItem && fireEvent.click(existSecondItem)

  await waitFor(() => {
    expect(selectHandle.mock.calls[0][1].id).toBe(2)
  })
})

test('exist address & list address', async () => {
  const changeHandle = jest.fn()
  const switchModule = jest.fn()
  const { container } = render(
    <Address
      modelValue
      type="exist"
      province={addressData.province}
      city={addressData.city}
      country={addressData.country}
      town={addressData.town}
      existAddress={existAddress}
      customAddressTitle="请选择所在地区"
      switchModule={switchModule}
      onChange={changeHandle}
    />
  )
  const chooseBtn = container.querySelectorAll(
    '.nut-address__choose-other-btn'
  )[0]
  chooseBtn && fireEvent.click(chooseBtn)

  await waitFor(() => {
    expect(switchModule).toBeCalled()
  })

  const regionItem = container.querySelectorAll('.nut-address__region-item')
  expect(regionItem.length).toBe(5)
})
