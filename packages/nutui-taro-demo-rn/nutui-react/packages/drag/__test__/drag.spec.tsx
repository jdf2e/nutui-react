import * as React from 'react'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Drag } from '../drag'
import { sleep } from '@/utils/sleep'

describe('Drag', () => {
  const originWindowProto = Object.getPrototypeOf(window)
  beforeAll(() => {
    Object.setPrototypeOf(window, Window.prototype)
  })
  afterAll(() => {
    Object.setPrototypeOf(window, originWindowProto)
  })
  const btnStyle = {
    borderRadius: '25px',
    padding: '0 18px',
    fontSize: '14px',
    color: '#fff',
    display: 'inline-block',
    lineHeight: '36px',
    background: 'linear-gradient(135deg,#fa2c19 0,#fa6419 100%)',
  }

  test('should render default slot correctly', () => {
    const { container } = render(
      <>
        <Drag style={{ top: '120px', left: '8px' }}>
          <span className="custom-inner" style={btnStyle}>
            自定义内容
          </span>
        </Drag>
      </>
    )
    expect(container.querySelector('.custom-inner')?.innerHTML).toBe(
      '自定义内容'
    )
    expect(container.querySelector('.custom-inner')).toMatchSnapshot()
  })

  test('touch move', async () => {
    const { container } = render(
      <>
        <Drag style={{ top: '120px', left: '8px' }}>
          <span className="custom-inner" style={btnStyle}>
            按钮
          </span>
        </Drag>
      </>
    )
    const dragInnerEle = container.querySelector('.nut-drag>div') as Element
    fireEvent.mouseDown(dragInnerEle, {
      buttons: 1,
    })
    fireEvent.mouseMove(dragInnerEle, {
      buttons: 1,
      clientX: 20,
      clientY: 20,
      offset: [100, 100],
    })
    fireEvent.mouseUp(dragInnerEle)

    await sleep(1000)
    expect(dragInnerEle).toMatchSnapshot()
  })
})
