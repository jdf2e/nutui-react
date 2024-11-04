import React, { FunctionComponent, useState, useRef } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useIsomorphicLayoutEffect } from '@/utils/use-isomprphic-layout-effect'
import { useRtl } from '../configprovider'

export type EllipsisDirection = 'start' | 'end' | 'middle'
type EllipsisValue = {
  leading?: string | undefined
  tailing?: string | undefined
}

export interface EllipsisProps extends BasicComponent {
  content: string
  direction: EllipsisDirection
  rows: number | string
  expandText: string
  collapseText: string
  symbol: string
  lineHeight: number | string
  onClick: () => void
  onChange: (type: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  content: '',
  direction: 'end',
  rows: 1,
  expandText: '',
  collapseText: '',
  symbol: '...',
  lineHeight: '20',
} as EllipsisProps

const classPrefix = `nut-ellipsis`
export const Ellipsis: FunctionComponent<
  Partial<EllipsisProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'onChange'>
> = (props) => {
  const {
    children,
    content,
    className,
    direction,
    rows,
    expandText,
    collapseText,
    symbol,
    lineHeight,
    onClick,
    onChange,
    ...rest
  } = { ...defaultProps, ...props }
  const rtl = useRtl()
  let container: any = null
  let maxHeight = 0
  const [exceeded, setExceeded] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const ellipsis = useRef<EllipsisValue>()
  const root = useRef<HTMLDivElement>(null)
  const rtlClasses = classNames({
    [`${classPrefix}-rtl`]: rtl,
  })
  const classes = classNames(classPrefix, rtlClasses, className)

  useIsomorphicLayoutEffect(() => {
    if (content) {
      createContainer()
    }
  }, [content])

  // 创建虚拟 container，内容为 contant 的内容
  const createContainer = () => {
    if (!root.current) return
    const originStyle = window.getComputedStyle(root.current)
    container = document.createElement('div')
    const styleNames: string[] = Array.prototype.slice.apply(originStyle)
    styleNames.forEach((name) => {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })
    container.style.position = 'fixed'
    container.style.left = '999999px'
    container.style.top = '999999px'
    container.style.zIndex = '-1000'
    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.whiteSpace = 'normal'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'

    const lineH = pxToNumber(
      originStyle.lineHeight === 'normal' ? lineHeight : originStyle.lineHeight
    )
    maxHeight = Math.floor(
      lineH * (Number(rows) + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )
    container.innerText = content
    document.body.appendChild(container)
    calcEllipse()
    document.body.removeChild(container)
  }

  // 计算省略号的位置
  const calcEllipse = () => {
    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      const end = content.length
      const middle = Math.floor((0 + end) / 2)
      const ellipsised =
        direction === 'middle'
          ? tailorMiddle([0, middle], [middle, end])
          : tailor(0, end)
      ellipsis.current = ellipsised
    }
  }
  // 计算 start/end 省略
  const tailor: (left: number, right: number) => EllipsisValue = (
    left: number,
    right: number
  ) => {
    const actionText = expanded ? collapseText : expandText
    const end = content.length
    if (right - left <= 1) {
      if (direction === 'end') {
        return {
          leading: content.slice(0, left) + symbol,
        }
      }
      return {
        tailing: symbol + content.slice(right, end),
      }
    }
    const middle = Math.round((left + right) / 2)
    if (direction === 'end') {
      container.innerText = content.slice(0, middle) + symbol + actionText
    } else {
      container.innerText = actionText + symbol + content.slice(middle, end)
    }
    if (container.offsetHeight <= maxHeight) {
      if (direction === 'end') {
        return tailor(middle, right)
      }
      return tailor(left, middle)
    }
    if (direction === 'end') {
      return tailor(left, middle)
    }
    return tailor(middle, right)
  }
  // 计算 middle 省略
  const tailorMiddle: (
    leftPart: [number, number],
    rightPart: [number, number]
  ) => EllipsisValue = (
    leftPart: [number, number],
    rightPart: [number, number]
  ) => {
    const actionText = expanded ? collapseText : expandText
    const end = content.length
    if (leftPart[1] - leftPart[0] <= 1 && rightPart[1] - rightPart[0] <= 1) {
      return {
        leading: content.slice(0, leftPart[0]) + symbol,
        tailing: symbol + content.slice(rightPart[1], end),
      }
    }
    const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
    const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)

    container.innerText =
      content.slice(0, leftPartMiddle) +
      symbol +
      actionText +
      symbol +
      content.slice(rightPartMiddle, end)

    if (container.offsetHeight <= maxHeight) {
      return tailorMiddle(
        [leftPartMiddle, leftPart[1]],
        [rightPart[0], rightPartMiddle]
      )
    }
    return tailorMiddle(
      [leftPart[0], leftPartMiddle],
      [rightPartMiddle, rightPart[1]]
    )
  }

  const pxToNumber = (value: string | null | number) => {
    if (!value) return 0
    const match = (value as string).match(/^\d*(\.\d*)?/)
    return match ? Number(match[0]) : 0
  }

  const clickHandle = (type: number) => {
    if (type === 1) {
      setExpanded(true)
      onChange && onChange('expand')
    } else {
      setExpanded(false)
      onChange && onChange('collapse')
    }
  }

  const handleClick = () => {
    onClick && onClick()
  }
  return (
    <div className={classes} onClick={handleClick} ref={root} {...rest}>
      {!exceeded ? content : null}
      {exceeded && !expanded ? (
        <span>
          {ellipsis.current?.leading}
          {expandText ? (
            <span
              className="nut-ellipsis-text"
              onClick={(e) => {
                e.stopPropagation()
                clickHandle(1)
              }}
            >
              {expandText}
            </span>
          ) : null}
          {ellipsis.current?.tailing}
        </span>
      ) : null}
      {exceeded && expanded ? (
        <span>
          {content}
          {expandText ? (
            <span
              className="nut-ellipsis-text"
              onClick={(e) => {
                e.stopPropagation()
                clickHandle(2)
              }}
            >
              {collapseText}
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  )
}

Ellipsis.displayName = 'NutEllipsis'
