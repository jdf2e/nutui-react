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
  const regionItem = container.querySelectorAll('.nut-address__region-item')[0]
  fireEvent.click(regionItem)
  await waitFor(() => {
    const regionItemNext = container.querySelectorAll(
      '.nut-address__region-item'
    )[0]
    // console.log(regionItemNext.contains())
  })
})
