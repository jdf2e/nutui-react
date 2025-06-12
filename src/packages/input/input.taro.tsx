import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'
import { Input as TaroInput, View } from '@tarojs/components'
import { MaskClose } from '@nutui/icons-react-taro'
import Taro, { ENV_TYPE, getEnv } from '@tarojs/taro'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { formatNumber } from './utils'
import { useConfig, useRtl } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { InputFormatTrigger, TaroInputProps } from '@/types'

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
} as TaroInputProps

export const Input = forwardRef((props: Partial<TaroInputProps>, ref) => {
  const classPrefix = 'nut-input'

  const rtl = useRtl()
  const { locale } = useConfig()
  const {
    focus,
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
    plain,
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
    value: _value,
    defaultValue,
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
    return [
      classPrefix,
      `${disabled ? `${classPrefix}-disabled` : ''}`,
      readOnly ? `${classPrefix}-readonly` : '',
      `${plain ? `${classPrefix}-plain` : `${classPrefix}-container`}`,
    ]
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
    if (type === 'number') val = formatNumber(val, false, true)
    if (type === 'digit') val = formatNumber(val, true, true)
    if (formatter && trigger === formatTrigger) val = formatter(val)

    setValue(val)
    if (trigger !== 'onChange') {
      const eventHandler = props[trigger]
      eventHandler?.(val)
    }
    forceUpdate()
  }

  const handleFocus = (event: any) => {
    if (Taro.getEnv() === 'WEB') {
      const val: any = (event.target as any).value
      onFocus && onFocus(val)
    } else {
      const height = (event.detail || {}).height
      onFocus?.(value, height)
    }
    setActive(true)
  }

  const handleInput = (event: BaseEventOrig) => {
    updateValue((event.detail || event.currentTarget).value, 'onChange')
  }

  const handleBlur = (event: any) => {
    const val =
      Taro.getEnv() === 'WEB' ? (event.target as any).value : event.detail.value
    updateValue(val, 'onBlur')
    setTimeout(() => setActive(false), 200)
  }
  const inputType = (type: any) => {
    if (getEnv() === ENV_TYPE.WEB) {
      if (type === 'digit') return 'text'
      if (type === 'number') return 'tel'
    } else if (type === 'password') {
      return 'text'
    }
    return type
  }
  const getTextAlign = () => {
    if (rtl) {
      if (align === 'right') return 'left'
      if (align === 'left') return 'right'
    }
    return align
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
        style={{ textAlign: getTextAlign() }}
        type={inputType(type) as any}
        password={type === 'password'}
        maxlength={maxLength}
        placeholder={
          placeholder === undefined ? locale.placeholder : placeholder
        }
        placeholderClass={`${classPrefix}-placeholder`}
        disabled={disabled || readOnly}
        value={value}
        focus={autoFocus || focus}
        confirmType={confirmType}
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
      />
      <View
        style={{
          display:
            clearable && !readOnly && active && value.length > 0
              ? 'flex'
              : 'none',
          alignItems: 'center',
          cursor: 'pointer',
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
})

Input.displayName = 'NutInput'
