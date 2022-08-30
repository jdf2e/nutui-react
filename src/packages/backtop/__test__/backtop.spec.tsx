// import * as renderer from 'react-test-renderer'
import * as React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'
import BackTop from '@/packages/backtop'
import Icon from '@/packages/icon'

test('backtop props test', () => {
  const handleClick = jest.fn()
  const { container } = render(
    <BackTop elId="elId" distance={200} bottom={50} onClick={handleClick} />
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
      elId="elId"
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
        <Icon size="12px" className="nut-backtop-main" name="top" />
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
