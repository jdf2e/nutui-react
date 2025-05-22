import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { BaseEventOrig, Textarea, View } from '@tarojs/components'
import { useConfig, useRtl } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { TaroTextAreaProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: '',
  showCount: false,
  maxLength: 140,
  readOnly: false,
  disabled: false,
  autoSize: false,
  plain: false,
  status: 'default',
} as TaroTextAreaProps
export const TextArea: FunctionComponent<Partial<TaroTextAreaProps>> = (
  props
) => {
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

  const handleChange = (event: BaseEventOrig) => {
    const text = event?.detail?.value
    if (text) {
      const value = compositionRef.current ? text : format(text)
      setInputValue(value)
    } else {
      setInputValue('')
    }
  }

  const isDisabled = () => disabled || readOnly

  const handleFocus = (event: BaseEventOrig) => {
    if (isDisabled()) return
    onFocus?.(event)
  }

  const handleBlur = (event: BaseEventOrig) => {
    if (isDisabled()) return
    onBlur?.(event)
  }

  return (
    <>
      <View
        className={classNames(
          classPrefix,
          {
            [`${classPrefix}-disabled`]: disabled,
            [`${classPrefix}-readonly`]: readOnly,
            [`${classPrefix}-rtl`]: rtl,
            [`${classPrefix}-plain`]: plain,
            [`${classPrefix}-container`]: !plain,
            [`${classPrefix}-${status}`]: status,
          },
          className
        )}
      >
        <Textarea
          {...rest}
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
          className={classNames(`${classPrefix}-textarea`, {
            [`${classPrefix}-textarea-disabled`]: disabled,
          })}
          style={Taro.getEnv() === 'WEB' ? undefined : style}
          disabled={Taro.getEnv() === 'WEB' ? disabled : disabled || readOnly}
          // @ts-ignore
          value={inputValue}
          onInput={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          autoHeight={autoSize}
          maxlength={maxLength}
          placeholder={
            placeholder !== undefined ? placeholder : locale.placeholder
          }
        />
        {showCount && (
          <View
            className={classNames(`${classPrefix}-limit`, {
              [`${classPrefix}-limit-disabled`]: disabled,
            })}
          >
            {inputValue.length}/{maxLength < 0 ? 0 : maxLength}
          </View>
        )}
      </View>
    </>
  )
}

TextArea.displayName = 'NutTextArea'
