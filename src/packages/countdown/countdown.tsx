import React, {
  useState,
  useRef,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { ComponentDefaults } from '@/utils/typings'
import { padZero } from '@/utils/pad-zero'
import { WebCountDownProps, CountDownTime } from '@/types'
import { applyFormatCarry, getDisplayBucket, parseRemainTime } from './utils'

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  paused: false,
  // 0 表示未传；避免模块加载时 Date.now() 写死导致 diffTime 虚高
  startTime: 0,
  endTime: 0,
  remainingTime: 0,
  format: 'HH:mm:ss',
  autoStart: true,
  time: 0,
  destroy: false,
} as WebCountDownProps

const InternalCountDown: ForwardRefRenderFunction<
  unknown,
  Partial<WebCountDownProps>
> = (props, ref) => {
  const {
    type,
    paused,
    startTime,
    endTime,
    remainingTime,
    format,
    refreshInterval,
    autoStart,
    time,
    destroy,
    className,
    style,
    onEnd,
    onPaused,
    onRestart,
    onUpdate,
    children,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-countdown'
  const [restTimeStamp, setRestTime] = useState(0)
  const stateRef = useRef({
    isIninted: false,
    timer: 0,
    restTime: 0, // 倒计时剩余时间时间
    counting: !paused && autoStart, // 是否处于倒计时中
    handleEndTime: Date.now(), // 最终截止时间
    diffTime: 0, // 设置了 startTime 时，与 date.now() 的差异
    lastBucket: -1, // 上一帧展示档，用于节流 setState
  })

  // 时间戳转换 或 获取当前时间的时间戳
  const getTimeStamp = (timeStr?: string | number) => {
    if (!timeStr) return Date.now()
    let t = timeStr
    t = Number(t) > 0 ? +t : t.toString().replace(/-/g, '/')
    return new Date(t).getTime()
  }

  const getRemainTime = () => {
    const currentTime = Date.now() - stateRef.current.diffTime
    return Math.max(stateRef.current.handleEndTime - currentTime, 0)
  }

  // 从剩余时间恢复倒计时；扣回 diffTime，避免暂停后再开把校准偏移叠进去
  const resumeFromRest = () => {
    stateRef.current.counting = true
    stateRef.current.handleEndTime =
      Date.now() - stateRef.current.diffTime + Number(stateRef.current.restTime)
    stateRef.current.lastBucket = -1
    tick()
  }

  // 倒计时 interval
  const initTime = () => {
    if (remainingTime) {
      stateRef.current.handleEndTime = Date.now() + Number(remainingTime)
      stateRef.current.diffTime = 0
    } else {
      stateRef.current.handleEndTime = endTime
      // 仅显式传入 startTime 时做服务器时间校准
      stateRef.current.diffTime = startTime
        ? Date.now() - getTimeStamp(startTime)
        : 0
    }
    if (!stateRef.current.counting) stateRef.current.counting = true
    stateRef.current.lastBucket = -1
    tick()
  }

  const tick = () => {
    stateRef.current.timer = requestAnimationFrame(() => {
      if (stateRef.current.counting) {
        const remainTime = getRemainTime()

        stateRef.current.restTime = remainTime
        const bucket =
          refreshInterval && refreshInterval > 0
            ? Math.floor(remainTime / refreshInterval)
            : getDisplayBucket(remainTime, format)
        // 仅展示档变化时更新 UI；到 0 必刷并只触发 onEnd（不走 pause/onPaused）
        if (bucket !== stateRef.current.lastBucket) {
          stateRef.current.lastBucket = bucket
          setRestTime(remainTime)
        }

        if (!remainTime) {
          stateRef.current.counting = false
          cancelAnimationFrame(stateRef.current.timer)
          onEnd && onEnd()
          return
        }

        tick()
      }
    })
  }

  // 将倒计时剩余时间格式化   参数： t  时间戳  type custom 自定义类型
  const formatRemainTime = (t: number, type?: string) => {
    const rest = parseRemainTime(t)
    return type === 'custom' ? rest : parseFormat(rest)
  }

  const parseFormat = (time: CountDownTime) => {
    const { d, h, m, s, ms } = applyFormatCarry(time, format)
    const tokenValues: Record<string, string> = {}

    // 天数不补零（1天 而非 01天）；时分秒保持两位
    if (format.includes('DD')) tokenValues.DD = String(d)
    if (format.includes('HH')) tokenValues.HH = padZero(h)
    if (format.includes('mm')) tokenValues.mm = padZero(m)
    if (format.includes('ss')) tokenValues.ss = padZero(s)

    if (format.includes('S')) {
      const msC = padZero(ms, 3).toString()
      if (format.includes('SSS')) {
        tokenValues.SSS = msC
      } else if (format.includes('SS')) {
        tokenValues.SS = msC.slice(0, 2)
      } else {
        tokenValues.S = msC.slice(0, 1)
      }
    }

    // 百毫秒 1 位；须在 S/SS/SSS 之后计算
    if (format.includes('i')) {
      tokenValues.i = String(Math.floor(ms / 100) % 10)
    }

    let numberClass = 'nut-countdown-number'
    if (type === 'primary') {
      numberClass = 'nut-countdown-number-primary'
    } else if (type === 'text') {
      numberClass = 'nut-countdown-number-text'
    }

    // 按 token 切分，直接映射为 JSX，避免拼 HTML 字符串
    const parts = format.split(/(DD|HH|mm|ss|SSS|SS|S|i)/)
    const nodes: React.ReactNode[] = []

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      if (part) {
        // ss.i（如 30.5）合并为同一数字块，并加 ssi 类
        if (
          part === 'ss' &&
          parts[i + 1] === '.' &&
          parts[i + 2] === 'i' &&
          tokenValues.ss !== undefined &&
          tokenValues.i !== undefined
        ) {
          nodes.push(
            <span
              key={`ssi-${i}`}
              className={`${numberClass} nut-countdown-number-ssi`}
            >
              {`${tokenValues.ss}.${tokenValues.i}`}
            </span>
          )
          i += 2
        } else if (tokenValues[part] !== undefined) {
          nodes.push(
            <span key={`${part}-${i}`} className={numberClass}>
              {tokenValues[part]}
            </span>
          )
        } else {
          nodes.push(part)
        }
      }
    }

    return nodes
  }

  const pause = () => {
    cancelAnimationFrame(stateRef.current.timer)
    stateRef.current.counting = false
    // 暂停时按真实时钟冻结剩余时间，避免只停在上一展示档
    const remainTime = getRemainTime()
    stateRef.current.restTime = remainTime
    onPaused && onPaused(remainTime)
  }

  useImperativeHandle(ref, () => ({
    start: () => {
      if (!stateRef.current.counting && !autoStart) {
        resumeFromRest()
        onRestart && onRestart(stateRef.current.restTime)
      }
    },
    pause: () => {
      pause()
    },
    reset: () => {
      if (!autoStart) {
        pause()
        stateRef.current.restTime = time
        setRestTime(time)
      }
    },
  }))

  // 监听值变更
  useEffect(() => {
    const tranTime = formatRemainTime(stateRef.current.restTime, 'custom')

    onUpdate && onUpdate(tranTime as CountDownTime)
  }, [restTimeStamp])

  // 监听暂停
  useEffect(() => {
    if (stateRef.current.isIninted) {
      if (paused) {
        if (stateRef.current.counting) {
          pause()
        }
      } else {
        if (!stateRef.current.counting) {
          resumeFromRest()
        }
        onRestart && onRestart(stateRef.current.restTime)
      }
    }
  }, [paused])

  // 监听开始结束时间变更
  useEffect(() => {
    if (stateRef.current.isIninted) {
      initTime()
    }
  }, [endTime, startTime, remainingTime])

  // 初始化
  useEffect(() => {
    if (autoStart) {
      initTime()
    } else {
      stateRef.current.restTime = time
      setRestTime(time)
    }
    if (!stateRef.current.isIninted) {
      stateRef.current.isIninted = true
    }
    return componentWillUnmount
  }, [])

  const componentWillUnmount = () => {
    destroy && cancelAnimationFrame(stateRef.current.timer)
  }

  return (
    <>
      {children || (
        <div
          className={`${classPrefix} ${classPrefix}-${type} ${className}`}
          style={{ ...style }}
          {...rest}
        >
          {formatRemainTime(stateRef.current.restTime)}
        </div>
      )}
    </>
  )
}

export const CountDown = React.forwardRef<unknown, Partial<WebCountDownProps>>(
  InternalCountDown
)

CountDown.displayName = 'NutCountDown'
