import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import { Minus, Plus } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  disabled: boolean
  min: string | number
  max: string | number
  readonly: boolean
  value: string | number
  defaultValue: string | number
  allowEmpty: boolean
  step: string | number
  digits: string | number
  async: boolean
  className: string
  style: React.CSSProperties
  formatter?: (displayValue: string | number) => string
  onPlus: (e: MouseEvent) => void
  onMinus: (e: MouseEvent) => void
  onOverlimit: (e: MouseEvent) => void
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus: (e: FocusEvent<HTMLInputElement>) => void
  onChange: (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  disabled: false,
  min: 1,
  max: 9999,
  readonly: false,
  allowEmpty: false,
  defaultValue: 0,
  step: 1,
  digits: 0,
  async: false,
} as InputNumberProps

export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>
> = (props) => {
  const {
    children,
    disabled,
    min,
    max,
    readonly,
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
  const [inputValue, setInputValue] = useState(defaultValue)
  const inputRef = useRef('')
  useEffect(() => {
    if (formatter) {
      inputRef.current = formatter(value || defaultValue)
      setInputValue(formatter(value || defaultValue))
    } else {
      setInputValue(value || defaultValue)
    }
  }, [value, formatter])

  const b = bem('inputnumber')
  const classes = classNames(
    {
      [`${b('')}--disabled`]: disabled,
    },
    className,
    b('')
  )
  const styles = {
    ...style,
  }
  const addAllow = (value = Number(inputValue)) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|\.]/gi, '')
      return Number(numValue) < Number(max) && !disabled
    }

    return value < Number(max) && !disabled
  }

  const reduceAllow = (value = Number(inputValue)) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|\.]/gi, '')
      return Number(numValue) > Number(min) && !disabled
    }

    return value > Number(min) && !disabled
  }

  const iconMinusClasses = classNames('nut-inputnumber__icon icon-minus', {
    'nut-inputnumber__icon--disabled': !reduceAllow(),
  })

  const iconAddClasses = classNames('nut-inputnumber__icon icon-plus', {
    'nut-inputnumber__icon--disabled': !addAllow(),
  })

  const fixedDecimalPlaces = (v: string | number): string => {
    return Number(v).toFixed(Number(digits))
  }

  const emitChange = (
    value: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    const outputValue: number | string = fixedDecimalPlaces(value)
    onChange && onChange(outputValue, e)
    if (!async) {
      if (Number(outputValue) < Number(min)) {
        formatter
          ? setInputValue(formatter(Number(min)))
          : setInputValue(Number(min))
      } else if (Number(outputValue) > Number(max)) {
        formatter
          ? setInputValue(formatter(Number(max)))
          : setInputValue(Number(max))
      } else {
        formatter
          ? setInputValue(formatter(outputValue))
          : setInputValue(outputValue)
      }
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    onMinus && onMinus(e)
    if (reduceAllow()) {
      if (formatter) {
        const numValue = String(inputValue).replace(/[^0-9|\.]/gi, '')
        const outputValue = Number(numValue) - Number(step)
        inputRef.current = formatter(outputValue)
        emitChange(outputValue, e)
      } else {
        const outputValue = Number(inputValue) - Number(step)
        emitChange(outputValue, e)
      }
    } else {
      onOverlimit && onOverlimit(e)
    }
  }

  const addNumber = (e: MouseEvent) => {
    onPlus && onPlus(e)
    if (addAllow()) {
      if (formatter) {
        const numValue = String(inputValue).replace(/[^0-9|\.]/gi, '')
        const outputValue = Number(numValue) + Number(step)
        inputRef.current = formatter(outputValue)
        emitChange(outputValue, e)
      } else {
        const outputValue = Number(inputValue) + Number(step)
        emitChange(outputValue, e)
      }
    } else {
      onOverlimit && onOverlimit(e)
    }
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    onChange && onChange(input.value, e)
    if (!async) {
      setInputValue(input.value)
    }
  }

  const changeFormatValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    const numReg = new RegExp('^[0-9]*$')
    const numValue = input.replace(/[^0-9|\.]/gi, '')

    if (formatter) {
      if (!numReg.test(input[0]) && numValue) {
        setInputValue(formatter(numValue))
      } else if (!numReg.test(input[0]) && !numValue) {
        setInputValue(input)
      } else if (numReg.test(input[0])) {
        // 针对于100%这种尾字符例子，直接删除会进行匹配
        if (formatter(numValue) === inputRef.current) {
          setInputValue(numValue)
        } else {
          setInputValue(formatter(numValue))
          inputRef.current = formatter(numValue)
        }
      }
    }
  }

  const burFormatValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    const numReg = new RegExp('^[0-9]*$')
    const numValue = input.replace(/[^0-9|\.]/gi, '')
    if (formatter) {
      if (formatter(numValue) === input) {
        emitChange(numValue, e)
        return
      }
      if (!numReg.test(input) || !input) {
        setInputValue(formatter(''))
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    onFocus && onFocus(e)
  }

  const burValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    const input = e.target as HTMLInputElement
    let value = +input.value
    if (value === 0 && !allowEmpty) {
      value = Number(defaultValue)
    }
    if (value < Number(min)) {
      value = Number(min)
    } else if (value > Number(max)) {
      value = Number(max)
    }
    emitChange(value, e)
    onBlur && onBlur(e)
  }
  return (
    <div className={classes} style={styles} {...restProps}>
      <div className="nut-input-minus">
        <Minus className={iconMinusClasses} onClick={reduceNumber} />
      </div>
      <>
        {formatter ? (
          <input
            type="text"
            min={min}
            max={max}
            disabled={disabled}
            readOnly={readonly}
            value={inputValue}
            onInput={changeFormatValue}
            onBlur={burFormatValue}
            onFocus={focusValue}
          />
        ) : (
          <input
            type="number"
            min={min}
            max={max}
            disabled={disabled}
            readOnly={readonly}
            value={inputValue}
            onInput={changeValue}
            onBlur={burValue}
            onFocus={focusValue}
          />
        )}
      </>
      <div className="nut-input-add">
        <Plus className={iconAddClasses} onClick={addNumber} />
      </div>
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
