import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import { Minus, Plus } from '@nutui/icons-react'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends BasicComponent {
  disabled: boolean
  buttonSize: string | number
  min: string | number
  max: string | number
  inputWidth: string | number
  readonly: boolean
  modelValue: string | number
  step: string | number
  decimalPlaces: string | number
  isAsync: boolean
  className: string
  style: React.CSSProperties
  formatter?: (displayValue: string | number) => string
  add: (e: MouseEvent) => void
  reduce: (e: MouseEvent) => void
  overlimit: (e: MouseEvent) => void
  blur: (e: ChangeEvent<HTMLInputElement>) => void
  focus: (e: FocusEvent<HTMLInputElement>) => void
  change: (
    param: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => void
  onAdd: (e: MouseEvent) => void
  onReduce: (e: MouseEvent) => void
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
  buttonSize: '',
  min: 1,
  max: 9999,
  inputWidth: '',
  readonly: false,
  modelValue: 0,
  step: 1,
  decimalPlaces: 0,
  isAsync: false,
} as InputNumberProps

function pxCheck(value: string | number): string {
  return Number.isNaN(Number(value)) ? String(value) : `${value}px`
}

export const InputNumber: FunctionComponent<
  Partial<InputNumberProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'onBlur'>
> = (props) => {
  const {
    children,
    disabled,
    buttonSize,
    min,
    max,
    inputWidth,
    readonly,
    modelValue,
    decimalPlaces,
    step,
    isAsync,
    className,
    style,
    formatter,
    add,
    reduce,
    change,
    overlimit,
    blur,
    focus,
    onAdd,
    onReduce,
    onOverlimit,
    onBlur,
    onFocus,
    onChange,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [inputValue, setInputValue] = useState(modelValue)
  const inputRef = useRef('')
  useEffect(() => {
    if (formatter) {
      inputRef.current = formatter(modelValue)
      setInputValue(formatter(modelValue))
    } else {
      setInputValue(modelValue)
    }
  }, [modelValue, formatter])

  const b = bem('inputnumber')
  const classes = classNames(
    {
      [`${b('')}--disabled`]: disabled,
    },
    className,
    b('')
  )
  const styles = {
    height: pxCheck(buttonSize),
    ...style,
  }
  const addAllow = (value = inputValue) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|\.]/gi, '')
      return Number(numValue) < Number(max) && !disabled
    }
    if (value || typeof value === 'number') {
      return value < Number(max) && !disabled
    }
    return false
  }

  const reduceAllow = (value = inputValue) => {
    if (formatter) {
      const numValue = String(value).replace(/[^0-9|\.]/gi, '')
      return Number(numValue) > Number(min) && !disabled
    }
    if (value || typeof value === 'number') {
      return value > Number(min) && !disabled
    }
    return false
  }

  const iconMinusClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !reduceAllow(),
  })

  const iconAddClasses = classNames('nut-inputnumber__icon', {
    'nut-inputnumber__icon--disabled': !addAllow(),
  })

  const fixedDecimalPlaces = (v: string | number): string => {
    return Number(v).toFixed(Number(decimalPlaces))
  }

  const emitChange = (
    value: string | number,
    e: MouseEvent | ChangeEvent<HTMLInputElement>
  ) => {
    const outputValue: number | string = fixedDecimalPlaces(value)
    onChange && onChange(outputValue, e)
    if (!isAsync) {
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
    onReduce && onReduce(e)
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
    onAdd && onAdd(e)
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

  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement
    onChange && onChange(input.valueAsNumber, e)
    if (!isAsync) {
      if (Number.isNaN(input.valueAsNumber)) {
        setInputValue('')
      } else {
        setInputValue(input.valueAsNumber)
      }
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
        console.log('inputRef.current', inputRef.current)
        console.log('formatter(numValue)', formatter(numValue))

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

  const burValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    const input = e.target as HTMLInputElement
    let value = input.valueAsNumber
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
          width={buttonSize}
          height={buttonSize}
        />
      </div>
      <>
        {formatter ? (
          <input
            type="text"
            min={min}
            max={max}
            style={{ width: pxCheck(inputWidth) }}
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
            style={{ width: pxCheck(inputWidth) }}
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
        <Plus
          className={iconAddClasses}
          onClick={(e: any) => addNumber(e)}
          width={buttonSize}
          height={buttonSize}
        />
      </div>
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
