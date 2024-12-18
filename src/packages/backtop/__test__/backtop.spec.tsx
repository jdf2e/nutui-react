// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { Top } from '@nutui/icons-react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import BackTop from '@/packages/backtop'

test('backtop props test', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <div id="target" style={{ height: '100vh' }}>
      {new Array(24).fill(0).map((_, index) => {
        return <div key={index}>我是测试数据{index}</div>
      })}
      <BackTop
        target="target"
        className="backtop-button"
        onClick={handleClick}
      />
    </div>
  )
  const chooseTagEle = container.querySelectorAll('.backtop-button')[0]
  fireEvent.click(chooseTagEle)
  expect(handleClick).toBeCalled
})

test('backtop custom test', () => {
  const handleClick = vi.fn()
  const { container } = render(
    <BackTop
      className="custom-class"
      target="target"
      threshold={100}
      style={{
        bottom: '110px',
        right: '10px',
      }}
      onClick={handleClick}
    >
      <Top />
      <div style={{ fontSize: '12px' }}>顶部</div>
    </BackTop>
  )
  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'z-index: 900; bottom: 110px; right: 10px;'
  )
  fireEvent.click(container)
  expect(handleClick).toBeCalled
  expect(container).toMatchSnapshot()
})

test('scroll', async () => {
  const { container } = render(
    <div id="target" style={{ height: '100px' }} className="backtop-wrapper">
      {new Array(24).fill(0).map((_, index) => {
        return (
          <div key={index} style={{ height: 30 }}>
            我是测试数据{index}
          </div>
        )
      })}
      <BackTop target="target" className="backtop-button" />
    </div>
  )
  const track = container.querySelector('.backtop-wrapper')
  const element18 = container.querySelectorAll(
    '.nut-hoverbutton-item-container'
  )[0]
  const element19 = container.querySelectorAll('.nut-hoverbutton-container')[0]
  if (track) {
    track.scrollTo = vi.fn()
    track.scrollTop = 200
    act(() => {
      track.dispatchEvent(new Event('scroll'))
    })
    await waitFor(() => {
      expect(element19).toHaveClass('nut-backtop-show')
    })
    fireEvent.click(element18 as Element)
  }
})
