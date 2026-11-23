import React, {
  useState,
  useRef,
  useEffect,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { padZero } from '@/utils/pad-zero'
import { web } from '@/utils/taro/platform'
import { TaroCountDownProps, CountDownTime } from '@/types'
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
} as TaroCountDownProps

const InternalCountDown: ForwardRefRenderFunction<
  unknown,
  Partial<TaroCountDownProps>
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
    restTime: 0,
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
      // 仅 H5 且显式传入 startTime 时做服务器时间校准
      stateRef.current.diffTime =
        web() && startTime ? Date.now() - getTimeStamp(startTime) : 0
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

  const pause = () => {
    cancelAnimationFrame(stateRef.current.timer)
    // 须在改 counting 前判断：未计时时不能用旧 handleEndTime 重算，否则会覆盖已保存的 restTime
    const wasCounting = stateRef.current.counting
    stateRef.current.counting = false
    if (!wasCounting) return
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
    const tranTime = parseRemainTime(stateRef.current.restTime)
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

  const getUnit = (unit: string) => {
    const formatArr = format.split(/(DD|HH|mm|ss|SSS|SS|S|i)/)
    const index = formatArr.indexOf(unit)
    return index > -1 ? formatArr[index + 1] : ':'
  }

  const numberClassName = classNames({
    [`${classPrefix}-number`]: type === 'default',
    [`${classPrefix}-number-primary`]: type === 'primary',
    [`${classPrefix}-number-text`]: type === 'text',
  })

  const renderTimeItem = (
    formatUnit: string,
    timeValue: number | string,
    unit = ''
  ) => {
    if (!format.includes(formatUnit)) return null
    // 天数、毫秒片段不补零；时分秒补两位
    const display =
      formatUnit === 'DD' || formatUnit === 'S' ? timeValue : padZero(timeValue)
    return (
      <>
        <View className={numberClassName}>{display}</View>
        {unit ? (
          <View className={`${classPrefix}-unit`}>{getUnit(unit)}</View>
        ) : null}
      </>
    )
  }

  const renderTaroTime = () => {
    const carried = applyFormatCarry(
      parseRemainTime(stateRef.current.restTime),
      format
    )
    const { d, h, m, s, ms } = carried
    const digit = format.match(/S/g)?.length
    const withHundredMs = format.includes('i')
    const hundredMs = Math.floor(ms / 100) % 10
    // format可能是DD天HH时mm分SSS秒或者DD天HH时mm分S秒或是DD：HH：mm：ss / mm:ss.i

    return (
      <>
        {renderTimeItem('DD', d, 'DD')}
        {renderTimeItem('HH', h, 'HH')}
        {renderTimeItem('mm', m, 'mm')}
        {format.includes('ss') ? (
          <>
            <View
              className={classNames(numberClassName, {
                [`${classPrefix}-number-ssi`]: withHundredMs,
              })}
            >
              {padZero(s)}
              {withHundredMs ? `.${hundredMs}` : ''}
            </View>
            {!withHundredMs &&
              (format.includes('S') || getUnit('ss') !== ':') && (
                <View className={`${classPrefix}-unit`}>{getUnit('ss')}</View>
              )}
          </>
        ) : null}
        {!withHundredMs &&
          renderTimeItem(
            'S',
            padZero(ms, 3)
              .toString()
              .slice(0, digit || 1)
          )}
        {withHundredMs && !format.includes('ss') ? (
          <View className={numberClassName}>{hundredMs}</View>
        ) : null}
      </>
    )
  }

  return (
    <>
      {children || (
        <View
          className={`${classPrefix} ${classPrefix}-${type} ${className}`}
          style={{ ...style }}
          {...rest}
        >
          {renderTaroTime()}
        </View>
      )}
    </>
  )
}

export const CountDown = React.forwardRef<unknown, Partial<TaroCountDownProps>>(
  InternalCountDown
)

CountDown.displayName = 'NutCountDown'
