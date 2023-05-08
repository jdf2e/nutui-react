import React, { FunctionComponent, useEffect, useRef } from 'react'
import classNames from 'classnames'
import { Textarea } from '@tarojs/components'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
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
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'

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

  const handleChange = (event: any) => {
    const text = event.detail ? (event.detail as any) : (event.target as any)
    setInputValue(text.value)
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
      {/* @ts-ignore */}
      <Textarea
        nativeProps={{
          rows,
          onChange: (e: Event) => handleChange(e),
          onCompositionEnd: () => {
            compositionRef.current = false
          },
          onCompositionStart: () => {
            compositionRef.current = true
          },
        }}
        className={`${classPrefix}__textarea`}
        style={style}
        value={inputValue}
        disabled={disabled}
        autoHeight={autoSize}
        onBlur={(e: any) => handleBlur(e)}
        onInput={((e: any) => handleChange(e)) as any}
        onFocus={(e: any) => handleFocus(e)}
        maxlength={maxLength}
        placeholder={placeholder || locale.placeholder}
        {...rest}
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
