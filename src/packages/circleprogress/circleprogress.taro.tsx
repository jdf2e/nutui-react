import React, { useState, useEffect, FunctionComponent } from 'react'
import classNames from 'classnames'
import { isObject } from '@/utils'
import bem from '@/utils/bem'

export interface IColor {
  [key: string]: string
}
export interface CircleProgressProps {
  progress: string | number
  strokeWidth?: string | number
  radius?: number | string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit' | undefined
  circleColor?: object | string
  pathColor?: string
  clockwise?: boolean
  className?: string
}
const defaultProps = {
  strokeWidth: 5,
  radius: 50,
  strokeLinecap: 'round',
  circleColor: '#fa2c19',
  pathColor: '#e5e9f2',
  clockwise: true,
} as CircleProgressProps

export const CircleProgress: FunctionComponent<
  CircleProgressProps & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    progress,
    className,
    radius,
    pathColor,
    clockwise,
    circleColor,
    strokeWidth,
    style,
    strokeLinecap,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [oldValue, setOldValue] = useState(progress)

  const b = bem('circleprogress')
  const classes = classNames(className, b(''))
  const refRandomId = Math.random().toString(36).slice(-8)
  let lastTime = 0

  const styles: React.CSSProperties = {
    height: `${Number(radius) * 2}px`,
    width: `${Number(radius) * 2}px`,
    ...style,
  }

  useEffect(() => {
    let rafId: number | undefined
    const startTime = Date.now()
    const startRate = Number(oldValue) // 30
    const endRate = Number(progress) // 40
    const duration = Math.abs(((startRate - endRate) * 1000) / +100) // 100
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const rate = progress * (endRate - startRate) + startRate
      setOldValue(Math.min(Math.max(+rate, 0), 100))
      if (endRate > startRate ? rate < endRate : rate > endRate) {
        rafId = requestAnimationFrame(animate)
      }
    }
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
    rafId = requestAnimationFrame(animate)
  }, [progress])

  const requestAnimationFrame = function (callback: Function) {
    const currTime = new Date().getTime()
    const timeToCall = Math.max(0, 16.7 - (currTime - lastTime))
    lastTime = currTime + timeToCall
    const id = setTimeout(function () {
      callback()
    }, timeToCall)
    lastTime = currTime + timeToCall
    return id
  }

  const cancelAnimationFrame = function (id: any) {
    clearTimeout(id)
  }

  const stop = () => {
    if (!isObject(circleColor)) {
      return []
    }
    const color = circleColor as IColor
    const colorArr = Object.keys(color).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    )
    const stopArr: object[] = []
    colorArr.map((item) => {
      const obj = {
        key: '',
        value: '',
      }
      obj.key = item
      obj.value = color[item]
      stopArr.push(obj)
    })
    return stopArr
  }

  const transColor = (color: string | undefined) => {
    return color && color.replace('#', '%23')
  }
  const format = (progress: string | number) =>
    Math.min(Math.max(+progress, 0), 100)

  const circleStyle = () => {
    const stopArr: Array<object> = stop()
    const stopDom: string[] = []
    if (stopArr) {
      stopArr.map((item: { key?: string; value?: string }) => {
        let obj = ''
        obj = `%3Cstop offset='${item.key}' stop-color='${transColor(
          item.value
        )}'/%3E`
        stopDom.push(obj)
      })
    }
    const perimeter = 283
    const progress = +oldValue
    const offset =
      (perimeter * Number(format(parseFloat(progress.toFixed(1))))) / 100
    const isWise = props.clockwise ? 1 : 0
    const color = isObject(circleColor)
      ? `url(%23${refRandomId})`
      : transColor(circleColor)
    const d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`
    const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`
    const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(
      props.pathColor
    )}' fill='none'/%3E`
    const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${transColor(
      color
    )}' fill='none'/%3E`
    return {
      background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100'  xmlns='http://www.w3.org/2000/svg'%3E${pa}${path}${path1}%3C/svg%3E")`,
      width: '100%',
      height: '100%',
    }
  }

  return (
    <div className={classes} style={styles} {...restProps}>
      <div style={circleStyle()} />
      <div className="nut-circleprogress-text">
        {children || <div>{progress}%</div>}
      </div>
    </div>
  )
}

CircleProgress.defaultProps = defaultProps
CircleProgress.displayName = 'NutCircleProgress'
