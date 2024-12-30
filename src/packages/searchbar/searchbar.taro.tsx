import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import type { ChangeEvent, FocusEvent, MouseEvent } from 'react'
import { View, ITouchEvent, Input as TaroInput } from '@tarojs/components'
import { MaskClose, Search, ArrowLeft } from '@nutui/icons-react-taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SearchBarProps extends BasicComponent {
  value?: string
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
  onClear?: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
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
  const onInput = (event: any) => {
    const eventValue = event?.detail?.value
    if (value === eventValue) return
    onChange && onChange?.(eventValue, event)
    setValue(eventValue)
    eventValue === '' && forceFocus()
  }
  const focus = (event: any) => {
    onFocus && onFocus(event?.detail?.value, event)
  }
  const blur = (event: any) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    onBlur && onBlur(event?.detail?.value, event)
  }
  useEffect(() => {
    setValue(outerValue || '')
  }, [outerValue])
  useEffect(() => {
    autoFocus && forceFocus()
  }, [autoFocus])
  const renderField = () => {
    return (
      <TaroInput
        className={`${classPrefix}-input ${
          clearable ? `${classPrefix}-input-clear` : ''
        }`}
        ref={searchRef}
        style={style}
        value={value || ''}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled || readOnly}
        maxlength={maxLength}
        // @ts-ignore
        // onKeyDown={onKeypress}
        onInput={onInput}
        onFocus={focus}
        onBlur={blur}
        onClick={clickInput}
        onConfirm={onConfirm}
      />
    )
  }
  const clickInput = (e: any) => {
    onInputClick && onInputClick(e)
  }
  const renderLeftIn = () => {
    if (!leftIn) return null
    return (
      <View className={`${classPrefix}-leftin ${classPrefix}-icon`}>
        {leftIn}
      </View>
    )
  }
  const renderLeft = () => {
    if (!backable && !left) return null
    return (
      <View className={`${classPrefix}-left`}>
        {backable ? <ArrowLeft size="16" /> : left}
      </View>
    )
  }
  const renderRightIn = () => {
    if (!rightIn) return null
    return (
      <View className={`${classPrefix}-rightin ${classPrefix}-icon`}>
        {rightIn}
      </View>
    )
  }
  const renderRight = () => {
    if (!right) return null
    return <View className={`${classPrefix}-right`}>{right}</View>
  }
  const handleClear = () => {
    return (
      <View
        className={`${classPrefix}-clear  ${classPrefix}-icon`}
        onClick={(e: any) => clearaVal(e)}
      >
        <MaskClose size={16} />
      </View>
    )
  }
  const clearaVal = (
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    forceFocus()
    onChange && onChange?.('')
    onClear && onClear(event)
  }
  //   const onKeypress = (event: any) => {
  //     if (event?.detail?.keyCode === 13) {
  //       if (typeof event.cancelable !== 'boolean' || event.cancelable) {
  //         event.preventDefault()
  //       }
  //       onSearch && onSearch(value as string)
  //     }
  //   }
  const onConfirm = () => {
    onSearch && onSearch(value as string)
  }
  return (
    <View
      className={`${classPrefix} ${
        disabled ? `${classPrefix}-disabled` : ''
      }  ${className || ''}`}
      style={style}
    >
      {renderLeft()}
      <View
        className={`${classPrefix}-content ${
          shape === 'round' ? `${classPrefix}-round` : ''
        }`}
      >
        {renderLeftIn()}
        <View className="nut-searchbar-input-box">{renderField()}</View>
        {clearable && !value && renderRightIn()}
        {clearable && value && handleClear()}
      </View>
      {renderRight()}
    </View>
  )
}

SearchBar.displayName = 'NutSearchBar'
