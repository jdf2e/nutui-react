import React, { useEffect, useRef, useState } from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PickerView from '../pickerview'
import { PickerOptions } from '../types'

const listData = [
  [
    { value: 1, label: '南京市' },
    { value: 2, label: '无锡市' },
    { value: 3, label: '海北藏族自治区' },
    { value: 4, label: '北京市' },
    { value: 5, label: '连云港市' },
    { value: 8, label: '大庆市' },
    { value: 9, label: '绥化市' },
    { value: 10, label: '潍坊市' },
    { value: 12, label: '乌鲁木齐市' },
  ],
]

const MultiColumnData = [
  [
    { label: '周一', value: 'Monday' },
    { label: '周二', value: 'Tuesday' },
    { label: '周三', value: 'Wednesday' },
    { label: '周四', value: 'Thursday' },
    { label: '周五', value: 'Friday' },
  ],
  [
    { label: '上午', value: 'Morning' },
    { label: '下午', value: 'Afternoon' },
    { label: '晚上', value: 'Evening' },
  ],
]

const cascadeData = [
  [
    {
      value: 1,
      label: '北京',
      children: [
        {
          value: 1,
          label: '朝阳区',
        },
        {
          value: 2,
          label: '海淀区',
        },
        {
          value: 3,
          label: '大兴区',
        },
        {
          value: 4,
          label: '东城区',
        },
        {
          value: 5,
          label: '西城区',
        },
        {
          value: 6,
          label: '丰台区',
        },
      ],
    },
    {
      value: 2,
      label: '上海',
      children: [
        {
          value: 1,
          label: '黄埔区',
        },
        {
          value: 2,
          label: '长宁区',
        },
        {
          value: 3,
          label: '普陀区',
        },
        {
          value: 4,
          label: '杨浦区',
        },
        {
          value: 5,
          label: '浦东新区',
        },
      ],
    },
  ],
]

test('should match base', () => {
  const { container } = render(
    <PickerView defaultValue={[1]} options={listData} />
  )
  expect(container).toMatchSnapshot()
  expect(screen.getByText('南京市')).toBeInTheDocument()
})

test('should render tiled', () => {
  const { container } = render(
    <PickerView
      defaultValue={[1]}
      options={listData}
      threeDimensional={false}
    />
  )
  expect(container).toMatchSnapshot()
})

test('should render with Multi Column', () => {
  const { container } = render(
    <PickerView defaultValue={[1, 1]} options={MultiColumnData} />
  )
  const columns = container.querySelectorAll('.nut-pickerview-list')
  expect(columns.length).toBe(2)

  // 检查列内容
  const firstColumn = columns[0]
  expect(firstColumn.textContent).toContain('周一')
  expect(firstColumn.textContent).toContain('周二')

  const secondColumn = columns[1]
  expect(secondColumn.textContent).toContain('上午')
  expect(secondColumn.textContent).toContain('下午')
  expect(container).toMatchSnapshot()
})

test('should match onchange', async () => {
  const PenderContent = () => {
    const [value, setValue] = useState([])
    const [options, setInnerOptions] = useState<PickerOptions[]>([])

    useEffect(() => {
      const timer = setTimeout(() => {
        setInnerOptions(listData)
        setValue([1])
      }, 1000)

      return () => clearTimeout(timer) // 清理定时器
    }, [])

    return (
      <PickerView
        value={value}
        options={options}
        onChange={({ value }) => {
          if (value[0] === 1) {
            setValue([3])
          }
        }}
      />
    )
  }

  const { container } = render(<PenderContent />)

  await waitFor(() => {
    expect(container).toMatchSnapshot()
  })
})

test('should match cascade', () => {
  const { container } = render(
    <PickerView
      defaultValue={[1, 0]}
      renderLabel={(item) => `${item.label} | 测试`}
      options={cascadeData}
      onChange={() => {}}
    />
  )
  expect(container).toMatchSnapshot()
})
test('should match stopMomentum', async () => {
  const PenderContent = () => {
    function useRefs() {
      const refs = React.useRef<HTMLDivElement[]>([])

      const setRefs = React.useCallback(
        (index: number) => (el: HTMLDivElement) => {
          if (el) refs.current[index] = el
        },
        []
      )

      const reset = React.useCallback(() => {
        refs.current = []
      }, [])

      return [refs.current, setRefs as any, reset]
    }

    const [refs, setRefs] = useRefs()
    const first = useRef(true)

    return (
      <PickerView
        value={[0, 3]}
        options={cascadeData}
        setRefs={setRefs}
        onChange={() => {
          if (!first.current) {
            refs[0].stopMomentum()
          } else {
            first.current = false
          }
        }}
      />
    )
  }
  render(<PenderContent />)
})
