import React, { useState } from 'react'
import { render, waitFor, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import Picker from '../picker'
import { PickerOptions } from '@/packages/pickerview'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

interface PickerOption {
  label: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOptions
  className?: string | number
}

const simpleColumns = [
  [
    { label: '南京市', value: 'NanJing' },
    { label: '无锡市', value: 'WuXi' },
    { label: '海北藏族自治区', value: 'ZangZu' },
    { label: '北京市', value: 'BeiJing' },
    { label: '连云港市', value: 'LianYunGang' },
  ],
]
const multipleColumns = [
  [
    { label: '周一', value: 'Monday' },
    { label: '周二', value: 'Tuesday' },
    { label: '周三', value: 'Wednesday' },
    { label: '周四', value: 'Thursday' },
    { label: '周五', value: 'Friday' },
  ],
  // 第二列
  [
    { label: '上午', value: 'Morning' },
    { label: '下午', value: 'Afternoon' },
    { label: '晚上', value: 'Evening' },
  ],
]
const multistageColumns = [
  [
    {
      label: '浙江',
      value: 'ZheJiang',
      children: [
        {
          label: '杭州',
          value: 'HangZhou',
          children: [
            { label: '西湖区', value: 'XiHu' },
            { label: '余杭区', value: 'YuHang' },
          ],
        },
        {
          label: '温州',
          value: 'WenZhou',
          children: [
            { label: '鹿城区', value: 'LuCheng' },
            { label: '瓯海区', value: 'OuHai' },
          ],
        },
      ],
    },
    {
      label: '福建',
      value: 'FuJian',
      children: [
        {
          label: '福州',
          value: 'FuZhou',
          children: [
            { label: '鼓楼区', value: 'GuLou' },
            { label: '台江区', value: 'TaiJiang' },
          ],
        },
        {
          label: '厦门',
          value: 'XiaMen',
          children: [
            { label: '思明区', value: 'SiMing' },
            { label: '海沧区', value: 'HaiCang' },
          ],
        },
      ],
    },
  ],
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
      defaultValue={['NanJing']}
      options={simpleColumns}
      onConfirm={(selectedOptions, value) => confirm(value)}
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
      defaultValue={['Monday', 'Morning']}
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
      defaultValue={['ZheJiang', 'HangZhou', 'XiHu']}
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
    const [asyncColumns, setasyncColumns] = useState([])

    setTimeout(() => {
      setasyncColumns(simpleColumns)
    }, 100)

    return (
      <Picker
        visible
        defaultValue={['NanJing']}
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
