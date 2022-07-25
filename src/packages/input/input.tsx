/* eslint-disable jsx-a11y/no-autofocus */
import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  useLayoutEffect,
  MouseEvent,
  HTMLProps,
} from 'react'

import { formatNumber } from './util'
import Icon from '@/packages/icon'
import { useConfig } from '@/packages/configprovider'

export type InputAlignType = 'left' | 'center' | 'right' // text-align
export type InputFormatTrigger = 'onChange' | 'onBlur' // onChange: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化
export type InputType =
  | 'tel'
  | 'url'
  | 'date'
  | 'file'
  | 'text'
  | 'time'
  | 'week'
  | 'color'
  | 'digit'
  | 'email'
  | 'image'
  | 'month'
  | 'radio'
  | 'range'
  | 'reset'
  | 'button'
  | 'hidden'
  | 'number'
  | 'search'
  | 'submit'
  | 'checkbox'
  | 'password'
  | 'textarea'
  | 'datetime-local'

export type InputRule = {
  pattern?: RegExp
  message?: string
  required?: boolean
}

export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface InputProps {
  type: InputType
  defaultValue: any
  placeholder: string
  label: string
  labelClass: string
  labelWidth: string | number
  labelAlign: InputAlignType
  colon: boolean
  inputAlign: InputAlignType | any
  center: boolean
  required: boolean
  disabled: boolean
  readonly: boolean
  error: boolean
  maxlength: any
  leftIcon: string
  leftIconSize: string | number
  rightIcon: string
  rightIconSize: string | number
  clearable: boolean
  clearIcon: string
  clearSize: string | number
  border: boolean
  formatTrigger: InputFormatTrigger
  rules: Array<InputRule> | any
  errorMessage: string
  errorMessageAlign: InputAlignType | any
  rows: any
  showWordLimit: boolean
  autofocus: boolean
  style?: CSSProperties
  className?: string
  slotButton?: HTMLProps<HTMLElement>
  slotInput?: HTMLProps<HTMLElement>
  formatter: (value: string) => void
  change?: (value: any, event: Event) => void
  blur?: (value: any, event: Event) => void
  focus?: (value: any, event: Event) => void
  clear?: (value: any, event: Event) => void
  keypress?: (value: any, event: Event) => void
  clickInput?: (value: any) => void
  clickLeftIcon?: (value: any) => void
  clickRightIcon?: (value: any) => void
  click?: (value: any) => void
}
const defaultProps = {
  type: 'text',
  defaultValue: '',
  placeholder: '请输入...',
  label: '',
  labelClass: '',
  labelWidth: '80',
  labelAlign: 'left',
  colon: false,
  inputAlign: 'left',
  center: false,
  required: false,
  disabled: false,
  readonly: false,
  error: false,
  maxlength: '9999',
  leftIcon: '',
  leftIconSize: '',
  rightIcon: '',
  rightIconSize: '',
  clearable: false,
  clearIcon: 'mask-close',
  clearSize: '14',
  border: true,
  formatTrigger: 'onChange',
  rules: [],
  rows: null,
  errorMessage: '',
  errorMessageAlign: '',
  showWordLimit: false,
  autofocus: false,
} as InputProps

