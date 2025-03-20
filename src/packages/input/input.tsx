import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { MaskClose } from '@nutui/icons-react'
import { formatNumber } from './utils'
import { useConfig, useRtl } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { InputFormatTrigger, WebInputProps, WebInputType } from '@/types'

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
  plain: false,
} as WebInputProps

export const Input = forwardRef(
  (
    props: Partial<WebInputProps> &
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
      plain,
      defaultValue,
      value: _value,
      onCompositionStart,
      onCompositionEnd,
      ...rest
    } = { ...defaultProps, ...props }

    const [value, setValue] = usePropsValue<string>({
      value: _value,
      defaultValue,
      finalValue: '',
      onChange,
    })

    const inputRef = useRef<HTMLInputElement>(null)
    const composingRef = useRef(false)
    const [active, setActive] = useState(false)

    useImperativeHandle(ref, () => ({
      clear: () => setValue(''),
      focus: () => inputRef.current?.focus(),
      blur: () => inputRef.current?.blur(),
      get nativeElement() {
        return inputRef.current
      },
    }))

    const getInputClass = useCallback(() => {
      const classPrefix = 'nut-input'
      return [
        classPrefix,
        `${disabled ? `${classPrefix}-disabled` : ''}`,
        readOnly ? `${classPrefix}-readonly` : '',
        `${plain ? `${classPrefix}-plain` : `${classPrefix}-container`}`,
      ]
        .filter(Boolean)
        .join(' ')
    }, [disabled, readOnly, plain])

    const handleValueUpdate = (
      inputValue: string,
      trigger: InputFormatTrigger
    ) => {
      let updatedValue = inputValue

      if (type === 'number')
        updatedValue = formatNumber(updatedValue, false, true)
      if (type === 'digit')
        updatedValue = formatNumber(updatedValue, true, true)
      if (formatter && trigger === formatTrigger)
        updatedValue = formatter(updatedValue)

      setValue(updatedValue)

      if (trigger !== 'onChange') {
        const eventHandler = props[trigger]
        eventHandler?.(updatedValue)
      }
    }

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(event.target.value)
      setActive(true)
    }

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      handleValueUpdate(event.target.value, 'onBlur')
      setTimeout(() => setActive(false), 200)
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      handleValueUpdate(event.target.value, 'onChange')
    }

    const getInputType = (inputType: WebInputType) => {
      if (inputType === 'digit') return 'text'
      if (inputType === 'number') return 'tel'
      return inputType
    }

    const getTextAlign = () => {
      if (rtl) {
        if (align === 'right') return 'left'
        if (align === 'left') return 'right'
      }
      return align
    }

    return (
      <div
        className={`${getInputClass()} ${className || ''}`}
        style={style}
        onClick={onClick}
      >
        <input
          {...rest}
          ref={inputRef}
          name={name}
          className="nut-input-native"
          style={{ textAlign: getTextAlign() }}
          type={getInputType(type)}
          maxLength={maxLength}
          placeholder={
            placeholder === undefined ? locale.placeholder : placeholder
          }
          disabled={disabled}
          readOnly={readOnly}
          value={value}
          autoFocus={autoFocus}
          enterKeyHint={confirmType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          onCompositionStart={(e) => {
            composingRef.current = true
            onCompositionStart?.(e)
          }}
          onCompositionEnd={(e) => {
            composingRef.current = false
            onCompositionEnd?.(e)
          }}
        />
        {clearable && !readOnly && active && value.length > 0 && (
          <span
            style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            onClick={() => {
              if (!disabled) {
                setValue('')
                onClear?.('')
              }
            }}
          >
            {clearIcon || <MaskClose className="nut-input-clear" />}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'NutInput'
