import * as React from 'react'
import { act, fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CountDown } from '../countdown'
import { applyFormatCarry, getDisplayBucket, parseRemainTime } from '../utils'
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

  test('applyFormatCarry folds missing units like H5', () => {
    const rest = parseRemainTime(26 * 60 * 60 * 1000 + 5 * 60 * 1000 + 3 * 1000)
    // 1d 2h 5m 3s
    expect(rest.d).toBe(1)
    expect(rest.h).toBe(2)
    expect(applyFormatCarry(rest, 'HH:mm:ss')).toEqual({
      d: 0,
      h: 26,
      m: 5,
      s: 3,
      ms: 0,
    })
    expect(applyFormatCarry(rest, 'mm:ss')).toEqual({
      d: 0,
      h: 0,
      m: 26 * 60 + 5,
      s: 3,
      ms: 0,
    })
    expect(applyFormatCarry(rest, 'DD天HH时mm分ss秒').d).toBe(1)
    expect(applyFormatCarry(rest, 'DD天HH时mm分ss秒').h).toBe(2)
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

    const countdownEle = container.querySelector('.nut-countdown')
    await act(async () => {
      await sleep(1000)
      waitFor(() => {
        // 天数不补零；时分秒补零
        expect(countdownEle?.textContent).toBe('0天00时00分00秒')
      })
    })
  })

  test('DD days are not zero-padded', () => {
    const { container } = render(
      <CountDown
        autoStart={false}
        time={25 * 60 * 60 * 1000}
        format="DD天HH:mm:ss"
        type="text"
      />
    )
    const countdownEle = container.querySelector('.nut-countdown')
    expect(countdownEle?.textContent).toMatch(/^1天/)
    expect(countdownEle?.textContent).not.toMatch(/^01天/)
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

  test('pause before start keeps time when autoStart is false', async () => {
    const onPaused = vi.fn()
    const onEnd = vi.fn()
    const ref = React.createRef<{
      start: () => void
      pause: () => void
      reset: () => void
    }>()

    const { container } = render(
      <CountDown
        ref={ref}
        autoStart={false}
        time={10_000}
        format="ss"
        onPaused={onPaused}
        onEnd={onEnd}
      />
    )

    // 未 start 时 pause 不得用旧 handleEndTime 把 restTime 算成 0
    await act(async () => {
      ref.current?.pause()
      ref.current?.pause()
    })
    expect(onPaused).not.toBeCalled()
    expect(container.querySelector('.nut-countdown')?.textContent).toContain(
      '10'
    )

    await act(async () => {
      ref.current?.start()
    })
    await act(async () => {
      await sleep(50)
    })
    expect(onEnd).not.toBeCalled()
    expect(container.querySelector('.nut-countdown')?.textContent).not.toBe(
      '00'
    )
  })

  test('pause then restart does not gain time', async () => {
    let now = 1_000_000
    vi.spyOn(Date, 'now').mockImplementation(() => now)
    const onPaused = vi.fn()
    const onUpdate = vi.fn()

    const { rerender } = render(
      <CountDown
        endTime={now + 10_000}
        startTime={now}
        paused={false}
        onPaused={onPaused}
        onUpdate={onUpdate}
      />
    )

    await act(async () => {
      now += 2500
      await sleep(20)
    })

    rerender(
      <CountDown
        endTime={1_000_000 + 10_000}
        startTime={1_000_000}
        paused
        onPaused={onPaused}
        onUpdate={onUpdate}
      />
    )

    await act(async () => {
      await sleep(20)
    })

    const pausedRest = onPaused.mock.calls.at(-1)?.[0] as number
    expect(pausedRest).toBeGreaterThan(7000)
    expect(pausedRest).toBeLessThanOrEqual(7500)

    // 暂停墙钟 3s 再恢复，剩余时间不应把 diffTime / 暂停时长叠回去
    now += 3000
    rerender(
      <CountDown
        endTime={1_000_000 + 10_000}
        startTime={1_000_000}
        paused={false}
        onPaused={onPaused}
        onUpdate={onUpdate}
      />
    )

    await act(async () => {
      now += 100
      await sleep(20)
    })

    const latest = onUpdate.mock.calls.at(-1)?.[0] as {
      s: number
      m: number
      ms: number
    }
    const latestMs =
      ((latest?.m || 0) * 60 + (latest?.s || 0)) * 1000 + (latest?.ms || 0)
    expect(latestMs).toBeGreaterThan(6900)
    expect(latestMs).toBeLessThan(7600)

    vi.restoreAllMocks()
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
