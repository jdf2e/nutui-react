import React, { forwardRef, useRef, useImperativeHandle } from 'react'
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
  containerType: 'gray',
  status: 'default',
  description: null,
} as TaroTextAreaProps
export const TextArea = forwardRef((props: Partial<TaroTextAreaProps>, ref) => {
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
    containerType,
    status,
    description,
    viewId,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'
  const rtl = useRtl()

  const [innerValue, setInnerValue] = usePropsValue<string>({
    value,
    defaultValue,
    finalValue: defaultValue,
    onChange,
  })
  const isOverLimit = maxLength >= 0 && innerValue.length > maxLength
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (event: BaseEventOrig) => {
    const text = event?.detail?.value
    if (text) {
      setInnerValue(text)
    } else {
      setInnerValue('')
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

  useImperativeHandle(ref, () => {
    return {
      clear: () => {
        setInnerValue('')
      },
      focus: () => {
        if (!disabled && !readOnly) textareaRef.current?.focus()
      },
      blur: () => textareaRef.current?.blur(),
      get nativeElement() {
        return textareaRef.current
      },
    }
  })

  return (
    <>
      <View
        id={viewId}
        className={classNames(
          classPrefix,
          {
            [`${classPrefix}-disabled`]: disabled,
            [`${classPrefix}-readonly`]: readOnly,
            [`${classPrefix}-rtl`]: rtl,
            [`${classPrefix}-plain`]: plain,
            [`${classPrefix}-container`]: !plain,
            [`${classPrefix}-container-${containerType}`]: !plain,
            [`${classPrefix}-${status}`]: status,
          },
          className
        )}
      >
        <View className={`${classPrefix}-main`}>
          <Textarea
            {...rest}
            ref={textareaRef}
            nativeProps={{
              style,
              readOnly,
              rows,
              ...(readOnly && {
                tabIndex: -1,
                onFocus: (event: React.FocusEvent<HTMLTextAreaElement>) =>
                  event.currentTarget.blur(),
              }),
            }}
            className={classNames(`${classPrefix}-textarea`, {
              [`${classPrefix}-textarea-disabled`]: disabled,
            })}
            style={Taro.getEnv() === 'WEB' ? undefined : style}
            disabled={Taro.getEnv() === 'WEB' ? disabled : disabled || readOnly}
            // @ts-ignore
            value={innerValue}
            onInput={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            autoHeight={autoSize}
            maxlength={-1}
            placeholder={
              placeholder !== undefined ? placeholder : locale.placeholder
            }
            showCount={showCount}
          />
          {showCount && (
            <View
              className={classNames(`${classPrefix}-limit`, {
                [`${classPrefix}-limit-error`]: isOverLimit,
                [`${classPrefix}-limit-disabled`]: disabled,
              })}
            >
              {innerValue.length}/{maxLength < 0 ? 0 : maxLength}
            </View>
          )}
        </View>
        {status === 'error' && description != null && (
          <View className={`${classPrefix}-description`}>{description}</View>
        )}
      </View>
    </>
  )
})

TextArea.displayName = 'NutTextArea'
