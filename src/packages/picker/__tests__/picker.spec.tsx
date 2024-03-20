import React, { useState } from 'react'
import { render, waitFor, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Picker from '../picker'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const simpleColumns = [
  { text: '南京市', value: 'NanJing' },
  { text: '无锡市', value: 'WuXi' },
  { text: '海北藏族自治区', value: 'ZangZu' },
  { text: '北京市', value: 'BeiJing' },
  { text: '连云港市', value: 'LianYunGang' },
]
const multipleColumns = [
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' },
  ],
  // 第二列
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' },
  ],
]
const multistageColumns = [
  {
    text: '浙江',
    value: 'ZheJiang',
    children: [
      {
        text: '杭州',
        value: 'HangZhou',
        children: [
          { text: '西湖区', value: 'XiHu' },
          { text: '余杭区', value: 'YuHang' },
        ],
      },
      {
        text: '温州',
        value: 'WenZhou',
        children: [
          { text: '鹿城区', value: 'LuCheng' },
          { text: '瓯海区', value: 'OuHai' },
        ],
      },
    ],
  },
  {
    text: '福建',
    value: 'FuJian',
    children: [
      {
        text: '福州',
        value: 'FuZhou',
        children: [
          { text: '鼓楼区', value: 'GuLou' },
          { text: '台江区', value: 'TaiJiang' },
        ],
      },
      {
        text: '厦门',
        value: 'XiaMen',
        children: [
          { text: '思明区', value: 'SiMing' },
          { text: '海沧区', value: 'HaiCang' },
        ],
      },
    ],
  },
]

test('renderLabel works', async () => {
  const { container } = render(<Picker visible options={simpleColumns} />)
  expect(container.textContent?.replace(/-/g, '')).toContain(
    '取消确认南京市无锡市海北藏族自治区北京市连云港市'
  )
})

test('simple list-data confirm  event', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <Picker
      visible
      options={simpleColumns}
      onConfirm={(options, value) => confirm(value)}
    />
  )
  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() => expect(confirm.mock.calls[0][0]).toEqual(['NanJing']))
})

test('simple list-data close event', async () => {
  const cancel = vi.fn()
  const { container } = render(
    <Picker visible options={simpleColumns} onClose={cancel} />
  )
  const cancelBtn = container.querySelectorAll('.nut-picker-cancel-btn')[0]
  fireEvent.click(cancelBtn)
  await waitFor(() => expect(cancel).toBeCalledTimes(1))
})

test('simple list-data default checked item', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <Picker
      visible
      options={simpleColumns}
      defaultValue={['WuXi']}
      onConfirm={(options, value) => confirm(value)}
    />
  )
  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() => expect(confirm.mock.calls[0][0]).toEqual(['WuXi']))
})

test('multiple list-data render', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <Picker
      visible
      options={multipleColumns}
      onConfirm={(options, value) => confirm(value)}
    />
  )
  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() =>
    expect(confirm.mock.calls[0][0]).toEqual(['Monday', 'Morning'])
  )
})

test('multistageColumns list-data render', async () => {
  const confirm = vi.fn()
  const { container } = render(
    <Picker
      visible
      options={multistageColumns}
      onConfirm={(options, value) => confirm(value)}
    />
  )
  const confirmBtn = container.querySelectorAll('.nut-picker-confirm-btn')[0]
  fireEvent.click(confirmBtn)
  await waitFor(() =>
    expect(confirm.mock.calls[0][0]).toEqual(['ZheJiang', 'HangZhou', 'XiHu'])
  )
})

test('async list-data render', async () => {
  const confirm = vi.fn()
  const PenderContent = () => {
    const [asyncColumns, setasyncColumns] = useState<PickerOption[] | []>([])

    setTimeout(() => {
      setasyncColumns(simpleColumns)
    }, 100)

    return (
      <Picker
        visible
        options={asyncColumns}
        onConfirm={(options, value) => confirm(value)}
      />
    )
  }
  const container = render(<PenderContent />)
  const confirmBtn = document.querySelectorAll('.nut-picker-confirm-btn')[0]

  await act(() => sleep(200))

  fireEvent.click(confirmBtn)
  await waitFor(() => expect(confirm.mock.calls[0][0]).toEqual(['NanJing']))
})
