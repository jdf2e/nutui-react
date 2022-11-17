import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
  useRef,
} from 'react'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

export interface TextAreaProps {
  className?: string
  defaultValue: string | number | any
  textAlign?: string | any
  limitshow?: boolean
  maxlength?: any
  rows?: any
  placeholder?: string
  readonly?: boolean
  disabled?: boolean
  autosize?: boolean
  style?: CSSProperties
  onChange?: (value: any, event: Event) => void
  onBlur?: (event: Event) => void
  onFocus?: (event: Event) => void
}
const defaultProps = {
  defaultValue: '',
  textAlign: 'left',
  limitshow: false,
  maxlength: '',
  rows: '',
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
    maxlength,
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

  const textareaBem = bem('textarea')
  const [inputValue, SetInputValue] = useState('')
  const textareaRef = useRef<any>(null)

  useEffect(() => {
    let initValue = defaultValue
    if (initValue && maxlength && [...initValue].length > Number(maxlength)) {
      initValue = initValue.substring(0, Number(maxlength))
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
    if (maxlength && [...text.value].length > Number(maxlength)) {
      text.value = text.value.substring(0, Number(maxlength))
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

  return (
    <div
      className={`${textareaBem()} ${disabled ? textareaBem('disabled') : ''} ${
        className || ''
      }`}
    >
      <textarea
        ref={textareaRef}
        className={textareaBem('textarea')}
        style={{
          textAlign,
          ...style,
        }}
        disabled={disabled}
        readOnly={readonly}
        value={inputValue}
        onInput={(e: any) => {
          textChange(e)
        }}
        onChange={(e: any) => {
          textChange(e)
        }}
        onBlur={(e: any) => {
          textBlur(e)
        }}
        onFocus={(e: any) => {
          textFocus(e)
        }}
        rows={rows}
        maxLength={maxlength < 0 ? 0 : maxlength}
        placeholder={placeholder || locale.placeholder}
      />
      {limitshow ? (
        <div className={textareaBem('limit')}>
          {[...inputValue].length}/{maxlength < 0 ? 0 : maxlength}
        </div>
      ) : null}
    </div>
  )
}

TextArea.defaultProps = defaultProps
TextArea.displayName = 'NutTextArea'
