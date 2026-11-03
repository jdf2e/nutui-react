import * as React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CountDown } from '../countdown'
import { getDisplayBucket } from '../utils'
import { sleep } from '@/utils/sleep'
import Button from '@/packages/button'

describe('countdown utils display bucket', () => {
  test('bucket by format granularity', () => {
    expect(getDisplayBucket(1500, 'HH:mm:ss')).toBe(1)
    expect(getDisplayBucket(1500, 'mm:ss.i')).toBe(15)
    expect(getDisplayBucket(305, 'HH:mm:ss:S')).toBe(3)
    expect(getDisplayBucket(305, 'HH:mm:ss:SS')).toBe(30)
    expect(getDisplayBucket(305, 'HH:mm:ss:SSS')).toBe(305)
  })
})

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
    const testClick = vi.fn()
    const onPaused = vi.fn()
    render(
      <CountDown
        endTime={Date.now() + 1 * 1000}
        onEnd={testClick}
        onPaused={onPaused}
      />
    )
    expect(testClick).not.toBeCalled()
    await act(async () => {
      await sleep(1000)
      waitFor(() => {
        expect(testClick).toBeCalled()
        expect(onPaused).not.toBeCalled()
      })
    })
  })

  test('format props', async () => {
    const { container } = render(
      <CountDown endTime={Date.now() + 1 * 1000} format="DD天HH时mm分ss秒" />
    )

    const countdownEle = container.querySelector('.nut-countdown-block')
    await act(async () => {
      await sleep(1000)
      waitFor(() => {
        expect(countdownEle?.innerHTML).toBe('00天00时00分00秒')
      })
    })
  })

  test('type props text', async () => {
    const { container } = render(
      <CountDown autoStart={false} time={0} type="text" />
    )
    const countdownDom = container.querySelector('.nut-countdown') as Element
    expect(container).toMatchSnapshot()
    expect(
      countdownDom?.querySelectorAll('.nut-countdown-number-text')?.length
    ).toBe(3)
  })

  test('type props primary', async () => {
    const { container } = render(
      <CountDown autoStart={false} time={0} type="primary" />
    )
    const countdownDom = container.querySelector('.nut-countdown') as Element
    expect(container).toMatchSnapshot()
    expect(
      countdownDom?.querySelectorAll('.nut-countdown-number-primary')?.length
    ).toBe(3)
  })

  test('type props default', async () => {
    const { container } = render(
      <CountDown autoStart={false} time={0} type="default" />
    )
    const countdownDom = container.querySelector('.nut-countdown') as Element
    expect(
      countdownDom?.querySelectorAll('.nut-countdown-number')?.length
    ).toBe(3)
  })

  test('format token i hundred-millisecond', async () => {
    const { container } = render(
      <CountDown
        autoStart={false}
        time={30500}
        format="mm:ss.i"
        type="primary"
      />
    )
    const countdownDom = container.querySelector('.nut-countdown') as Element
    const blocks = countdownDom?.querySelectorAll(
      '.nut-countdown-number-primary'
    )
    // mm and ss.i should be two blocks; ss.i stays in the same block (e.g. 30.5)
    expect(blocks?.length).toBe(2)
    const ssBlock = blocks?.[1]
    expect(ssBlock?.textContent).toMatch(/^\d{2}\.\d$/)
    expect(ssBlock?.classList.contains('nut-countdown-number-ssi')).toBe(true)
  })

  test('legacy format HH:mm:ss still works', async () => {
    const { container } = render(
      <CountDown endTime={Date.now() + 90 * 1000} format="HH:mm:ss" />
    )
    const countdownDom = container.querySelector('.nut-countdown') as Element
    expect(
      countdownDom?.querySelectorAll('.nut-countdown-number')?.length
    ).toBe(3)
    expect(countdownDom?.innerHTML).toContain(':')
  })

  test('paused props', async () => {
    const testClick = vi.fn()
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
    expect(button?.querySelector('.nut-button-wrap')?.innerHTML).toBe(
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
      waitFor(() => {
        const button1 = container.querySelector('.nut-button') as Element
        const laterShapShot =
          container.querySelector('.nut-countdown')?.innerHTML
        expect(button1?.querySelector('.nut-button-wrap')?.innerHTML).toBe(
          '<div class="">start</div>'
        )
        expect(prevSnapShot === laterShapShot).toBeTruthy()
      })
    })
  })
})
