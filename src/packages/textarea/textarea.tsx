import React, { FunctionComponent, useEffect, useRef } from 'react'
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
  onChange: (value: any) => void
  onBlur: (event: Event) => void
  onFocus: (event: Event) => void
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
} as TextAreaProps
export const TextArea: FunctionComponent<
  Partial<TextAreaProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
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
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'
  const textareaRef = useRef<any>(null)
  const compositionRef = useRef(false)

  const format = (value: string) => {
    if (maxLength !== undefined && value.length > maxLength) {
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

  const handleChange = (event: Event) => {
    const text = event.target as HTMLTextAreaElement
    const value = compositionRef.current ? text.value : format(text.value)
    setInputValue(value)
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
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}__disabled`]: disabled,
      })}
    >
      <textarea
        ref={textareaRef}
        className={`${classPrefix}__textarea`}
        style={style}
        disabled={disabled}
        readOnly={readOnly}
        value={inputValue}
        onChange={(e: any) => handleChange(e)}
        onBlur={(e: any) => handleBlur(e)}
        onFocus={(e: any) => handleFocus(e)}
        onCompositionEnd={() => {
          compositionRef.current = false
        }}
        onCompositionStart={() => {
          compositionRef.current = true
        }}
        rows={rows}
        maxLength={maxLength === -1 ? undefined : maxLength}
        placeholder={placeholder || locale.placeholder}
      />
      {showCount && (
        <div className={`${classPrefix}__limit`}>
          {inputValue.length}/{maxLength < 0 ? 0 : maxLength}
        </div>
      )}
    </div>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
