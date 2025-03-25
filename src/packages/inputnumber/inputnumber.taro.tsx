import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import { Minus, Plus } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { usePropsValue } from '@/hooks/use-props-value'
import { ComponentDefaults } from '@/utils/typings'
import { bound } from '@/utils/bound'
import { TaroInputNumberProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  readOnly: false,
  allowEmpty: false,
  min: 1,
  max: 9999,
  step: 1,
  digits: 0,
  select: true,
  beforeChange: (value) => Promise.resolve(true),
} as TaroInputNumberProps

const classPrefix = `nut-inputnumber`
export const InputNumber: FunctionComponent<
  Partial<TaroInputNumberProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>
> = (props) => {
  const {
    children,
    disabled,
    min,
    max,
    type,
    readOnly,
    value,
    defaultValue,
    allowEmpty,
    digits,
    step,
    select,
    className,
    style,
    formatter,
    onPlus,
    onMinus,
    onOverlimit,
    onBlur,
    onFocus,
    onChange,
    beforeChange,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames(classPrefix, className, {
    [`${classPrefix}-disabled`]: disabled,
  })
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (select && focused) {
      inputRef.current?.select?.()
    }
  }, [select, focused])

  const [shadowValue, setShadowValue] = usePropsValue<number | null | string>({
    value: typeof value === 'string' ? parseFloat(value) : value,
    defaultValue:
      typeof defaultValue === 'string'
        ? parseFloat(defaultValue)
        : defaultValue,
    finalValue: 0,
  })

  const format = (value: number | null | string): string => {
    if (value === null) return ''
    // 如果超过 min 或 max, 需要纠正
    const fixedValue = bound(
      typeof value === 'string' ? parseFloat(value) : value,
      Number(min),
      Number(max)
    )
    if (formatter) {
      return formatter(fixedValue)
    }
    if (digits) {
      return fixedValue.toFixed(digits).toString()
    }
    return fixedValue.toString()
  }

  const [inputValue, setInputValue] = useState(format(shadowValue))

  useEffect(() => {
    if (!focused) {
      setInputValue(format(shadowValue))
    }
  }, [focused, shadowValue])

  const calcNextValue = (current: any, stepValue: any, symbol: number) => {
    const dig = digits + 1
    const currentValue = parseFloat(current || '0')
    const stepAmount = parseFloat(stepValue) * symbol
    return (currentValue * dig + stepAmount * dig) / dig
  }

  const update = async (negative: boolean, e: ITouchEvent) => {
    if (step === undefined) return
    negative ? onMinus?.(e) : onPlus?.(e)

    const shouldOverBoundary = calcNextValue(
      bound(Number(shadowValue), Number(min), Number(max)),
      step,
      negative ? -1 : 1
    )
    const maybeResume = await beforeChange(Number(shouldOverBoundary))
    if (!maybeResume) return

    const nextValue = bound(shouldOverBoundary, Number(min), Number(max))
    setShadowValue(nextValue)
    if (
      negative
        ? shouldOverBoundary < Number(min)
        : shouldOverBoundary > Number(max)
    ) {
      onOverlimit?.(e)
    } else {
      onChange?.(nextValue, e)
    }
  }
  const handleReduce = async (e: ITouchEvent) => {
    if (disabled) return
    await update(true, e)
  }
  const handlePlus = async (e: ITouchEvent) => {
    if (disabled) return
    await update(false, e)
  }

  const parseValue = (text: string) => {
    if (text === '') return null
    if (text === '-') return null
    return text
  }
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // 设置 input 值， 在 blur 时格式化
    setInputValue(e.target.value)
    const valueStr = parseValue(e.target.value)
    const maybeResume = await beforeChange(Number(valueStr))
    if (!maybeResume) return

    setShadowValue(
      // eslint-disable-next-line no-nested-ternary
      valueStr === null ? (allowEmpty ? null : defaultValue) : valueStr
    )

    if (
      valueStr !== null &&
      (Number(valueStr) < Number(min) || Number(valueStr) > Number(max))
    ) {
      onOverlimit?.(e)
    } else {
      onChange?.(parseFloat(valueStr || '0').toFixed(digits), e)
    }
  }
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true)
    setInputValue(
      shadowValue !== undefined && shadowValue !== null
        ? bound(Number(shadowValue), Number(min), Number(max)).toString()
        : ''
    )
    onFocus?.(e)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false)
    onBlur && onBlur(e)
    const valueStr = parseValue(e.target.value)
    onChange?.(parseFloat(valueStr || '0').toFixed(digits) as any, e)
  }

  return (
    <View className={classes} style={style}>
      <View className={`${classPrefix}-minus`} onClick={handleReduce}>
        <Minus
          size={10}
          className={classNames(
            `${classPrefix}-icon ${classPrefix}-icon-minus`,
            {
              [`${classPrefix}-icon-disabled`]:
                Number(shadowValue) <= Number(min) || disabled,
            }
          )}
        />
      </View>
      <input
        className={classNames(`${classPrefix}-input`, {
          [`${classPrefix}-input-disabled`]: disabled,
        })}
        type={type}
        ref={inputRef}
        inputMode={type === 'digit' ? 'decimal' : 'numeric'}
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
        onInput={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />

      <View className={`${classPrefix}-add`} onClick={handlePlus}>
        <Plus
          size={10}
          className={classNames(
            `${classPrefix}-icon ${classPrefix}-icon-plus`,
            {
              [`${classPrefix}-icon-disabled`]:
                Number(shadowValue) >= Number(max) || disabled,
            }
          )}
        />
      </View>
    </View>
  )
}

InputNumber.displayName = 'NutInputNumber'
