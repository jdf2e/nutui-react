import React, {
  FunctionComponent,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { StarFill } from '@nutui/icons-react-taro'
import { useReady } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import useRefs from '@/utils/use-refs'

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
  touchable: boolean
  onChange: (value: number) => void
  onTouchEnd: (e: TouchEvent, value: number) => void
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
  touchable: false,
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
    touchable,
    onChange,
    onTouchEnd,
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-rate'

  const [countArray, setCountArray] = useState([1, 2, 3, 4, 5])

  const [refs, setRefs] = useRefs()

  const rateRects = useRef<
    {
      left: number
      width: number
    }[]
  >([])

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
      ? checkedIcon || <StarFill />
      : uncheckedIcon ||
          (checkedIcon ? (
            React.cloneElement(checkedIcon as ReactElement, {
              color: undefined,
            })
          ) : (
            <StarFill />
          ))
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

  const onHalfClick = (event: React.MouseEvent<HTMLDivElement>, n: number) => {
    event.preventDefault()
    event.stopPropagation()
    const value = Math.max(min, n - 0.5)
    setScore(value)
  }

  const getScoreByPosition = (x: number) => {
    if (rateRects.current?.length) {
      for (let index = rateRects.current.length - 1; index >= 0; index--) {
        const item = rateRects.current[index]
        if (item && x > item.left) {
          return allowHalf
            ? index + (x > item.left + item.width / 2 ? 1 : 0.5)
            : index + 1
        }
      }
      return 0
    }
  }

  const updateRects = () => {
    for (let index = 0; index < refs.length; index++) {
      const item = refs[index]
      if (item) {
        getRectByTaro(item).then((res) => {
          rateRects.current[index] = res
        })
      }
    }
  }

  useReady(() => {
    updateRects()
  })

  const handleTouchStart = (e: any) => {
    if (!touchable || readOnly || disabled) {
      return
    }
    if (e.cancelable) {
      e.preventDefault()
    }
    e.stopPropagation()
    updateRects()
  }

  const handleTouchMove = (e: any) => {
    if (!touchable || readOnly || disabled) {
      return
    }
    if (e.cancelable) {
      e.preventDefault()
    }
    e.stopPropagation()
    const val = getScoreByPosition(e.touches[0].clientX)
    if (val !== undefined) {
      setScore(Math.max(min, val))
    }
  }

  const handleTouchEnd = (e: any) => {
    if (!touchable || readOnly || disabled) {
      return
    }
    if (e.cancelable) {
      e.preventDefault()
    }
    e.stopPropagation()
    const val = getScoreByPosition(e.changedTouches[0].clientX)
    if (val !== undefined) {
      setScore(Math.max(min, val))
      onTouchEnd && onTouchEnd(e, Math.max(min, val))
    }
  }

  return (
    <View
      className={classNames(
        classPrefix,
        {
          disabled,
          readonly: readOnly,
        },
        className
      )}
      catchMove
      style={style}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {countArray.map((n, index) => {
        return (
          <div
            className={`${classPrefix}-item`}
            key={n}
            ref={setRefs(index)}
            onClick={(event) => onClick(event, n)}
          >
            <div
              className={classNames(`${classPrefix}-item-icon`, {
                [`${classPrefix}-item-icon-disabled`]: disabled || n > score,
              })}
            >
              {renderIcon(n)}
            </div>
            {allowHalf && score > n - 1 && (
              <div
                className={classNames(
                  `${classPrefix}-item-half`,
                  `${classPrefix}-item-icon`,
                  `${classPrefix}-item-icon-half`
                )}
                onClick={(event) => onHalfClick(event, n)}
              >
                {renderIcon(n)}
              </div>
            )}
          </div>
        )
      })}
    </View>
  )
}

Rate.displayName = 'NutRate'