export const Input: FunctionComponent<
  Partial<InputProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    defaultValue,
    placeholder,
    label,
    labelClass,
    labelWidth,
    labelAlign,
    colon,
    inputAlign,
    center,
    required,
    disabled,
    readonly,
    error,
    maxlength,
    leftIcon,
    leftIconSize,
    rightIcon,
    rightIconSize,
    clearable,
    clearIcon,
    clearSize,
    border,
    formatTrigger,
    rules,
    errorMessage,
    errorMessageAlign,
    showWordLimit,
    autofocus,
    style,
    className,
    rows,
    slotButton,
    slotInput,
    change,
    blur,
    focus,
    clear,
    formatter,
    keypress,
    clickInput,
    clickLeftIcon,
    clickRightIcon,
    click,
    ...rest
  } = { ...defaultProps, ...props }

  locale.placeholder = placeholder || locale.placeholder

  const [inputValue, SetInputValue] = useState('')
  const [active, SetActive] = useState(false)
  const [classes, setClasses] = useState('')
  const getModelValue = () => String(inputValue ?? '')
  const inputRef = useRef<any>(null)
  const state = {
    focused: false,
    validateFailed: false, // 校验失败
    validateMessage: '', // 校验信息
  }
  useLayoutEffect(() => {
    updateValue(getModelValue(), formatTrigger)
  })
  useEffect(() => {
    setClasses(inputClass)
    if (defaultValue) {
      SetInputValue(defaultValue)
    }
  }, [defaultValue])

  useEffect(() => {
    if (inputValue) {
      updateValue(getModelValue())
      resetValidation()
    }
  }, [inputValue])

  const inputClass = useCallback(() => {
    const prefixCls = 'nut-input'
    return [
      prefixCls,
      `${center ? 'center' : ''}`,
      `${disabled ? `${prefixCls}-disabled` : ''}`,
      `${required ? `${prefixCls}-required` : ''}`,
      `${error ? `${prefixCls}-error` : ''}`,
      `${border ? `${prefixCls}-border` : ''}`,
    ]
      .filter(Boolean)
      .join(' ')
  }, [disabled, required, error, border])

  const updateValue = (
    value: any,
    trigger: InputFormatTrigger = 'onChange'
  ) => {
    let val = value

    if (type === 'digit') {
      val = formatNumber(val, false, false)
    }
    if (type === 'number') {
      val = formatNumber(val, true, true)
    }

    if (formatter && trigger === formatTrigger) {
      val = formatter(val)
    }

    if (inputRef?.current?.value !== val) {
      inputRef.current.value = val
    }
    // if (val !== defaultValue) {
    SetInputValue(val)
    // }
  }

  const onFocus = (event: Event) => {
    const val: any = (event.target as any).value
    SetActive(true)
    focus && focus(val, event)
  }

  const onInput = (event: Event) => {
    let val: any = (event.target as any).value

    if (maxlength && val.length > Number(maxlength)) {
      val = val.slice(0, Number(maxlength))
    }
    updateValue(val)
    change && change(val, event)
  }

  const onBlur = (event: Event) => {
    setTimeout(() => {
      SetActive(false)
    }, 200)
    let val: any = (event.target as any).value
    if (maxlength && val.length > Number(maxlength)) {
      val = val.slice(0, Number(maxlength))
    }
    updateValue(getModelValue(), 'onBlur')
    blur && blur(val, event)
  }

  const onClickInput = (event: MouseEvent) => {
    clickInput && clickInput(event)
  }
  const onClickLeftIcon = (event: MouseEvent) => {
    clickLeftIcon && clickLeftIcon(event)
  }

  const onClickRightIcon = (event: MouseEvent) => {
    clickRightIcon && clickRightIcon(event)
  }

  const resetValidation = () => {
    if (state.validateFailed) {
      state.validateFailed = false
      state.validateMessage = ''
    }
  }

  const inputType = (type: string) => {
    if (type === 'number') {
      return 'text'
    }
    if (type === 'digit') {
      return 'tel'
    }
    return type
  }

  const handleClear = (event: Event) => {
    updateValue('')
    clear && clear('', event)
    // change && change('', event)
    // SetInputValue('')
  }

  return (
    <div
      className={`${classes}  ${className || ''}`}
      style={style}
      {...rest}
      onClick={(e: any) => {
        click && click(e)
      }}
    >
      {slotInput ? (
        <>
          <div
            className={`nut-input-label ${labelClass}`}
            style={{ width: `${labelWidth}px`, textAlign: labelAlign }}
          >
            <div className="label-string">
              {label}
              {colon ? ':' : ''}
            </div>
          </div>
          <div className="nut-input-value">
            <div
              className="nut-input-inner"
              onClick={(e: any) => {
                onClickInput(e)
              }}
            >
              {slotInput}
            </div>
          </div>
        </>
      ) : (
        <>
          {leftIcon && leftIcon.length > 0 ? (
            <div
              className="nut-input-left-icon"
              onClick={(e: any) => {
                onClickLeftIcon(e)
              }}
            >
              <Icon name={leftIcon} size={leftIconSize} />
            </div>
          ) : null}
          <div
            className={`nut-input-label ${labelClass}`}
            style={{ width: `${labelWidth}px`, textAlign: labelAlign }}
          >
            <div className="label-string">
              {label}
              {colon ? ':' : ''}
            </div>
          </div>
          <div className="nut-input-value">
            <div
              className="nut-input-inner"
              onClick={(e: any) => {
                onClickInput(e)
              }}
            >
              {type === 'textarea' ? (
                <textarea
                  className="input-text"
                  ref={inputRef}
                  style={{
                    textAlign: inputAlign,
                    height: `${Number(rows) * 24}px`,
                  }}
                  maxLength={maxlength}
                  placeholder={placeholder}
                  disabled={disabled}
                  readOnly={readonly}
                  value={inputValue}
                  autoFocus={autofocus}
                  onBlur={(e: any) => {
                    onBlur(e)
                  }}
                  onFocus={(e: any) => {
                    onFocus(e)
                  }}
                  onInput={(e: any) => {
                    onInput(e)
                  }}
                />
              ) : (
                <input
                  className="input-text"
                  ref={inputRef}
                  style={{ textAlign: inputAlign }}
                  type={inputType(type)}
                  maxLength={maxlength}
                  placeholder={placeholder || locale.placeholder}
                  disabled={disabled}
                  readOnly={readonly}
                  value={inputValue}
                  autoFocus={autofocus}
                  onBlur={(e: any) => {
                    onBlur(e)
                  }}
                  onFocus={(e: any) => {
                    onFocus(e)
                  }}
                  onInput={(e: any) => {
                    onInput(e)
                  }}
                />
              )}
              {clearable && !readonly && active && inputValue.length > 0 ? (
                <Icon
                  className="nut-input-clear"
                  name={clearIcon}
                  size={clearSize}
                  click={(e: any) => {
                    handleClear(e)
                  }}
                />
              ) : null}
              {rightIcon && rightIcon.length > 0 ? (
                <div
                  className="nut-input-right-icon"
                  onClick={(e: any) => {
                    onClickRightIcon(e)
                  }}
                >
                  <Icon name={rightIcon} size={rightIconSize} />
                </div>
              ) : null}
              {slotButton ? (
                <div className="nut-input-button">{slotButton}</div>
              ) : null}
            </div>
            {showWordLimit && maxlength ? (
              <div className="nut-input-word-limit">
                <span className="nut-input-word-num">
                  {inputValue ? inputValue.length : 0}
                </span>
                /{maxlength}
              </div>
            ) : null}
            {errorMessage ? (
              <div
                className="nut-input-error-message"
                style={{
                  textAlign: errorMessageAlign,
                }}
              >
                {errorMessage}
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  )
}

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
