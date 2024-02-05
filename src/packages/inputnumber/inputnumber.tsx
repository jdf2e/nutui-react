import React, { useEffect, useRef, FunctionComponent, useState } from 'react'
import { Minus, Plus } from '@nutui/icons-react'
import classNames from 'classnames'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  value: number
  defaultValue: number
  allowEmpty: boolean
  min: number
  max: number
  disabled: boolean
  readOnly: boolean
  step: number
  digits: number
  async: boolean
  formatter?: (value?: number) => string
  onPlus: (e: React.MouseEvent) => void
  onMinus: (e: React.MouseEvent) => void
  onOverlimit: () => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (param: number) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  readOnly: false,
  allowEmpty: false,
  step: 1,
  digits: 0,
  async: false,
} as InputNumberProps

const classPrefix = `nut-inputnumber`
export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>
> = (props) => {
  const {
    children,
    disabled,
    min,
    max,
    readOnly,
    value,
    defaultValue,
    allowEmpty,
    digits,
    step,
    async,
    className,
    style,
    formatter,
    onPlus,
    onMinus,
    onOverlimit,
    onBlur,
    onFocus,
    onChange,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const classes = classNames(classPrefix, {
    [`${classPrefix}-disabled`]: disabled,
  })
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (focused) {
      inputRef.current?.select?.()
    }
  }, [focused])

  const [shadowValue, setShadowValue] = usePropsValue({
    value,
    defaultValue,
    onChange: (value) => {},
  })
  const bound = (value: number, min: number, max: number) => {
    let res = value
    if (min !== undefined) {
      res = Math.max(Number(min), res)
    }
    if (max !== undefined) {
      res = Math.min(Number(max), res)
    }
    return res
  }
  const format = (value: number): string => {
    // 如果超过 min 或 max, 需要纠正
    const fixedValue = bound(value, min, max)
    if (formatter) {
      return formatter(fixedValue)
    }
    if (digits) {
      return fixedValue.toFixed(digits).toString()
    }
    return fixedValue.toString()
  }
  const [formattedValue, setFormattedValue] = usePropsValue({
    value: value && format(shadowValue),
    defaultValue: defaultValue && format(shadowValue),
  })

  const calcNextValue = (current: any, step: any, symbol: number) => {
    const dig = digits + 1
    return (
      (parseFloat(current || '0') * dig + parseFloat(step) * dig * symbol) / dig
    )
  }
  const update = (negative: boolean) => {
    if (step !== undefined) {
      const nextValue = bound(
        calcNextValue(shadowValue, step, negative ? -1 : 1),
        min,
        max
      )
      setShadowValue(nextValue)
      setFormattedValue(format(nextValue))
      if (nextValue === (negative ? min : max)) {
        onOverlimit?.()
      } else {
        onChange?.(nextValue)
      }
    }
  }
  const handleReduce = (e: React.MouseEvent) => {
    if (disabled) return
    onMinus?.(e)
    update(true)
  }
  const handlePlus = (e: React.MouseEvent) => {
    if (disabled) return
    onPlus?.(e)
    update(false)
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 设置 input 值， 在 blur 时格式化
    setFormattedValue(e.target.value)
    setShadowValue(e.target.value as any)
    onChange && onChange(e.target.value as any)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // 失去焦点，同步数据，格式化
    setFocused(false)

    let finalV: any = e.target.value
    if (e.target.value === '') {
      if (!allowEmpty) {
        finalV = defaultValue
      }
    }

    setShadowValue(finalV)
    setFormattedValue(format(finalV))
    onBlur && onBlur(e)
  }
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // 设置文本框为原始数据
    setFormattedValue(shadowValue as any)
    // 选中文本
    setFocused(true)
    onFocus && onFocus(e)
  }

  return (
    <div className={classes} style={style} {...restProps}>
      <div className="nut-input-minus">
        <Minus
          className={classNames('nut-inputnumber-icon icon-minus', {
            [`${classPrefix}-icon-disabled`]: shadowValue === min || disabled,
          })}
          onClick={handleReduce}
        />
      </div>
      <>
        <input
          ref={inputRef}
          inputMode="decimal"
          disabled={disabled}
          readOnly={readOnly}
          value={formattedValue}
          onInput={handleInputChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
        />
      </>
      <div className="nut-input-add">
        <Plus
          className={classNames('nut-inputnumber-icon icon-plus', {
            [`${classPrefix}-icon-disabled`]: shadowValue === max || disabled,
          })}
          onClick={handlePlus}
        />
      </div>
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
