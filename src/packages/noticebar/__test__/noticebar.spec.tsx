import * as React from 'react'
import { useState } from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Fabulous } from '@nutui/icons-react'
import NoticeBar from '@/packages/noticebar'
import Image from '@/packages/image'

test('noticebar base test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'

  const { container } = render(<NoticeBar content={text} />)
  expect(
    container.querySelector('.nut-noticebar-box-wrap-content')?.innerHTML
  ).toBe(
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  )

  expect(container).toMatchSnapshot()
})

test('scrollable test', async () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'

  const { container } = render(<NoticeBar content={text} scrollable={false} />)
  await waitFor(() => {
    expect(
      container.querySelector('.nut-noticebar-box-wrap-content')
    ).toHaveClass('nut-ellipsis')
    expect(
      container.querySelector('.nut-noticebar-box-wrap-content')
    ).toHaveAttribute(
      'style',
      'animation-delay: 1s; animation-duration: 0s; transform: translateX(0);'
    )
  })

  expect(container).toMatchSnapshot()
})

test('closeable & right test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const { container } = render(
    <NoticeBar content={text} right="circle-close" />
  )
  setTimeout(() => {
    expect(container.querySelector('.nut-noticebar-box-right')).toBeTruthy
  }, 300)
})

test('closeable & rightIcon test', async () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const handleClick = vi.fn()
  const { container } = render(
    <NoticeBar
      content={text}
      closeable
      onClose={handleClick}
      rightIcon={<Fabulous />}
    />
  )

  const icon = container.querySelector('.nut-noticebar-box-right-icon')
  expect(icon).toBeTruthy
  expect(
    container.querySelector('.nut-noticebar-box-right-icon .nut-icon')
  ).toHaveClass('nut-icon-Fabulous')
  const closeIcon = container.querySelector('.nut-icon-Fabulous') || container
  await act(() => {
    fireEvent.click(closeIcon)
    expect(handleClick).toBeCalled()
  })
})

test('customer leftIcon test', () => {
  const { container } = render(
    <NoticeBar
      leftIcon={
        <Image src="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png" />
      }
    >
      <a href="https://www.jd.com">京东商城</a>
    </NoticeBar>
  )
  expect(container.querySelector('.nut-noticebar-box-left-icon')).toBeTruthy
  expect(container.querySelector('.nut-noticebar-box-left-icon .nut-image'))
    .toBeTruthy
  expect(
    container.querySelector('.nut-noticebar-box-wrap-content')?.innerHTML
  ).toBe('<a href="https://www.jd.com">京东商城</a>')
})

test('wrap test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const { container } = render(<NoticeBar content={text} wrap />)
  expect(container.querySelector('.nut-noticebar-box')).toHaveClass(
    'nut-noticebar-box-wrapable'
  )
})

test('vertical test', () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const { container } = render(
    <NoticeBar
      direction="vertical"
      list={horseLamp1}
      speed={100}
      duration={1000}
      closeable
    />
  )
  expect(container.querySelector('.nut-noticebar-vertical')).toBeTruthy
  expect(container.querySelector('.nut-noticebar-box-horseLamp-list'))
    .toBeTruthy
})

test('vertical test', () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const { container } = render(
    <NoticeBar direction="vertical" height={50} speed={10} duration={1000}>
      {horseLamp1.map((item, index) => {
        return (
          <div
            className="custom-item"
            style={{ height: '50px', lineHeight: '50px' }}
            key={index}
          >
            {item}
          </div>
        )
      })}
    </NoticeBar>
  )
  expect(container.querySelector('.custom-item')).toBeTruthy
})

test('vertical test move', async () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const { container } = render(
    <NoticeBar
      direction="vertical"
      list={horseLamp1}
      speed={10}
      duration={1000}
      height={30}
      closeable
    />
  )
  await act(() => {
    expect(
      container.querySelector('.nut-noticebar-box-horseLamp-list')
    ).toHaveAttribute('style', 'transition: all 0.8s; margin-top: -30px;')
  })
})

test('align center test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const { container } = render(<NoticeBar content={text} align="center" />)
  expect(container.querySelector('.nut-noticebar-box-center')).toBeTruthy
  expect(
    container.querySelector('.nut-noticebar-box-wrap-content')
  ).toHaveClass('nut-ellipsis')
  expect(container).toMatchSnapshot()
})

test('event test', async () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const handleClick = vi.fn()
  const { container } = render(
    <NoticeBar content={text} onClick={handleClick} />
  )

  const box = container.querySelectorAll('.nut-noticebar-box')[0]
  await act(() => {
    fireEvent.click(box)
    expect(handleClick).toBeCalled()
  })
})

