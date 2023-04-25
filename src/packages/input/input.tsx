import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  useRef,
  MouseEvent,
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { MaskClose } from '@nutui/icons-react'
import { formatNumber } from './util'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export type InputAlignType = 'left' | 'center' | 'right' // text-align
export type InputFormatTrigger = 'onChange' | 'onBlur' // onChange: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化
export type InputType = HTMLInputTypeAttribute

export type InputRule = {
  pattern?: RegExp
  message?: string
  required?: boolean
}

export interface InputProps extends BasicComponent {
  type: InputType
  name: string
  defaultValue?: string
  value?: string
  placeholder: string
  align: InputAlignType
  disabled: boolean
  readonly: boolean
  maxLength: number
  clearable: boolean
  clearIcon: React.ReactNode
  formatTrigger: InputFormatTrigger
  rules: Array<InputRule>
  autofocus: boolean
  formatter?: (value: string) => void
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  onFocus?: (value: string) => void
  onClear?: (value: string) => void
  onClick?: (value: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'text',
  name: '',
  placeholder: '',
  align: 'left',
  required: false,
  disabled: false,
  readonly: false,
  maxLength: 9999,
  clearable: false,
  clearIcon: null,
  formatTrigger: 'onChange',
  rules: [] as InputRule[],
  autofocus: false,
} as InputProps

export const Input: FunctionComponent<
  Partial<InputProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onBlur' | 'onFocus' | 'onClick'
    >
> = forwardRef((props, ref) => {
  const { locale } = useConfig()
  const {
    children,
    type,
    name,
    defaultValue,
    placeholder,
    align,
    disabled,
    readonly,
    maxLength,
    clearable,
    clearIcon,
    formatTrigger,
    rules,
    autofocus,
    style,
    className,
    onChange,
    onBlur,
    onFocus,
    onClear,
    formatter,
    onClick,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = usePropsValue<string>({
    value: props.value,
    defaultValue: props.defaultValue,
    finalValue: '',
    onChange,
  })

  const inputPlaceholder = placeholder || locale.placeholder

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

  // useEffect(() => {
  //   setClasses(inputClass)
  //   SetInputValue(defaultValue)
  // }, [defaultValue])

  // useEffect(() => {
  //   if (inputValue) {
  //     updateValue(getModelValue())
  //     resetValidation()
  //   }
  // }, [inputValue])

  useImperativeHandle(ref, () => {
    return inputRef.current
  })

  const inputClass = useCallback(() => {
    const prefixCls = 'nut-input'
    return [prefixCls, `${disabled ? `${prefixCls}-disabled` : ''}`]
      .filter(Boolean)
      .join(' ')
  }, [disabled])

  // 样式状态重置
  useEffect(() => {
    setClasses(inputClass)
  }, [disabled, required, error, border, slotButton, rightIcon, center])

  const updateValue = (
    value: any,
    trigger: InputFormatTrigger = 'onChange',
    event?: any
  ) => {
    let val = value

    if (type === 'digit' || type === 'tel') {
      val = formatNumber(val, false, false)
    }
    if (type === 'number') {
      val = formatNumber(val, true, true)
    }
    if (type === 'tel' && !formatter) {
      const regTel =
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      const regNumber = /[^-0-9]/g
      val =
        !regTel.test(val) && val.length > 11
          ? val.substring(0, 11)
          : val.replace(regNumber, '')
    }

    if (formatter && trigger === formatTrigger) {
      val = formatter(val)
    }

    if (inputRef?.current?.value !== val) {
      inputRef.current.value = val
    }
    SetInputValue(val)
  }

  const handleFocus = (event: Event) => {
    const val: any = (event.target as any).value
    SetActive(true)
    onFocus && onFocus(val, event)
  }

  const handleInput = (event: Event) => {
    let val: any = (event.target as any).value

    if (maxLength && val.length > Number(maxLength)) {
      val = val.slice(0, Number(maxLength))
    }
    updateValue(val, 'onChange')
    onChange && onChange(val, event)
  }

  const handleBlur = (event: Event) => {
    setTimeout(() => {
      SetActive(false)
    }, 200)
    let val: any = (event.target as any).value
    if (maxLength && val.length > Number(maxLength)) {
      val = val.slice(0, Number(maxLength))
    }
    updateValue(val, 'onBlur')
    onBlur && onBlur(val, event)
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
    onClear && onClear('', event)
  }

  return (
    <div
      className={`${classes}  ${className || ''}`}
      style={style}
      onClick={(e) => {
        onClick && onClick(e)
      }}
      {...rest}
    >
      <input
        name={name}
        className="input-text"
        ref={inputRef}
        style={{ textAlign: align }}
        type={inputType(type)}
        maxLength={maxLength}
        placeholder={inputPlaceholder}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        autoFocus={autofocus}
        onBlur={(e: any) => {
          handleBlur(e)
        }}
        onFocus={(e: any) => {
          handleFocus(e)
        }}
        onInput={(e: any) => {
          handleInput(e)
        }}
      />
    </div>
  )
})

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
