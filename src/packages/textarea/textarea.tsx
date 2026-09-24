import type { ChangeEvent, FocusEvent } from 'react'
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { useConfig, useRtl } from '@/packages/configprovider'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import { WebTextAreaProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  defaultValue: '',
  showCount: false,
  rows: 2,
  maxLength: 140,
  readOnly: false,
  disabled: false,
  autoSize: false,
  plain: false,
  containerType: 'gray',
  status: 'default',
  description: null,
} as WebTextAreaProps

export const TextArea = forwardRef(
  (
    props: Partial<WebTextAreaProps> &
      Omit<
        React.HTMLAttributes<HTMLTextAreaElement>,
        'onChange' | 'onBlur' | 'onFocus'
      >,
    ref
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
      containerType,
      status,
      description,
      onChange,
      onBlur,
      onFocus,
      ...rest
    } = { ...defaultProps, ...props }

    const classPrefix = 'nut-textarea'
    const textareaRef = useRef<any>(null)
    const rtl = useRtl()

    const [innerValue, setInnerValue] = usePropsValue<string>({
      value,
      defaultValue,
      finalValue: defaultValue,
      onChange,
    })
    const isOverLimit = maxLength >= 0 && innerValue.length > maxLength

    useEffect(() => {
      if (autoSize) setContentHeight()
    }, [autoSize, defaultValue, innerValue])

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
      setInnerValue(event.target.value)
    }

    const isDisabled = () => disabled || readOnly

    const handleFocus = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (isDisabled()) {
        event.currentTarget.blur()
        return
      }
      onFocus?.(event)
    }

    const handleBlur = (event: FocusEvent<HTMLTextAreaElement>) => {
      if (isDisabled()) return
      onBlur?.(event)
    }

    useImperativeHandle(ref, () => ({
      clear: () => setInnerValue(''),
      focus: () => {
        if (!disabled && !readOnly) textareaRef.current?.focus()
      },
      blur: () => textareaRef.current?.blur(),
      get nativeElement() {
        return textareaRef.current
      },
    }))

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
              [`${classPrefix}-container-${containerType}`]: !plain,
              [`${classPrefix}-${status}`]: status,
            },
            className
          )}
        >
          <div className={`${classPrefix}-main`}>
            <textarea
              {...rest}
              ref={textareaRef}
              className={classNames(`${classPrefix}-textarea`, {
                [`${classPrefix}-textarea-disabled`]: disabled,
              })}
              style={style}
              disabled={disabled}
              readOnly={readOnly}
              tabIndex={readOnly ? -1 : rest.tabIndex}
              value={innerValue}
              onChange={handleChange}
              onBlur={handleBlur}
              onFocus={handleFocus}
              rows={rows}
              placeholder={
                placeholder !== undefined ? placeholder : locale.placeholder
              }
            />
            {showCount && (
              <div
                className={classNames(`${classPrefix}-limit`, {
                  [`${classPrefix}-limit-error`]: isOverLimit,
                  [`${classPrefix}-limit-disabled`]: disabled,
                })}
              >
                {innerValue.length}/{maxLength < 0 ? 0 : maxLength}
              </div>
            )}
          </div>
          {status === 'error' && description != null && (
            <div className={`${classPrefix}-description`}>{description}</div>
          )}
        </div>
      </>
    )
  }
)

TextArea.displayName = 'NutTextArea'
