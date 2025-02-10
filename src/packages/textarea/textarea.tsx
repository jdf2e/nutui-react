import type { ChangeEvent, FocusEvent } from 'react'
import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { useConfig, useRtl } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

export interface TextAreaProps extends BasicComponent {
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
  onBlur: (event: FocusEvent<HTMLTextAreaElement>) => void
  onFocus: (event: FocusEvent<HTMLTextAreaElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: '',
  showCount: false,
  rows: 2,
  maxLength: 140,
  placeholder: '',
  readOnly: false,
  disabled: false,
  autoSize: false,
  plain: false,
  status: 'default',
} as TextAreaProps
export const TextArea: FunctionComponent<
  Partial<TextAreaProps> &
    Omit<
      React.HTMLAttributes<HTMLTextAreaElement>,
      'onChange' | 'onBlur' | 'onFocus'
    >
> = (props) => {
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
  const textareaRef = useRef<any>(null)
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

  useEffect(() => {
    if (autoSize) setContentHeight()
  }, [autoSize, defaultValue, inputValue])

  const setContentHeight = () => {
    const textarea: any = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      const height = textarea?.scrollHeight
      if (height) {
        textarea.style.height = `${height}px`
      }
    }
  }

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target
    const value = compositionRef.current ? text.value : format(text.value)
    setInputValue(value)
  }

  const isDisabled = () => disabled || readOnly

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (isDisabled()) return
    onFocus?.(event)
  }

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (isDisabled()) return
    onBlur?.(event)
  }

  return (
    <>
      <div
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
        <textarea
          {...rest}
          ref={textareaRef}
          className={classNames(`${classPrefix}-textarea`, {
            [`${classPrefix}-textarea-disabled`]: disabled,
          })}
          style={style}
          disabled={disabled}
          readOnly={readOnly}
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onCompositionEnd={() => {
            compositionRef.current = false
          }}
          onCompositionStart={() => {
            compositionRef.current = true
          }}
          rows={rows}
          maxLength={maxLength === -1 ? undefined : maxLength}
          placeholder={
            placeholder !== undefined ? placeholder : locale.placeholder
          }
        />
        {showCount && (
          <div
            className={classNames(`${classPrefix}-limit`, {
              [`${classPrefix}-limit-disabled`]: disabled,
            })}
          >
            {inputValue.length}/{maxLength < 0 ? 0 : maxLength}
          </div>
        )}
      </div>
    </>
  )
}

TextArea.displayName = 'NutTextArea'
