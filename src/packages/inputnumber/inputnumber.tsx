import React, {
  useEffect,
  useRef,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import { Minus, Plus } from '@nutui/icons-react'
import classNames from 'classnames'
import { usePropsValue } from '@/utils/use-props-value'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  disabled: boolean
  min: string | number
  max: string | number
  readOnly: boolean
  value: string | number
  defaultValue: string | number
  allowEmpty: boolean
  step: string | number
  digits: string | number
  async: boolean
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
  readOnly: false,
  allowEmpty: false,
  defaultValue: 0,
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
  const inputRef = useRef('')

  const [_checked, setChecked] = usePropsValue<string | number>({
    value,
    defaultValue,
  })

  useEffect(() => {
    if (formatter) {
      if (_checked || _checked === 0) {
        inputRef.current = formatter(_checked)
        setChecked(formatter(_checked))
      }
    }
  }, [])

  const classes = classNames(
    {
      [`${classPrefix}`]: true,
      [`${classPrefix}--disabled`]: disabled,
    },
    className
  )
  const styles = {
    ...style,
  }
  const addAllow = (value = _checked) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|.]/gi, '')
      return Number(numValue) < Number(max) && !disabled
    }

    return Number(value) < Number(max) && !disabled
  }

  const reduceAllow = (value = _checked) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|.]/gi, '')
      return Number(numValue) > Number(min) && !disabled
    }

    return Number(value) > Number(min) && !disabled
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
        formatter ? setChecked(formatter(Number(min))) : setChecked(Number(min))
      } else if (Number(outputValue) > Number(max)) {
        formatter ? setChecked(formatter(Number(max))) : setChecked(Number(max))
      } else {
        formatter ? setChecked(formatter(outputValue)) : setChecked(outputValue)
      }
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    onMinus && onMinus(e)
    if (reduceAllow()) {
      if (formatter) {
        const numValue = String(_checked).replace(/[^0-9|.]/gi, '')
        const outputValue = Number(numValue) - Number(step)
        inputRef.current = formatter(outputValue)
        emitChange(outputValue, e)
      } else {
        const outputValue = Number(_checked) - Number(step)
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
        const numValue = String(_checked).replace(/[^0-9|.]/gi, '')
        const outputValue = Number(numValue) + Number(step)
        inputRef.current = formatter(outputValue)
        emitChange(outputValue, e)
      } else {
        const outputValue = Number(_checked) + Number(step)
        emitChange(outputValue, e)
      }
    } else {
      onOverlimit && onOverlimit(e)
    }
  }

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    onChange && onChange(input.valueAsNumber, e)
    if (!async) {
      if (Number.isNaN(input.valueAsNumber)) {
        setChecked('')
      } else {
        setChecked(input.valueAsNumber)
      }
    }
  }

  const changeFormatValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    const numReg = /^[0-9]*$/
    const numValue = input.replace(/[^0-9|.]/gi, '')

    if (formatter) {
      if (!numReg.test(input[0]) && numValue) {
        setChecked(formatter(numValue))
      } else if (!numReg.test(input[0]) && !numValue) {
        setChecked(input)
      } else if (numReg.test(input[0])) {
        // 针对于100%这种尾字符例子，直接删除会进行匹配
        if (formatter(numValue) === inputRef.current) {
          setChecked(numValue)
        } else {
          setChecked(formatter(numValue))
          inputRef.current = formatter(numValue)
        }
      }
    }
  }

  const burFormatValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value

    const numReg = /^[0-9]*$/
    const numValue = input.replace(/[^0-9|.]/gi, '')
    if (formatter) {
      if (formatter(numValue) === input) {
        emitChange(numValue, e)
        return
      }
      if (!numReg.test(input) || !input) {
        setChecked(formatter(''))
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readOnly) return
    onFocus && onFocus(e)
  }

  const burValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readOnly) return
    const input = e.target as HTMLInputElement
    let value = input.valueAsNumber
    if (Number.isNaN(value) && !allowEmpty) {
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
        <Minus
          className={iconMinusClasses}
          onClick={(e: any) => reduceNumber(e)}
        />
      </div>
      <>
        {formatter ? (
          <input
            type="text"
            min={min}
            max={max}
            disabled={disabled}
            readOnly={readOnly}
            value={_checked}
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
            readOnly={readOnly}
            value={_checked}
            onInput={changeValue}
            onBlur={burValue}
            onFocus={focusValue}
          />
        )}
      </>
      <div className="nut-input-add">
        <Plus className={iconAddClasses} onClick={(e: any) => addNumber(e)} />
      </div>
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
