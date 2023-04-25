import React, {
  FunctionComponent,
  useCallback,
  useRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
} from 'react'
import { MaskClose } from '@nutui/icons-react'
import { formatNumber } from './util'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export type InputAlignType = 'left' | 'center' | 'right'
export type InputFormatTrigger = 'onChange' | 'onBlur'
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
    type,
    name,
    placeholder,
    align,
    disabled,
    readonly,
    maxLength,
    clearable,
    clearIcon,
    formatTrigger,
    autofocus,
    style,
    className,
    onChange,
    onFocus,
    onClear,
    formatter,
    onClick,
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
  const inputRef = useRef<HTMLInputElement>(null)
  const composingRef = useRef(false)

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        setValue('')
      },
      focus: () => {
        inputRef.current?.focus()
      },
      blur: () => {
        inputRef.current?.blur()
      },
      get nativeElement() {
        return inputRef.current
      },
    }
  })

  const inputClass = useCallback(() => {
    const classPrefix = 'nut-input'
    return [classPrefix, `${disabled ? `${classPrefix}-disabled` : ''}`]
      .filter(Boolean)
      .join(' ')
  }, [disabled])

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
    setValue(val)
    const eventHandler = props[trigger]
    if (eventHandler && typeof eventHandler === 'function') {
      eventHandler(val)
    }
  }

  const handleFocus = (event: Event) => {
    const val: any = (event.target as any).value
    onFocus && onFocus(val)
  }

  const handleInput = (value: string) => {
    updateValue(value, 'onChange')
  }

  const handleBlur = (event: Event) => {
    const val: any = (event.target as any).value
    updateValue(val, 'onBlur')
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

  return (
    <div
      className={`${inputClass()}  ${className || ''}`}
      style={style}
      onClick={(e) => {
        onClick && onClick('a')
      }}
    >
      <input
        name={name}
        className="nut-input-native"
        ref={inputRef}
        style={{ textAlign: align }}
        type={inputType(type)}
        maxLength={maxLength}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled}
        readOnly={readonly}
        value={value}
        autoFocus={autofocus}
        onBlur={(e: any) => {
          handleBlur(e)
        }}
        onFocus={(e: any) => {
          handleFocus(e)
        }}
        onChange={(e: any) => {
          handleInput(e.currentTarget.value)
        }}
        onCompositionStart={(e) => {
          composingRef.current = true
          props.onCompositionStart?.(e)
        }}
        onCompositionEnd={(e) => {
          composingRef.current = false
          props.onCompositionEnd?.(e)
        }}
      />
      {clearable && value.length > 0 ? (
        <span
          style={{ display: 'flex', alignItems: 'center' }}
          onClick={() => {
            setValue('')
            inputRef.current?.focus()
            onClear && onClear('')
          }}
        >
          {clearIcon || <MaskClose className="nut-input-clear" />}
        </span>
      ) : null}
    </div>
  )
})

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
