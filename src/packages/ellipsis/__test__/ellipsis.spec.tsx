import * as React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { useEffect, useState } from 'react'
import Ellipsis from '@/packages/ellipsis'

const content =
  'NutUI3.0上线后我们研发团队也在不断的优化、测试、使用、迭代 Vue3 的相关组件，但是在跨端小程序的开发过程中，发现没有合适的组件库可以支持多端开发。为了填补这一空白，同时为了优化开发者体验，让 NutUI 能够为更多的开发者带来便利，我们决定在 NutUI 中增加小程序多端适配的能力。'

test('Ellipsis Props Direction Start', () => {
  const { container } = render(<Ellipsis content={content} direction="start" />)
  expect(container).toMatchSnapshot()
})

test('Ellipsis Props Direction Middle', () => {
  const { container } = render(
    <Ellipsis content={content} direction="middle" />
  )
  expect(container).toMatchSnapshot()
})

test('Ellipsis Props Rows', () => {
  const { container } = render(
    <Ellipsis content={content} direction="start" rows="3" />
  )
  expect(container).toMatchSnapshot()
})

vi.useFakeTimers()
test('Ellipsis Memory Leak', () => {
  const App = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      const timer = setInterval(() => {
        act(() => {
          setCount(count + 1)
        })
      }, 1000)
      return () => clearInterval(timer)
    })
    return <Ellipsis content={`${count}`} direction="end" />
  }
  const { baseElement } = render(<App />)
  const elementCount = baseElement.children.length
  vi.advanceTimersByTime(2000)
  const newElementCount = baseElement.children.length
  expect(newElementCount).toBe(elementCount)
})

test('Ellipsis click text', async () => {
  const testClick = vi.fn()
  const { container } = render(
    <Ellipsis
      content={content}
      direction="start"
      expandText="展开"
      collapseText="收起"
      onClick={() => testClick()}
    />
  )
  expect(container).toMatchSnapshot()
  const dom = container.querySelector('.nut-ellipsis') as HTMLElement
  await act(() => {
    fireEvent.click(dom)
  })
  expect(testClick).toBeCalled()
})

test('Ellipsis Props expand and collapse', async () => {
  const testClick = vi.fn()
  const { container } = render(
    <Ellipsis
      content={content}
      direction="start"
      expandText="展开"
      collapseText="收起"
      onChange={() => testClick()}
    />
  )
  expect(container).toMatchSnapshot()
  const dom = container.querySelectorAll('.nut-ellipsis-text')[0] as HTMLElement
  if (dom) {
    expect(dom).toHaveTextContent('展开')
    await act(() => {
      fireEvent.click(dom)
    })
    expect(testClick).toBeCalled()
    expect(dom).toHaveTextContent('收起')
  }
})
