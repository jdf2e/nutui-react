import React, { useEffect, useRef, FunctionComponent } from 'react'
import classNames from 'classnames'
import { isObject } from '@/utils'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useForceUpdate } from '@/utils/use-force-update'

export interface Color {
  [key: string]: string
}

export interface CircleProgressProps extends BasicComponent {
  percent: string | number
  strokeWidth?: string | number
  radius?: number | string
  strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit'
  color?: Record<string, string> | string
  background?: string
  clockwise?: boolean
}

const defaultProps = {
  ...ComponentDefaults,
  strokeWidth: 5,
  radius: 50,
  strokeLinecap: 'round',
  color: '#fa2c19',
  background: '#e5e9f2',
  clockwise: true,
} as CircleProgressProps

const classPrefix = `nut-circleprogress`
export const CircleProgress: FunctionComponent<
  CircleProgressProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>
> = (props) => {
  const {
    children,
    percent,
    className,
    radius,
    background,
    clockwise,
    color,
    strokeWidth,
    style,
    strokeLinecap,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const oldValue = useRef(percent)
  const forceUpdate = useForceUpdate()

  const classes = classNames(classPrefix, className)
  const refRandomId = Math.random().toString(36).slice(-8)
  const animateIdRef = useRef(0)

  const styles: React.CSSProperties = {
    height: `${Number(radius) * 2}px`,
    width: `${Number(radius) * 2}px`,
    ...style,
  }

  useEffect(() => {
    const startTime = Date.now()
    const startRate = Number(oldValue.current) // 30
    const endRate = Number(percent) // 40
    const duration = Math.abs(((startRate - endRate) * 1000) / +100) // 100
    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      const rate = progress * (endRate - startRate) + startRate
      oldValue.current = Math.min(Math.max(+rate, 0), 100)
      if (endRate > startRate ? rate < endRate : rate > endRate) {
        forceUpdate()
        animateIdRef.current = window.requestAnimationFrame(animate)
      } else {
        window.cancelAnimationFrame(animateIdRef.current)
      }
    }
    animateIdRef.current = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(animateIdRef.current)
  }, [percent])

  const stop = () => {
    if (!isObject(color)) {
      return []
    }
    const colorArr = Object.keys(color).sort(
      (a, b) => parseFloat(a) - parseFloat(b)
    )
    const stopArr: Record<string, string>[] = []
    colorArr.forEach((item) => {
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
    const stopArr: Record<string, string>[] = stop()
    const stopDom: string[] = []
    if (stopArr) {
      stopArr.forEach((item: { key?: string; value?: string }) => {
        let obj = ''
        obj = `%3Cstop offset='${item.key}' stop-color='${transColor(
          item.value
        )}'/%3E`
        stopDom.push(obj)
      })
    }
    const perimeter = 283
    const progress = +oldValue.current
    const offset =
      (perimeter * Number(format(parseFloat(progress.toFixed(1))))) / 100
    const isWise = clockwise ? 1 : 0
    const realColor = isObject(color)
      ? `url(%23${refRandomId})`
      : transColor(color)
    const d = `M 50 50 m 0 -45 a 45 45 0 1 ${isWise} 0 90 a 45 45 0 1, ${isWise} 0 -90`
    const pa = `%3Cdefs%3E%3ClinearGradient id='${refRandomId}' x1='100%25' y1='0%25' x2='0%25' y2='0%25'%3E${stopDom}%3C/linearGradient%3E%3C/defs%3E`
    const path = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke='${transColor(
      background
    )}' fill='none'/%3E`
    const path1 = `%3Cpath d='${d}' stroke-width='${strokeWidth}' stroke-dasharray='${offset},${perimeter}' stroke-linecap='round' stroke='${transColor(
      realColor
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
      <div className="nut-circleprogress-text">{children}</div>
    </div>
  )
}

CircleProgress.displayName = 'NutCircleProgress'
