import React, { FunctionComponent, useEffect, useState } from 'react'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface RateProps extends BasicComponent {
  count: string | number
  modelValue: string | number
  minimizeValue: string | number
  iconSize: string | number
  activeColor: string
  voidColor: string
  checkedIcon: string
  uncheckedIcon: string
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
  checkedIcon: 'star-fill-n',
  uncheckedIcon: 'star-n',
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
    uncheckedIcon,
    disabled,
    readonly,
    allowHalf,
    spacing,
    onChange,
    iconClassPrefix,
    iconFontClassName,
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

  const onClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled || readonly) return
    let value = 0
    if (!(index === 1 && score === index)) {
      value = index
      if (allowHalf) {
        if ((e?.target as Element).className.includes('__icon--half')) {
          value -= 0.5
        }
      }
    }
    value = Math.max(value, Number(minimizeValue))
    setScore(value)

    onChange && onChange(value)
  }
  return (
    <div className={`${b()} ${className}`} style={style}>
      {countArray.map((n) => {
        return (
          <div
            className={bi()}
            key={n}
            onClick={(event) => onClick(event, n)}
            style={{ marginRight: pxCheck(spacing) }}
          >
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              size={iconSize}
              className={`${bi('icon')} ${
                disabled || n > score ? bi('icon--disabled') : ''
              }`}
              name={n <= score ? checkedIcon : uncheckedIcon}
              color={n <= score ? activeColor : voidColor}
            />
            {allowHalf && score > n - 1 && (
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                className={`${bi('icon')} ${bi('icon--half')}`}
                color={n <= score ? activeColor : voidColor}
                size={iconSize}
                name={checkedIcon}
              />
            )}
            {allowHalf && score < n - 1 && (
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                className={`${bi('icon')} ${bi('icon--disabled')} ${bi(
                  'icon--half'
                )}`}
                color={voidColor}
                size={iconSize}
                name={uncheckedIcon}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

Rate.defaultProps = defaultProps
Rate.displayName = 'NutRate'
