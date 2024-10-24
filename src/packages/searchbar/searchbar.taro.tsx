import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import { MaskClose, Search, ArrowLeft } from '@nutui/icons-react-taro'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SearchBarProps extends BasicComponent {
  value?: number | string
  placeholder?: string
  shape?: 'square' | 'round'
  disabled?: boolean
  maxLength?: number
  clearable?: boolean
  readOnly?: boolean
  autoFocus?: boolean
  backable: boolean
  left: React.ReactNode
  right: React.ReactNode
  leftIn: React.ReactNode
  rightIn: React.ReactNode
  onSearch?: (val: string) => void
  onChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onBlur?: (value: string, event: FocusEvent<HTMLInputElement>) => void
  onClear?: (event: MouseEvent<HTMLDivElement>) => void
  onInputClick?: (event: MouseEvent<HTMLInputElement>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  placeholder: '',
  shape: 'square',
  disabled: false,
  maxLength: 9999,
  clearable: true,
  readOnly: false,
  autoFocus: false,
  backable: false,
  left: '',
  right: '',
  rightIn: '',
  leftIn: <Search size="16" />,
} as SearchBarProps
export const SearchBar: FunctionComponent<
  Partial<SearchBarProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onFocus' | 'onBlur'
    >
> = (props) => {
  const classPrefix = 'nut-searchbar'

  const { locale } = useConfig()
  const searchRef = useRef<HTMLInputElement>(null)

  const {
    value: outerValue,
    style,
    placeholder,
    shape,
    className,
    disabled,
    maxLength,
    clearable,
    readOnly,
    autoFocus,
    backable,
    right,
    left,
    leftIn,
    rightIn,
    onChange,
    onFocus,
    onBlur,
    onClear,
    onSearch,
    onInputClick,
  } = {
    ...defaultProps,
    ...props,
  }

  const [value, setValue] = useState(() => outerValue)

  const forceFocus = () => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.focus()
  }
  const change = (event: ChangeEvent<HTMLInputElement>) => {
    if (value === event.target.value) return
    onChange && onChange?.(event.target.value, event)
    setValue(event.target.value)
    event.target.value === '' && forceFocus()
  }
  const focus = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target
    onFocus && onFocus?.(value, event)
  }
  const blur = (event: FocusEvent<HTMLInputElement>) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    const { value } = event.target
    onBlur && onBlur?.(value, event)
  }
  useEffect(() => {
    setValue(outerValue || '')
  }, [outerValue])
  useEffect(() => {
    autoFocus && forceFocus()
  }, [autoFocus])
  const renderField = () => {
    return (
      <input
        className={`${classPrefix}-input ${
          clearable ? `${classPrefix}-input-clear` : ''
        }`}
        ref={searchRef}
        style={style}
        value={value || ''}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        onKeyPress={onKeypress}
        onChange={(e) => change(e)}
        onFocus={(e) => focus(e)}
        onBlur={(e) => blur(e)}
        onClick={(e) => clickInput(e)}
      />
    )
  }
  const clickInput = (e: MouseEvent<HTMLInputElement>) => {
    onInputClick && onInputClick(e)
  }
  const renderLeftIn = () => {
    if (!leftIn) return null
    return (
      <div className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </div>
    )
  }
  const renderLeft = () => {
    if (!backable && !left) return null
    return (
      <div className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft size="16" /> : left}
      </div>
    )
  }
  const renderRightIn = () => {
    if (!rightIn) return null
    return (
      <div className={`${classPrefix}-rightin ${classPrefix}-icon`}>
        {rightIn}
      </div>
    )
  }
  const renderRight = () => {
    if (!right) return null
    return <div className={`${classPrefix}-right`}>{right}</div>
  }
  const handleClear = () => {
    return (
      <div
        className={`${classPrefix}-clear  ${classPrefix}-icon`}
        onClick={(e: any) => clearaVal(e)}
      >
        <MaskClose size={16} />
      </div>
    )
  }
  const clearaVal = (event: MouseEvent<HTMLDivElement>) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    forceFocus()
    onChange && onChange?.('')
    onClear && onClear(event)
  }
  const onKeypress = (e: any) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      if (typeof e.cancelable !== 'boolean' || e.cancelable) {
        e.preventDefault()
      }
      onSearch && onSearch(value as string)
    }
  }
  return (
    <div
      className={`${classPrefix} ${
        disabled ? `${classPrefix}-disabled` : ''
      }  ${className || ''}`}
      style={style}
    >
      {renderLeft()}
      <div
        className={`${classPrefix}-content ${
          shape === 'round' ? `${classPrefix}-round` : ''
        }`}
      >
        {renderLeftIn()}
        <div className="nut-searchbar-input-box">{renderField()}</div>
        {clearable && !value && renderRightIn()}
        {clearable && value && handleClear()}
      </div>
      {renderRight()}
    </div>
  )
}

SearchBar.displayName = 'NutSearchBar'
