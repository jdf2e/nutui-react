import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { StarFillN } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface RateProps extends BasicComponent {
  count: string | number
  modelValue: string | number
  minimizeValue: string | number
  iconSize: string | number
  activeColor: string
  voidColor: string
  checkedIcon: React.ReactNode
  disabled: boolean
  readonly: boolean
  allowHalf: boolean
  spacing: string | number
  onChange: (val: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  count: 5,
  modelValue: 0,
  minimizeValue: 0,
  iconSize: 18,
  activeColor: '',
  voidColor: '',
  checkedIcon: null,
  disabled: false,
  readonly: false,
  allowHalf: false,
  spacing: 14,
} as RateProps
export const Rate: FunctionComponent<Partial<RateProps>> = (props) => {
  const {
    className,
    style,
    count,
    modelValue,
    minimizeValue,
    iconSize,
    activeColor,
    voidColor,
    checkedIcon,
    disabled,
    readonly,
    allowHalf,
    spacing,
    onChange,
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('rate')
  const bi = bem('rate-item')

  const [countArray, setCountArray] = useState([1, 2, 3, 4, 5])
  const [score, setScore] = useState(0)

  useEffect(() => {
    const tmp = []
    for (let i = 1; i <= Number(count); i++) {
      tmp.push(i)
    }
    setCountArray(tmp)
  }, [count])

  useEffect(() => {
    setScore(Math.max(Number(modelValue), Number(minimizeValue)))
  }, [modelValue])

  const pxCheck = (value: string | number): string => {
    return Number.isNaN(Number(value)) ? String(value) : `${value}px`
  }

  const renderIcon = (size: string | number = iconSize, color: string) => {
    return React.isValidElement(checkedIcon) ? (
      React.cloneElement<any>(checkedIcon, {
        ...checkedIcon.props,
        width: size,
        height: size,
        color,
      })
    ) : (
      <StarFillN width={size} height={size} color={color} />
    )
  }
  const onClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled || readonly) return
    let value = 0
    if (!(index === 1 && score === index)) {
      value = index
    }
    value = Math.max(value, Number(minimizeValue))
    setScore(value)
    onChange && onChange(value)
  }
  const onHalfClick = (event: any, n: number) => {
    event.preventDefault()
    event.stopPropagation()
    const value = Math.max(Number(minimizeValue), n - 0.5)
    setScore(value)
    onChange && onChange(value)
  }
  return (
    <div className={classNames(b(), className)} style={style}>
      {countArray.map((n) => {
        return (
          <div
            className={bi()}
            key={n}
            onClick={(event) => onClick(event, n)}
            style={{ marginRight: pxCheck(spacing) }}
          >
            <div
              className={classNames(bi('icon'), {
                [bi('icon--disabled')]: disabled || n > score,
              })}
            >
              {renderIcon(iconSize, n <= score ? activeColor : voidColor)}
            </div>
            {allowHalf && score > n - 1 && (
              <div
                className={` ${bi('half')} ${bi('icon')} ${bi('icon--half')}`}
                onClick={(event) => onHalfClick(event, n)}
              >
                {renderIcon(iconSize, n <= score ? activeColor : voidColor)}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

Rate.defaultProps = defaultProps
Rate.displayName = 'NutRate'
