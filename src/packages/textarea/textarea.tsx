import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TextAreaProps extends BasicComponent {
  defaultValue: string | number | any
  textAlign?: string | any
  limitshow?: boolean
  maxLength: number
  rows: number
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  autosize?: boolean
  onChange?: (value: any, event: Event) => void
  onBlur?: (event: Event) => void
  onFocus?: (event: Event) => void
}
const defaultProps = {
  ...ComponentDefaults,
  defaultValue: '',
  textAlign: 'left',
  limitshow: false,
  maxLength: 140,
  rows: 2,
  placeholder: '',
  readonly: false,
  disabled: false,
  autosize: false,
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
    defaultValue,
    textAlign,
    limitshow,
    maxLength,
    rows,
    placeholder,
    readonly,
    disabled,
    autosize,
    style,
    onChange,
    onBlur,
    onFocus,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-textarea'
  const [inputValue, SetInputValue] = useState('')
  const textareaRef = useRef<any>(null)

  const compositingRef = useRef(false)

  useEffect(() => {
    let initValue = defaultValue
    if (initValue && maxLength && [...initValue].length > maxLength) {
      initValue = initValue.substring(0, maxLength)
    }
    SetInputValue(initValue)

    if (autosize) {
      setTimeout(() => {
        setContentHeight()
      })
    }
  }, [defaultValue, autosize])

  useEffect(() => {
    if (inputValue) {
      if (autosize) {
        setContentHeight()
      }
    }
  }, [inputValue])

  const setContentHeight = () => {
    const textarea: any = textareaRef.current
    if (textarea) {
      textarea.style.height = 'auto'
      let height = textarea?.scrollHeight

      if (typeof autosize === 'object') {
        const { maxHeight, minHeight } = autosize
        if (maxHeight !== undefined) {
          height = Math.min(height, maxHeight)
        }
        if (minHeight !== undefined) {
          height = Math.max(height, minHeight)
        }
      }
      if (height) {
        textarea.style.height = `${height}px`
      }
    }
  }

  const textChange = (event: Event) => {
    const text = event.target as any
    if (
      maxLength &&
      [...text.value].length > maxLength &&
      !compositingRef.current
    ) {
      text.value = text.value.substring(0, maxLength)
    }
    SetInputValue(text.value)
    onChange && onChange(text.value, event)
  }

  const textFocus = (event: Event) => {
    if (disabled) return
    if (readonly) return
    onFocus && onFocus(event)
  }

  const textBlur = (event: Event) => {
    if (disabled) return
    if (readonly) return
    const text = event.target as any
    onChange && onChange(text.value, event)
    onBlur && onBlur(event)
  }

  const startComposing = () => {
    compositingRef.current = true
  }
  const endComposing = () => {
    compositingRef.current = false
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
        style={{
          textAlign,
          ...style,
        }}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        // onInput={(e: any) => {
        //   textChange(e)
        // }}
        onChange={(e: any) => {
          textChange(e)
        }}
        onBlur={(e: any) => {
          textBlur(e)
        }}
        onFocus={(e: any) => {
          textFocus(e)
        }}
        onCompositionEnd={(e) => endComposing()}
        onCompositionStart={(e) => startComposing()}
        rows={rows}
        maxLength={maxLength < 0 ? 0 : maxLength}
        placeholder={placeholder || locale.placeholder}
      />
      {limitshow ? (
        <div className={`${classPrefix}__limit`}>
          {[...inputValue].length}/{maxLength < 0 ? 0 : maxLength}
        </div>
      ) : null}
    </div>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
