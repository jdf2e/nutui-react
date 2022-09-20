import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import NoticeBar from '@/packages/noticebar'

test('noticebar base test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'

  const { container } = render(<NoticeBar text={text} />)
  expect(container.querySelector('.content')?.innerHTML).toBe(
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  )

  expect(container).toMatchSnapshot()
})

test('scrollable test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'

  const { container } = render(<NoticeBar text={text} scrollable={false} />)
  setTimeout(() => {
    expect(container.querySelector('.content')).toHaveClass('nut-ellipsis')
    expect(container.querySelector('.content')).toHaveAttribute(
      'style',
      'animation-delay: 1s; animation-duration: 0s; transform: translateX(0);'
    )
  }, 300)

  expect(container).toMatchSnapshot()
})

test('closeMode & rightIcon test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const handleClick = jest.fn()
  const { container } = render(
    <NoticeBar
      text={text}
      closeMode
      click={handleClick}
      rightIcon="circle-close"
    />
  )
  setTimeout(() => {
    expect(container.querySelector('.right-icon')).toBeTruthy
    expect(container.querySelector('.nutui-iconfont')).toHaveClass(
      'nut-icon-circle-close'
    )
    fireEvent.click(container)
    expect(handleClick).toBeCalled()
  }, 300)
})

test('customer leftIcon test', () => {
  const { container } = render(
    <NoticeBar leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png">
      <a href="https://www.jd.com">京东商城</a>
    </NoticeBar>
  )
  setTimeout(() => {
    expect(container.querySelector('.left-icon')).toBeTruthy
    expect(container.querySelector('.left-icon')).toHaveAttribute(
      'style',
      'background-image: url("https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png");'
    )
    expect(container.querySelector('.content')?.innerHTML).toBe(
      '<a href="https://www.jd.com">京东商城</a>'
    )
  }, 300)
})

test('wrapable test', () => {
  const text =
    'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
  const { container } = render(<NoticeBar text={text} wrapable />)
  expect(container.querySelector('.nut-noticebar-page')).toHaveClass('wrapable')
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
      speed={10}
      standTime={1000}
      closeMode
    />
  )
  expect(container.querySelector('.nut-noticebar-vertical')).toBeTruthy
  expect(container.querySelector('.horseLamp_list')).toBeTruthy
})

test('vertical test', () => {
  const horseLamp1 = [
    'NoticeBar 公告栏',
    'Cascader 级联选择',
    'DatePicker 日期选择器',
    'CheckBox 复选按钮',
  ]
  const { container } = render(
    <NoticeBar direction="vertical" height={50} speed={10} standTime={1000}>
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