test('vertical event test', async () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const handleClick = vi.fn()
  const { container } = render(
    <NoticeBar
      direction="vertical"
      list={horseLamp1}
      onItemClick={handleClick}
    />
  )

  const box = container.querySelectorAll(
    '.nut-noticebar-box-horseLamp-list-item'
  )[0]
  fireEvent.click(box)
  await waitFor(() => expect(handleClick).toBeCalled())
})

test('vertical container height calculation with children', async () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const height = 50
  const { container } = render(
    <NoticeBar direction="vertical" height={height} speed={10} duration={1000}>
      {horseLamp1.map((item, index) => {
        return (
          <div
            className="custom-item"
            style={{ height: `${height}px`, lineHeight: `${height}px` }}
            key={index}
          >
            {item}
          </div>
        )
      })}
    </NoticeBar>
  )

  await waitFor(
    () => {
      const wrapElement = container.querySelector('.nut-noticebar-box-wrap')
      if (wrapElement) {
        // 验证容器高度应该是 (childCount + 1) * height
        // childCount = 4, height = 50, 所以期望高度是 (4 + 1) * 50 = 250px
        const expectedHeight = `${(horseLamp1.length + 1) * height}px`
        console.log(wrapElement, 'wrapElement')
        expect(wrapElement).toHaveStyle(`height: ${expectedHeight}`)
      }
    },
    // 由于init中并不会立刻设置样式，所以需要等待一段时间
    { timeout: 3000 }
  )
})

test('dynamic children update test', async () => {
  let setList: any
  const height = 40

  const TestComponent = () => {
    const [list, updateList] = useState(['原始项目1', '原始项目2', '原始项目3'])
    setList = updateList

    return (
      <NoticeBar direction="vertical" height={height} speed={10} duration={500}>
        {list.map((item, index) => (
          <div
            className="custom-item"
            style={{ height: `${height}px`, lineHeight: `${height}px` }}
            key={index}
          >
            {item}
          </div>
        ))}
      </NoticeBar>
    )
  }

  const { container } = render(<TestComponent />)

  // 等待初始渲染完成
  await waitFor(() => {
    const wrapElement = container.querySelector('.nut-noticebar-box-wrap')
    expect(wrapElement).toHaveStyle('height: 160px') // (3 + 1) * 40

    // 1. 初始时容器的垂直位移为0（显示第一项）
    expect(wrapElement).toHaveStyle('transform: translate3D(0,0px,0)')

    const items = container.querySelectorAll('.custom-item')
    expect(items).toHaveLength(3)
    expect(items[0]).toHaveTextContent('原始项目1')
  })

  // 等待轮播进行一段时间，确保当前不是第一项
  await waitFor(
    () => {
      const wrapElement = container.querySelector('.nut-noticebar-box-wrap')
      const transform = wrapElement
        ?.getAttribute('style')
        ?.match(/transform:\s*translate3D\(([^,]+),([^,]+),([^)]+)\)/)
      const yOffset = transform ? transform[2].trim() : '0px'

      // 验证已经轮播到非第一项（垂直偏移不为0）
      expect(yOffset).not.toBe('0px')
    },
    { timeout: 2000 }
  ) // 给足够时间让轮播发生

  // 变更列表数据
  act(() => {
    setList(['新项目A', '新项目B', '新项目C', '新项目D'])
  })

  await waitFor(() => {
    // 验证容器高度更新为新的计算值
    const wrapElement = container.querySelector('.nut-noticebar-box-wrap')
    expect(wrapElement).toHaveStyle('height: 200px') // (4 + 1) * 40

    // 验证变更后重置回第一项：
    // 1. 容器的垂直位移重置为0
    expect(wrapElement).toHaveStyle('transform: translate3D(0,0px,0)')

    // 2. 第一个子项没有额外的transform
    const firstItem = container.querySelector(
      '.custom-item:first-child'
    ) as HTMLElement
    expect(firstItem.style.transform).toBe('')

    // 验证元素结构更新：应该有4个项目
    const items = container.querySelectorAll('.custom-item')
    expect(items).toHaveLength(4)

    // 验证当前显示的是新列表的第一项内容
    expect(items[0]).toHaveTextContent('新项目A')
    expect(items[1]).toHaveTextContent('新项目B')
    expect(items[2]).toHaveTextContent('新项目C')
    expect(items[3]).toHaveTextContent('新项目D')

    // 验证样式更新：每个item的高度样式
    items.forEach((item) => {
      expect(item).toHaveStyle(`height: ${height}px`)
      expect(item).toHaveStyle(`line-height: ${height}px`)
    })
  })
})
