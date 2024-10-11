// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { Top } from '@nutui/icons-react'
import { render, fireEvent } from '@testing-library/react'
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
      <div
        className="backtop-demo"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Top width="12px" height="12px" className="nut-backtop-main" />
        <div style={{ fontSize: '12px' }}>顶部</div>
      </div>
    </BackTop>
  )
  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'z-index: 900; bottom: 110px; right: 10px;'
  )
  expect(container.querySelector('.backtop-demo')).toHaveAttribute(
    'style',
    'display: flex; flex-direction: column; align-items: center;'
  )
  expect(container.querySelector('.nut-icon-Top')).toHaveClass(
    'nut-backtop-main'
  )
  fireEvent.click(container)
  expect(handleClick).toBeCalled
  expect(container).toMatchSnapshot()
})
