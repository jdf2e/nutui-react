import React, {
  useCallback,
  useRef,
  HTMLInputTypeAttribute,
  forwardRef,
  useImperativeHandle,
  useState,
  MouseEvent,
} from 'react'
import { MaskClose } from '@nutui/icons-react'
import { formatNumber } from './util'
import { useConfig, useRtl } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export type InputAlign = 'left' | 'center' | 'right'
export type InputFormatTrigger = 'onChange' | 'onBlur'
export type InputType = HTMLInputTypeAttribute
export type InputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface InputProps extends BasicComponent {
  type: InputType
  name: string
  defaultValue?: string
  value?: string
  placeholder?: string
  align: InputAlign
  disabled: boolean
  readOnly: boolean
  maxLength: number
  clearable: boolean
  clearIcon: React.ReactNode
  formatTrigger: InputFormatTrigger
  autoFocus: boolean
  confirmType: InputConfirmType
  formatter?: (value: string) => void
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  onFocus?: (value: string) => void
  onClear?: (value: string) => void
  onClick?: (value: MouseEvent<HTMLDivElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'text',
  name: '',
  placeholder: undefined,
  confirmType: 'done',
  align: 'left',
  required: false,
  disabled: false,
  readOnly: false,
  maxLength: 9999,
  clearable: false,
  clearIcon: null,
  formatTrigger: 'onChange',
  autoFocus: false,
} as InputProps

export const Input = forwardRef(
  (
    props: Partial<InputProps> &
      Omit<
        React.HTMLAttributes<HTMLDivElement>,
        'onChange' | 'onBlur' | 'onFocus' | 'onClick'
      >,
    ref
  ) => {
    const rtl = useRtl()
    const { locale } = useConfig()
    const {
      type,
      name,
      placeholder,
      align,
      disabled,
      readOnly,
      maxLength,
      clearable,
      clearIcon,
      formatTrigger,
      autoFocus,
      style,
      className,
      onChange,
      onFocus,
      onClear,
      formatter,
      onClick,
      confirmType,
      defaultValue,
      value: _value,
      onCompositionStart,
      onCompositionEnd,
      ...rest
    } = {
      ...defaultProps,
      ...props,
    }
    const [value, setValue] = usePropsValue<string>({
      value: _value,
      defaultValue,
      finalValue: '',
      onChange,
    })
    const inputRef = useRef<HTMLInputElement>(null)
    const composingRef = useRef(false)
    const [active, setActive] = useState(false)

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

      if (type === 'number') {
        val = formatNumber(val, false, true)
      }
      if (type === 'digit') {
        val = formatNumber(val, true, true)
      }
      if (formatter && trigger === formatTrigger) {
        val = formatter(val)
      }
      setValue(val)
      const eventHandler = props[trigger]
      if (
        eventHandler &&
        typeof eventHandler === 'function' &&
        trigger !== 'onChange'
      ) {
        eventHandler(val)
      }
    }

    const handleFocus = (event: Event) => {
      const val: any = (event.target as any).value
      onFocus && onFocus(val)
      setActive(true)
    }

    const handleInput = (value: string) => {
      updateValue(value, 'onChange')
    }

    const handleBlur = (event: Event) => {
      const val: any = (event.target as any).value
      updateValue(val, 'onBlur')
      setTimeout(() => {
        setActive(false)
      }, 200)
    }

    const inputType = (type: string) => {
      if (type === 'digit') {
        return 'text'
      }
      if (type === 'number') {
        return 'tel'
      }
      return type
    }

    return (
      <div
        className={`${inputClass()}  ${className || ''}`}
        style={style}
        onClick={(e) => {
          onClick && onClick(e)
        }}
      >
        <input
          {...rest}
          name={name}
          className="nut-input-native"
          ref={inputRef}
          style={{
            // eslint-disable-next-line no-nested-ternary
            textAlign: rtl
              ? // eslint-disable-next-line no-nested-ternary
                align === 'right'
                ? // eslint-disable-next-line no-nested-ternary
                  'left'
                : align === 'left'
                  ? 'right'
                  : 'center'
              : align,
          }}
          type={inputType(type)}
          maxLength={maxLength}
          placeholder={
            placeholder === undefined ? locale.placeholder : placeholder
          }
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          autoFocus={autoFocus}
          enterKeyHint={confirmType}
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
            onCompositionStart?.(e)
          }}
          onCompositionEnd={(e) => {
            composingRef.current = false
            onCompositionEnd?.(e)
          }}
        />
        {clearable && !readOnly && active && value.length > 0 ? (
          <span
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => {
              if (!disabled) {
                setValue('')
                onClear && onClear('')
              }
            }}
          >
            {clearIcon || <MaskClose className="nut-input-clear" />}
          </span>
        ) : null}
      </div>
    )
  }
)

Input.displayName = 'NutInput'
