// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { Top } from '@nutui/icons-react'
import { render, fireEvent } from '@testing-library/react'
import BackTop from '@/packages/backtop'

test('backtop props test', () => {
  const handleClick = jest.fn()
  const { container } = render(
    <BackTop target="target" distance={200} bottom={50} onClick={handleClick} />
  )
  expect(container.querySelector('.nut-backtop')).toHaveAttribute(
    'style',
    'right: 10px; bottom: 50px; z-index: 10;'
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
      distance={100}
      bottom={110}
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
    'right: 10px; bottom: 110px; z-index: 10;'
  )
  expect(container.querySelector('.backtop-demo')).toHaveAttribute(
    'style',
    'display: flex; flex-direction: column; align-items: center;'
  )
  expect(container.querySelector('.nut-icon-top')).toHaveClass(
    'nut-backtop-main'
  )
  fireEvent.click(container)
  expect(handleClick).toBeCalled
  expect(container).toMatchSnapshot()
})
