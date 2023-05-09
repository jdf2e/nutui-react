import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
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
    const text = event?.detail?.value
    if (text) {
      const value = compositionRef.current ? text : format(text)
      setInputValue(value)
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
    <div
      className={classNames(classPrefix, className, {
        [`${classPrefix}__disabled`]: disabled,
      })}
    >
      <Textarea
        nativeProps={{
          readOnly,
          rows,
          onCompositionStart: () => {
            compositionRef.current = true
          },
          onCompositionEnd: () => {
            compositionRef.current = false
          },
        }}
        className={`${classPrefix}__textarea`}
        style={style}
        disabled={Taro.getEnv() === 'WEB' ? disabled : disabled || readOnly}
        value={inputValue}
        // @ts-ignore
        onInput={(e: any) => handleChange(e)}
        onBlur={(e: any) => handleBlur(e)}
        onFocus={(e: any) => handleFocus(e)}
        autoHeight={autoSize}
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
