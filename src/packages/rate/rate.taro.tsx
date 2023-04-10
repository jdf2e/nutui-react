import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { StarFillN } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface RateProps extends BasicComponent {
  count: string | number
  modelValue: string | number
  min: string | number
  checkedIcon: React.ReactNode
  uncheckedIcon: React.ReactNode
  disabled: boolean
  readOnly: boolean
  allowHalf: boolean
  onChange: (val: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  count: 5,
  modelValue: 0,
  min: 0,
  checkedIcon: null,
  uncheckedIcon: null,
  disabled: false,
  readOnly: false,
  allowHalf: false,
} as RateProps
export const Rate: FunctionComponent<Partial<RateProps>> = (props) => {
  const {
    className,
    style,
    count,
    modelValue,
    min,
    checkedIcon,
    uncheckedIcon,
    disabled,
    readOnly,
    allowHalf,
    onChange,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-rate'

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
    setScore(Math.max(Number(modelValue), Number(min)))
  }, [modelValue])

  const renderIcon = (n: number) => {
    return n <= score
      ? checkedIcon || <StarFillN />
      : uncheckedIcon || <StarFillN />
  }

  const onClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    e.stopPropagation()
    if (disabled || readOnly) return
    let value = 0
    if (!(index === 1 && score === index)) {
      value = index
    }
    value = Math.max(value, Number(min))
    setScore(value)
    onChange && onChange(value)
  }

  const onHalfClick = (event: any, n: number) => {
    event.preventDefault()
    event.stopPropagation()
    const value = Math.max(Number(min), n - 0.5)
    setScore(value)
    onChange && onChange(value)
  }

  return (
    <div className={classNames(classPrefix, className)} style={style}>
      {countArray.map((n) => {
        return (
          <div
            className={`${classPrefix}-item`}
            key={n}
            onClick={(event) => onClick(event, n)}
          >
            <div
              className={classNames(`${classPrefix}-item__icon`, {
                [`${classPrefix}-item__icon--disabled`]: disabled || n > score,
              })}
            >
              {renderIcon(n)}
            </div>
            {allowHalf && score > n - 1 && (
              <div
                className={classNames(
                  `${classPrefix}-item__half`,
                  `${classPrefix}-item__icon`,
                  `${classPrefix}-item__icon--half`
                )}
                onClick={(event) => onHalfClick(event, n)}
              >
                {renderIcon(n)}
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
