import * as React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
// import {Button} from '../../button'
import { CountDown } from '../countdown'
import Button from '@/packages/button'
import { sleep } from '@/utils/sleep'

describe('Countdown', () => {
  test('endTime props', async () => {
    const testClick = jest.fn()
    const wrapper = render(
      <CountDown endTime={Date.now() + 1 * 1000} onEnd={() => testClick()} />
    )
    expect(testClick).not.toBeCalled()
    await sleep(1000)
    await waitFor(() => {
      expect(testClick).toBeCalled()
    })
  })

  test('format props', async () => {
    const { container } = render(
      <CountDown endTime={Date.now() + 1 * 1000} format="DD天HH时mm分ss秒" />
    )

    const countdownEle = container.querySelector('.nut-countdown__block')
    await sleep(1000)
    await waitFor(() => {
      expect(countdownEle?.innerHTML).toBe('00天00时00分00秒')
    })
  })

  test('paused props', async () => {
    const testClick = jest.fn()
    let paused = false
    const toggle = () => {
      testClick()
      paused = !paused
    }
    const { container, rerender } = render(
      <>
        <CountDown endTime={Date.now() + 60 * 1000} paused={paused} />

        <Button type="primary" size="small" onClick={() => toggle()}>
          {paused ? 'start' : 'stop'}
        </Button>
      </>
    )
    const button = container.querySelector('.nut-button') as Element
    const prevSnapShot = container.querySelector('.nut-countdown')?.innerHTML
    expect(button?.querySelector('.nut-button__warp')?.innerHTML).toBe('stop')
    fireEvent.click(button)
    expect(testClick).toBeCalled()

    rerender(
      <>
        <CountDown endTime={Date.now() + 60 * 1000} paused={paused} />
        <Button type="primary" size="small" onClick={() => toggle()}>
          {paused ? 'start' : 'stop'}
        </Button>
      </>
    )

    await waitFor(() => {
      const button1 = container.querySelector('.nut-button') as Element
      const laterShapShot = container.querySelector('.nut-countdown')?.innerHTML
      expect(button1?.querySelector('.nut-button__warp')?.innerHTML).toBe(
        'start'
      )
      expect(prevSnapShot === laterShapShot).toBeTruthy()
    })
  })
})
