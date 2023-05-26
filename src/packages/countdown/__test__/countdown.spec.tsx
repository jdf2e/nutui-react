import * as React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CountDown } from '../countdown'
import { sleep } from '@/utils/sleep'
import Button from '@/packages/button'

describe('Countdown', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })
  test('endTime props', async () => {
    const testClick = jest.fn()
    render(
      <CountDown endTime={Date.now() + 1 * 1000} onEnd={() => testClick()} />
    )
    expect(testClick).not.toBeCalled()

    await act(async () => {
      await sleep(1000)
      await waitFor(() => {
        expect(testClick).toBeCalled()
      })
    })
  })

  test('format props', async () => {
    const { container } = render(
      <CountDown endTime={Date.now() + 1 * 1000} format="DD天HH时mm分ss秒" />
    )

    const countdownEle = container.querySelector('.nut-countdown__block')
    await act(async () => {
      await sleep(1000)
      await waitFor(() => {
        expect(countdownEle?.innerHTML).toBe('00天00时00分00秒')
      })
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
    expect(button?.querySelector('.nut-button__warp')?.innerHTML).toBe(
      '<div class="">stop</div>'
    )
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
    await act(async () => {
      await waitFor(() => {
        const button1 = container.querySelector('.nut-button') as Element
        const laterShapShot =
          container.querySelector('.nut-countdown')?.innerHTML
        expect(button1?.querySelector('.nut-button__warp')?.innerHTML).toBe(
          '<div class="">start</div>'
        )
        expect(prevSnapShot === laterShapShot).toBeTruthy()
      })
    })
  })
})
