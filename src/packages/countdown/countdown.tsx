import React, {
  FunctionComponent,
  CSSProperties,
  useState,
  useRef,
  useEffect,
} from 'react'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider'

export interface CountDownProps {
  className?: string
  style?: CSSProperties
  paused: boolean
  showDays: boolean
  showPlainText: boolean
  startTime: number | string
  endTime: number | string
  onEnd: () => void
  onPaused: (restTime: number) => void
  onRestart: (restTime: number) => void
  onUpdate: (restTime: any) => void
}

const defaultProps = {
  showPlainText: false,
  showDays: false,
  paused: false,
  startTime: Date.now(),
  endTime: Date.now(),
} as CountDownProps

export const CountDown: FunctionComponent<
  Partial<CountDownProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    showPlainText,
    showDays,
    paused,
    startTime,
    endTime,
    className,
    style,
    onEnd,
    onPaused,
    onRestart,
    onUpdate,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const b = bem('countdown')
  const [restTimeStamp, setRestTime] = useState(0)
  const stateRef = useRef({
    pauseTime: 0,
    curr: 0,
    timer: 0,
    isPaused: paused,
    isIninted: false,
  })

  // 补0操作
  const fill2 = (v: any) => {
    v += ''
    while (v.length < 2) {
      v = `0${v}`
    }
    return v
  }

  // 倒计时数据
  const restTime = (t: number) => {
    const ts = t
    let rest = {
      d: '-',
      h: '--',
      m: '--',
      s: '--',
    }
    if (ts === 0) {
      rest = {
        d: '0',
        h: '00',
        m: '00',
        s: '00',
      }
    }
    if (ts) {
      const ds = 24 * 60 * 60 * 1000
      const hs = 60 * 60 * 1000
      const ms = 60 * 1000

      const d: number = ts >= ds ? parseInt(String(ts / ds)) : 0
      const h = ts - d * ds >= hs ? parseInt(String((ts - d * ds) / hs)) : 0
      const m =
        ts - d * ds - h * hs >= ms
          ? parseInt(String((ts - d * ds - h * hs) / ms))
          : 0
      const s = Math.round((ts - d * ds - h * hs - m * ms) / 1000)

      if (d >= 0) rest.d = `${d}`
      if (h >= 0) rest.h = fill2(h)
      if (m >= 0) rest.m = fill2(m)
      if (s >= 0) rest.s = fill2(s)
    }
    return rest
  }

  // 倒计最终时格式数据
  const resttime = (() => {
    const rest = restTime(restTimeStamp)
    const { d } = rest
    if (!showDays && Number(d) > 0) {
      rest.h = fill2(Number(rest.h) + Number(d) * 24)
      rest.d = '0'
    }
    return rest
  })()

  // 获取时间戳
  const getTimeStamp = (timeStr?: string | number) => {
    if (!timeStr) return Date.now()
    let t = timeStr
    t = t > 0 ? +t : t.toString().replace(/\-/g, '/')
    return new Date(t).getTime()
  }

  // 展示文案，English todo @hanyuxinting
  const plainText = (() => {
    const { d, h, m, s } = resttime
    const showDayshours =
      Number(d) > 0 && showDays ? `${d}${locale.countdown.day}${h}` : h
    return `${showDayshours}${locale.countdown.hour}${m}${locale.countdown.minute}${s}${locale.countdown.second}`
  })()

  // 初始化
  const initTimer = () => {
    if (!stateRef.current.isIninted) {
      stateRef.current.isIninted = true
    }
    const delay = 1000
    const curr = Date.now()
    const start = getTimeStamp(startTime || curr)
    const end = getTimeStamp(endTime || curr)
    const diffTime = curr - start

    setRestTime(end - (start + diffTime))
    stateRef.current.timer = setInterval(() => {
      if (!stateRef.current.isPaused) {
        const restTime =
          end - (Date.now() - stateRef.current.pauseTime + diffTime)
        setRestTime(restTime)
        if (restTime < 0) {
          setRestTime(0)
          onEnd && onEnd()
          clearInterval(stateRef.current.timer)
        }
      }
    }, delay)
  }

  // 监听值变更
  useEffect(() => {
    if (onUpdate) {
      const tranTime = restTime(restTimeStamp)
      onUpdate(tranTime)
    }
  }, [restTimeStamp])

  // 监听暂停
  useEffect(() => {
    if (stateRef.current.isIninted) {
      stateRef.current.isPaused = paused
      if (paused) {
        stateRef.current.curr = getTimeStamp()
        onPaused && onPaused(restTimeStamp)
      } else {
        stateRef.current.pauseTime += getTimeStamp() - stateRef.current.curr
        onRestart && onRestart(restTimeStamp)
      }
    }
  }, [paused])

  // 监听开始结束时间变更
  useEffect(() => {
    if (stateRef.current.isIninted) {
      initTimer()
    }
  }, [endTime, startTime])

  // 初始化
  useEffect(() => {
    initTimer()
    return componentWillUnmount
  }, [])

  const componentWillUnmount = () => {
    clearInterval(stateRef.current.timer)
  }

  return (
    <div className={`${b()} ${className || ''}`} style={{ ...style }} {...rest}>
      {children || (
        <>
          {showPlainText ? (
            <div className={b('block')}> {plainText} </div>
          ) : (
            <>
              {Number(resttime.d) >= 0 && showDays ? (
                <>
                  <div className={b('block')}>{resttime.d}</div>
                  <div className={b('dot')}>{locale.countdown.day || ':'}</div>
                </>
              ) : null}
              <div className={b('block')}>{resttime.h}</div>
              <div className={b('dot')}>:</div>
              <div className={b('block')}>{resttime.m}</div>
              <div className={b('dot')}>:</div>
              <div className={b('block')}>{resttime.s}</div>
            </>
          )}
        </>
      )}
    </div>
  )
}

CountDown.defaultProps = defaultProps
CountDown.displayName = 'NutCountDown'
