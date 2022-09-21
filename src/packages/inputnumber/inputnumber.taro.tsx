import React, {
  useState,
  useEffect,
  FunctionComponent,
  ChangeEvent,
  FocusEvent,
} from 'react'
import classNames from 'classnames'
import Icon from '@/packages/icon/index.taro'
import bem from '@/utils/bem'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface InputNumberProps extends IComponent {
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
  add: (e: MouseEvent) => void
  reduce: (e: MouseEvent) => void
  overlimit: (e: MouseEvent) => void
  blur: (e: ChangeEvent<HTMLInputElement>) => void
  focus: (e: FocusEvent<HTMLInputElement>) => void
  change: (
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
  Partial<InputNumberProps> & React.HTMLAttributes<HTMLDivElement>
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
    add,
    reduce,
    change,
    overlimit,
    blur,
    focus,
    iconClassPrefix,
    iconFontClassName,
    ...restProps
  } = {
    ...defaultProps,
    ...props,
  }
  const [inputValue, setInputValue] = useState(modelValue)
  useEffect(() => {
    setInputValue(modelValue)
  }, [modelValue])

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
  const addAllow = (value = Number(inputValue)) => {
    return value < Number(max) && !disabled
  }

  const reduceAllow = (value = Number(inputValue)) => {
    return value > Number(min) && !disabled
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
    change && change(outputValue, e)
    if (!isAsync) {
      if (Number(outputValue) < Number(min)) {
        setInputValue(Number(min))
      } else if (Number(outputValue) > Number(max)) {
        setInputValue(Number(max))
      } else {
        setInputValue(outputValue)
      }
    }
  }

  const reduceNumber = (e: MouseEvent) => {
    reduce && reduce(e)
    if (reduceAllow()) {
      const outputValue = Number(inputValue) - Number(step)
      emitChange(outputValue, e)
    } else {
      overlimit && overlimit(e)
    }
  }

  const addNumber = (e: MouseEvent) => {
    add && add(e)
    if (addAllow()) {
      const outputValue = Number(inputValue) + Number(step)
      emitChange(outputValue, e)
    } else {
      overlimit && overlimit(e)
    }
  }

  const changeValue = (e: any) => {
    const value = Number(e.detail.value)
    change && change(value, e)
    if (!isAsync) {
      if (Number.isNaN(value)) {
        setInputValue(inputValue)
      } else {
        setInputValue(value)
      }
    }
  }

  const focusValue = (e: FocusEvent<HTMLInputElement>) => {
    if (disabled) return
    if (readonly) return
    focus && focus(e)
  }

  const burValue = (e: any) => {
    if (disabled) return
    if (readonly) return
    let value = Number(e.detail.value)
    if (value < Number(min)) {
      value = Number(min)
    } else if (value > Number(max)) {
      value = Number(max)
    }
    emitChange(value, e)
    blur && blur(e)
  }
  return (
    <div className={classes} style={styles} {...restProps}>
      <Icon
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        className={iconMinusClasses}
        size={buttonSize}
        name="minus"
        onClick={reduceNumber}
      />
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
      <Icon
        classPrefix={iconClassPrefix}
        fontClassName={iconFontClassName}
        className={iconAddClasses}
        size={buttonSize}
        name="plus"
        onClick={addNumber}
      />
    </div>
  )
}

InputNumber.defaultProps = defaultProps
InputNumber.displayName = 'NutInputNumber'
