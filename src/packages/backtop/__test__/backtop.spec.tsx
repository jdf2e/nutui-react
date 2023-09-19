// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { Top } from '@nutui/icons-react'
import { render, fireEvent } from '@testing-library/react'
import BackTop from '@/packages/backtop'

test('backtop props test', () => {
  const handleClick = jest.fn()
  const { container } = render(
    <BackTop
      target="target"
      threshold={200}
      style={{
        right: '20px',
        bottom: '50px',
      }}
      onClick={handleClick}
    />
  )
  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'z-index: 900; right: 20px; bottom: 50px;'
  )
  fireEvent.click(container)
  expect(handleClick).toBeCalled
})

test('backtop custom test', () => {
  const handleClick = jest.fn()
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
