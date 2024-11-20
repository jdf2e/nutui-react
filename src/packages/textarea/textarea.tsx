import React, { FunctionComponent, useEffect, useRef } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
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
  readOnly: false,
  disabled: false,
  autoSize: false,
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
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'
  const textareaRef = useRef<any>(null)
  const compositionRef = useRef(false)

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
    if (autoSize) {
      setContentHeight()
    }
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

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return
    if (readOnly) return
    onFocus && onFocus(event)
  }

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
    if (disabled) return
    if (readOnly) return
    onBlur && onBlur(event)
  }

  return (
    <div
      className={classNames(
        classPrefix,
        {
          [`${classPrefix}-disabled`]: disabled,
        },
        className
      )}
    >
      <textarea
        ref={textareaRef}
        className={`${classPrefix}-textarea`}
        style={style}
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        onFocus={(e) => handleFocus(e)}
        onCompositionEnd={() => {
          compositionRef.current = false
        }}
        onCompositionStart={() => {
          compositionRef.current = true
        }}
        rows={rows}
        maxLength={maxLength === -1 ? undefined : maxLength}
        placeholder={
          placeholder === undefined ? locale.placeholder : placeholder
        }
        {...rest}
      />
      {showCount && (
        <div className={`${classPrefix}-limit`}>
          {inputValue.length}/{maxLength < 0 ? 0 : maxLength}
        </div>
      )}
    </div>
  )
}

TextArea.displayName = 'NutTextArea'
