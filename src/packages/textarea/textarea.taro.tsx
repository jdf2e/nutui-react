import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { Textarea, TextareaProps, View, Text } from '@tarojs/components'
import { useConfig, useRtl } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export interface TextAreaProps
  extends Omit<TextareaProps, 'showCount' | 'onFocus' | 'onBlur'>,
    Omit<BasicComponent, 'style'> {
  value: string
  defaultValue: string
  showCount: boolean
  maxLength: number
  rows: number
  placeholder: string
  readOnly: boolean
  disabled: boolean
  autoSize: boolean
  plain: boolean
  status: 'error' | 'default'
  onChange: (value: string) => void
  onBlur: (event: Event) => void
  onFocus: (event: Event) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: '',
  showCount: false,
  maxLength: 140,
  placeholder: '',
  readOnly: false,
  disabled: false,
  autoSize: false,
  plain: false,
  status: 'default',
} as TextAreaProps
export const TextArea: FunctionComponent<Partial<TextAreaProps>> = (props) => {
  const { locale } = useConfig()
  const {
    className,
    value,
    defaultValue,
    showCount,
    maxLength,
    rows,
    placeholder,
    readOnly,
    disabled,
    autoSize,
    style,
    plain,
    status,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'
  const compositionRef = useRef(false)
  const rtl = useRtl()

  const format = (value: string) => {
    if (maxLength !== -1 && value.length > maxLength) {
      return value.substring(0, maxLength)
    }
    return value
  }

  const [inputValue, setInputValue] = usePropsValue<string>({
    value,
    defaultValue,
    finalValue: format(defaultValue),
    onChange,
  })

  const handleChange = (event: any) => {
    const text = event?.detail?.value
    if (text) {
      const value = compositionRef.current ? text : format(text)
      setInputValue(value)
    } else {
      setInputValue('')
    }
  }

  const handleFocus = (event: Event) => {
    if (disabled) return
    if (readOnly) return
    onFocus && onFocus(event)
  }

  const handleBlur = (event: Event) => {
    if (disabled) return
    if (readOnly) return
    onBlur && onBlur(event)
  }

  return (
    <>
      <View
        className={classNames(
          classPrefix,
          disabled ? `${classPrefix}-disabled` : '',
          readOnly ? `${classPrefix}-readonly` : '',
          rtl ? `${classPrefix}-rtl` : '',
          plain ? `${classPrefix}-plain` : `${classPrefix}-container`,
          status ? `${classPrefix}-${status}` : '',
          className
        )}
      >
        <Textarea
          nativeProps={{
            style,
            readOnly,
            rows,
            onCompositionStart: () => {
              compositionRef.current = true
            },
            onCompositionEnd: () => {
              compositionRef.current = false
            },
          }}
          className={`${classPrefix}-textarea ${disabled ? `${classPrefix}-textarea-disabled` : ''}`}
          style={Taro.getEnv() === 'WEB' ? undefined : style}
          disabled={Taro.getEnv() === 'WEB' ? disabled : disabled || readOnly}
          // @ts-ignore
          value={inputValue}
          onInput={(e: any) => handleChange(e)}
          onBlur={(e: any) => handleBlur(e)}
          onFocus={(e: any) => handleFocus(e)}
          autoHeight={autoSize}
          maxlength={maxLength}
          placeholder={placeholder || locale.placeholder}
          {...rest}
        />
        {showCount && (
          <Text
            className={`${classPrefix}-limit ${disabled ? `${classPrefix}-limit-disabled` : ''}`}
          >
            {inputValue.length}/{maxLength < 0 ? 0 : maxLength}
          </Text>
        )}
      </View>
    </>
  )
}

TextArea.displayName = 'NutTextArea'
