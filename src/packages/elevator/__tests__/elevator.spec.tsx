import * as React from 'react'
import { render, fireEvent, act, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Elevator } from '../elevator'

const list = [
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1,
      },
    ],
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2,
      },
    ],
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 3,
      },
      {
        name: '广东',
        id: 4,
      },
    ],
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 5,
      },
      {
        name: '湖北',
        id: 6,
      },
    ],
  },
]

test('should render elevator list height after height props to be 200', () => {
  const { container } = render(<Elevator list={list} height={200} />)
  expect(container.querySelector('.nut-elevator-list')).toHaveAttribute(
    'style',
    'height: 200px;'
  )
})

test('should render list data when list props not empty', () => {
  const { container } = render(<Elevator list={list} height={200} />)
  expect(container.querySelectorAll('.nut-elevator-list-item').length).toBe(
    list.length
  )
})

test('should list item highlight when onItemClick trigger click', async () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      onItemClick={(key: string, item: any) => testClick(key, item)}
    />
  )

  const listItem = container.querySelectorAll('.nut-elevator-list-item-name')[0]
  await act(() => {
    fireEvent.click(listItem) // 模拟点击
  })
  expect(testClick).toBeCalled() // 断言 是否已经被点击
  waitFor(() => {
    expect(
      container.querySelector('.nut-elevator-list-item-name-highcolor')
        ?.innerHTML
    ).toBe('安徽')
  })
  expect(testClick).toBeCalledWith('A', { id: 1, name: '安徽' }) // 点击传参测试
})

test('onIndexClick trigger click', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      onIndexClick={(key: string) => testClick(key)}
    />
  )
  const listItem = container.querySelectorAll(
    '.nut-elevator-bars-inner-item'
  )[2]

  fireEvent.click(listItem) // 模拟点击
  expect(testClick).toBeCalled() // 断言 是否已经被点击
  expect(testClick).toBeCalledWith('G') // 点击传参测试
  fireEvent.click(listItem) // 模拟点击
  expect(testClick).toBeCalledTimes(2) // 被点击次数
})

test('index is sticky', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator
      list={list}
      height={200}
      sticky
      onIndexClick={(key: string) => testClick(key)}
    />
  )
  const listItem = container.querySelectorAll(
    '.nut-elevator-bars-inner-item'
  )[2]
  fireEvent.click(listItem) // 模拟点击
  setTimeout(() => {
    expect(container.querySelectorAll('.nut-elevator-list-fixed').length).toBe(
      1
    )
  }, 300)
})

// 测试 mode 属性
test('should render with vertical mode', () => {
  const { container } = render(<Elevator list={list} mode="vertical" />)
  expect(container.querySelector('.nut-elevator-vertical')).toBeTruthy()
})

// 测试 showKeys 属性
test('should not render elevator bars when showKeys is false', () => {
  const { container } = render(<Elevator list={list} showKeys={false} />)
  expect(container.querySelector('.nut-elevator-bars')).toBeNull()
})

// 测试自定义内容渲染（children属性）
test('should render custom content with children', () => {
  // 使用 Context 消费者组件
  const CustomItem = () => {
    // 在测试环境中，我们不能直接使用 useContext，因此直接渲染一个固定元素
    return <div className="custom-item">自定义内容</div>
  }

  const { container } = render(
    <Elevator list={list}>
      <CustomItem />
    </Elevator>
  )

  const customItems = container.querySelectorAll('.custom-item')
  expect(customItems.length).toBeGreaterThan(0)
  expect(customItems[0].textContent).toBe('自定义内容')
})

// 测试非数字高度值
test('should handle non-numeric height', () => {
  const { container } = render(<Elevator list={list} height="50vh" />)
  expect(container.querySelector('.nut-elevator-list')).toHaveAttribute(
    'style',
    'height: 50vh;'
  )
})

// 测试空列表渲染
test('should render empty when list is empty', () => {
  const { container } = render(<Elevator list={[]} />)
  expect(container.querySelectorAll('.nut-elevator-list-item').length).toBe(0)
})

// 测试非标准属性的渲染
test('should render with custom floor key', () => {
  const customList = [
    {
      customTitle: 'A',
      list: [
        {
          name: '安徽',
          id: 1,
        },
      ],
    },
    {
      customTitle: 'B',
      list: [
        {
          name: '北京',
          id: 2,
        },
      ],
    },
  ]

  const { container } = render(
    <Elevator list={customList} floorKey="customTitle" />
  )
  const barItems = container.querySelectorAll('.nut-elevator-bars-inner-item')

  expect(barItems[0].textContent).toBe('A')
  expect(barItems[1].textContent).toBe('B')
})

// 测试非字符串值的正确渲染
test('should render non-string values properly', () => {
  const numericKeyList = [
    {
      index: 1,
      list: [
        {
          name: '项目1',
          id: 1,
        },
      ],
    },
    {
      index: 2,
      list: [
        {
          name: '项目2',
          id: 2,
        },
      ],
    },
  ]

  const { container } = render(
    <Elevator list={numericKeyList} floorKey="index" />
  )
  const barItems = container.querySelectorAll('.nut-elevator-bars-inner-item')

  expect(barItems[0].textContent).toBe('1')
  expect(barItems[1].textContent).toBe('2')
})

// 测试列表项点击后索引值的正确传递
test('should pass correct index value when clicking bars item', () => {
  const testClick = vi.fn()
  const { container } = render(
    <Elevator list={list} onIndexClick={(key: string) => testClick(key)} />
  )

  // 点击第二个索引
  const indexItem = container.querySelectorAll(
    '.nut-elevator-bars-inner-item'
  )[1]
  fireEvent.click(indexItem)

  expect(testClick).toHaveBeenCalledWith('B')
})

// 测试列表滚动时高亮显示的正确性
test('should highlight the correct index when scrolling', async () => {
  const { container } = render(<Elevator list={list} height={200} />)

  // 模拟滚动
  const listView = container.querySelector('.nut-elevator-list-inner')

  await act(() => {
    // 手动触发点击索引，应该会导致滚动和高亮
    const indexItem = container.querySelectorAll(
      '.nut-elevator-bars-inner-item'
    )[2]
    fireEvent.click(indexItem)
  })

  // 检查是否正确高亮了第三个索引
  waitFor(() => {
    const activeIndex = container.querySelector(
      '.nut-elevator-bars-inner-item-active'
    )
    expect(activeIndex?.textContent).toBe('G')
  })
})

// 测试当存在垂直模式和sticky时，固定头部是否正确显示
test('should show fixed title in vertical mode with sticky', async () => {
  const { container } = render(
    <Elevator list={list} mode="vertical" sticky height={200} />
  )

  // 首先触发点击以模拟滚动
  await act(() => {
    const indexItem = container.querySelectorAll(
      '.nut-elevator-bars-inner-item'
    )[1]
    fireEvent.click(indexItem)

    // 模拟滚动事件
    const listView = container.querySelector('.nut-elevator-list-inner')
    if (listView) {
      Object.defineProperty(listView, 'scrollTop', { value: 50 })
      fireEvent.scroll(listView)
    }
  })

  // 等待滚动效果完成后检查固定标题
  waitFor(() => {
    const fixedTitle = container.querySelector('.nut-elevator-list-fixed-title')
    expect(fixedTitle).not.toBeNull()
  })
})
