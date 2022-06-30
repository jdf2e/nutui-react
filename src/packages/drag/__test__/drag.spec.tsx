import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Drag } from '../drag'

test('props test', () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  const { container } = render(
    <Drag>
      <div className="touch-dom" style={btnStyle}>
        触摸移动
      </div>
    </Drag>
  )
  expect(container).toMatchSnapshot()
})
test('touch move test', () => {
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }
  const { container } = render(
    <Drag>
      <div className="touch-dom" style={btnStyle}>
        触摸移动
      </div>
    </Drag>
  )
  const track = container.querySelector('.nut-drag>div')
  expect(track).toContainHTML('transform: translate3d(46.5519px, 0.63176px, 0px);')
  //   expect(container.querySelector('.nut-drag>div')?.getAttribute('style')).toBe(
  //     'transform: translate3d(46.5519px, 0.63176px, 0px);'
  //   )
})
