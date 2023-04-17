import React, { FunctionComponent, useEffect, useState } from 'react'
import classNames from 'classnames'
import { StarFillN } from '@nutui/icons-react-taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export interface RateProps extends BasicComponent {
  count: number
  value: number
  defaultValue: number
  min: number
  checkedIcon: React.ReactNode
  uncheckedIcon: React.ReactNode
  disabled: boolean
  readOnly: boolean
  allowHalf: boolean
  onChange: (value: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  count: 5,
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
    value,
    defaultValue,
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

  const [score, setScore] = usePropsValue<number>({
    value,
    defaultValue: Math.max(defaultValue || 0, min),
    finalValue: 0,
    onChange,
  })

  useEffect(() => {
    const tmp = []
    for (let i = 1; i <= Number(count); i++) {
      tmp.push(i)
    }
    setCountArray(tmp)
  }, [count])

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
    value = Math.max(value, min)
    setScore(value)
  }

  const onHalfClick = (event: any, n: number) => {
    event.preventDefault()
    event.stopPropagation()
    const value = Math.max(min, n - 0.5)
    setScore(value)
  }

  return (
    <div
      className={classNames(classPrefix, className, {
        disabled,
        readonly: readOnly,
      })}
      style={style}
    >
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
