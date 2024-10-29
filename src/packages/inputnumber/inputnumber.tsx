import React, {
  useEffect,
  useRef,
  FunctionComponent,
  useState,
  ChangeEvent,
} from 'react'
import { Minus, Plus } from '@nutui/icons-react'
import classNames from 'classnames'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  value: number | string
  defaultValue: number | string
  allowEmpty: boolean
  min: number | string
  max: number | string
  disabled: boolean
  readOnly: boolean
  step: number
  digits: number
  async: boolean
  select: boolean
  formatter?: (value?: string | number) => string
  onPlus: (e: React.MouseEvent) => void
  onMinus: (e: React.MouseEvent) => void
  onOverlimit: (e: React.MouseEvent | ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange: (
    param: string | number,
    e: React.MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  readOnly: false,
  allowEmpty: false,
  min: 1,
  max: 9999,
  step: 1,
  digits: 0,
  async: false,
  select: true,
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
  const format = (value: number | null | string): string => {
    if (value === null) return ''
    // 如果超过 min 或 max, 需要纠正
    if (typeof value === 'string') value = parseFloat(value)
    const fixedValue = bound(value, Number(min), Number(max))
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
    if (!focused && !async) {
      setShadowValue(bound(Number(shadowValue), Number(min), Number(max)))
      setInputValue(format(shadowValue))
    }
  }, [focused, shadowValue])

  useEffect(() => {
    if (async) {
      setShadowValue(bound(Number(value), Number(min), Number(max)))
      setInputValue(format(value))
    }
  }, [value])

  const calcNextValue = (current: any, step: any, symbol: number) => {
    const dig = digits + 1
    return (
      (parseFloat(current || '0') * dig + parseFloat(step) * dig * symbol) / dig
    )
  }
  const update = (negative: boolean, e: React.MouseEvent) => {
    if (step !== undefined) {
      const shouldOverBoundary = calcNextValue(
        shadowValue,
        step,
        negative ? -1 : 1
      )
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
  }
  const handleReduce = (e: React.MouseEvent) => {
    if (disabled) return
    onMinus?.(e)
    update(true, e)
  }
  const handlePlus = (e: React.MouseEvent) => {
    if (disabled) return
    onPlus?.(e)
    update(false, e)
  }

  const parseValue = (text: string) => {
    if (text === '') return null
    if (text === '-') return null
    return text
  }
  const clampValue = (valueStr: string | null) => {
    if (valueStr === null) return defaultValue
    const val = Number(parseFloat(valueStr || '0').toFixed(digits))
    return Math.max(Number(min), Math.min(Number(max), val))
  }
  const handleValueChange = (
    valueStr: string | null,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = clampValue(valueStr)
    // input暂不触发onOverlimit
    // if (val !== Number(e.target.value)) {
    //   onOverlimit?.(e)
    // }
    if (val !== Number(shadowValue)) {
      onChange?.(val, e)
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 设置 input 值， 在 blur 时格式化
    setInputValue(e.target.value)
    const valueStr = parseValue(e.target.value)
    if (valueStr === null) {
      if (allowEmpty) {
        setShadowValue(null)
      } else {
        setShadowValue(defaultValue)
      }
    } else {
      setShadowValue(clampValue(valueStr) as any)
    }
    !async && handleValueChange(valueStr, e)
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
    onBlur?.(e)
    const valueStr = parseValue(e.target.value)
    if (valueStr === null) {
      if (allowEmpty) {
        setShadowValue(null)
      } else {
        setShadowValue(defaultValue)
      }
    } else {
      setShadowValue(clampValue(valueStr) as any)
    }
    async && handleValueChange(valueStr, e)
  }

  return (
    <div className={classes} style={style} {...restProps}>
      <div className="nut-input-minus" onClick={handleReduce}>
        <Minus
          className={classNames('nut-inputnumber-icon icon-minus', {
            [`${classPrefix}-icon-disabled`]: shadowValue === min || disabled,
          })}
        />
      </div>
      <input
        ref={inputRef}
        inputMode="decimal"
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
        onInput={handleInputChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <div className="nut-input-add" onClick={handlePlus}>
        <Plus
          className={classNames('nut-inputnumber-icon icon-plus', {
            [`${classPrefix}-icon-disabled`]: shadowValue === max || disabled,
          })}
        />
      </div>
    </div>
  )
}

InputNumber.displayName = 'NutInputNumber'
