import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import {
  InputProps as TaroInputProps,
  ITouchEvent,
  View,
  Input as TaroInput,
} from '@tarojs/components'
import { MaskClose } from '@nutui/icons-react-taro'
import Taro, { getEnv, ENV_TYPE } from '@tarojs/taro'
import { formatNumber } from './util'
import { useConfig } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export type InputAlignType = 'left' | 'center' | 'right'
export type InputFormatTrigger = 'onChange' | 'onBlur'
export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done'

export interface InputProps extends BasicComponent {
  type: keyof TaroInputProps.Type | HTMLInputTypeAttribute
  name: string
  defaultValue?: string
  value?: string
  placeholder: string
  align: InputAlignType
  disabled: boolean
  readOnly: boolean
  maxLength: number
  clearable: boolean
  clearIcon: React.ReactNode
  formatTrigger: InputFormatTrigger
  autoFocus: boolean
  confirmType: ConfirmTextType
  formatter?: (value: string) => void
  onChange?: (value: string) => void
  onBlur?: (value: string) => void
  onFocus?: (value: string) => void
  onClear?: (value: string) => void
  onClick?: (e: ITouchEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  type: 'text',
  name: '',
  placeholder: '',
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
      Partial<
        Omit<
          TaroInputProps,
          'type' | 'ref' | 'onBlur' | 'onFocus' | 'maxlength' | 'password'
        >
      >,
    ref
  ) => {
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
      onBlur,
      onClear,
      formatter,
      onClick,
      confirmType,
      defaultValue,
      value: _value,
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
    const inputRef = useRef<HTMLInputElement>(null)
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

    const [, updateState] = React.useState()
    const forceUpdate = React.useCallback(() => updateState({} as any), [])

    const updateValue = (
      value: any,
      trigger: InputFormatTrigger = 'onChange'
    ) => {
      let val = value
      if (getEnv() === ENV_TYPE.WEB) {
        if (type === 'number') {
          val = formatNumber(val, false, true)
        }
        if (type === 'digit') {
          val = formatNumber(val, true, true)
        }
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
      forceUpdate()
    }

    const handleFocus = (event: any) => {
      if (Taro.getEnv() === 'WEB') {
        const val: any = (event.target as any).value
        onFocus && onFocus(val)
      } else {
        onFocus?.(value)
      }
      setActive(true)
    }

    const handleInput = (value: string) => {
      updateValue(value, 'onChange')
    }

    const handleBlur = (event: any) => {
      if (Taro.getEnv() === 'WEB') {
        const val: any = (event.target as any).value
        updateValue(val, 'onBlur')
        setTimeout(() => {
          setActive(false)
        }, 50)
      } else {
        updateValue(value, 'onBlur')
        setActive(false)
      }
    }
    const inputType = (type: any) => {
      if (getEnv() === ENV_TYPE.WEB) {
        if (type === 'digit') {
          return 'text'
        }
        if (type === 'number') {
          return 'tel'
        }
      } else if (type === 'password') {
        return 'text'
      }
      return type
    }

    return (
      <View
        className={`${inputClass()}  ${className || ''}`}
        style={style}
        onClick={(e) => {
          onClick && onClick(e)
        }}
      >
        <TaroInput
          {...rest}
          name={name}
          className="nut-input-native"
          ref={inputRef}
          style={{
            textAlign: `${
              // eslint-disable-next-line no-nested-ternary
              align === 'right' ? 'end' : align === 'left' ? 'start' : 'center'
            }`,
          }}
          type={inputType(type) as any}
          password={type === 'password'}
          maxlength={maxLength}
          placeholder={placeholder || locale.placeholder}
          disabled={disabled || readOnly}
          value={value}
          focus={autoFocus}
          confirmType={confirmType}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onInput={(e: any) => {
            handleInput(e.currentTarget.value)
          }}
        />
        <View
          style={{
            display:
              clearable && !readOnly && active && value.length > 0
                ? 'flex'
                : 'none',
            alignItems: 'center',
          }}
          onClick={(e) => {
            e.stopPropagation()
            if (!disabled) {
              setValue('')
              onClear?.('')
            }
          }}
        >
          {clearIcon || <MaskClose className="nut-input-clear" />}
        </View>
      </View>
    )
  }
)

Input.defaultProps = defaultProps
Input.displayName = 'NutInput'
