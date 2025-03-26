import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import Taro from '@tarojs/taro'
import { View, Input, InputProps, ITouchEvent } from '@tarojs/components'
import { MaskClose, Search, ArrowLeft } from '@nutui/icons-react-taro'
import { BaseEventOrig } from '@tarojs/components/types/common'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

type inputEventDetail = InputProps.inputEventDetail
type inputForceEventDetail = InputProps.inputForceEventDetail
type inputValueEventDetail = InputProps.inputValueEventDetail

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
  onChange?: (value: string, event?: BaseEventOrig<inputEventDetail>) => void
  onFocus?: (value: string, event: BaseEventOrig<inputForceEventDetail>) => void
  onBlur?: (value: string, event: BaseEventOrig<inputValueEventDetail>) => void
  onClear?: (event: MouseEvent<HTMLDivElement>) => void
  onInputClick?: (event: ITouchEvent) => void
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
  const searchRef = useRef<HTMLInputElement | null>(null)

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
  const change = (event: BaseEventOrig<inputEventDetail>) => {
    if (value === event.detail.value) return
    onChange && onChange?.(event.detail.value, event)
    setValue(event.detail.value)
    event.detail.value === '' && forceFocus()
  }
  const focus = (event: BaseEventOrig<inputForceEventDetail>) => {
    const { value } = event.detail
    onFocus && onFocus?.(value, event)
  }
  const blur = (event: BaseEventOrig<inputValueEventDetail>) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    const { value } = event.detail
    onBlur && onBlur?.(value, event)
  }
  useEffect(() => {
    setValue(outerValue || '')
  }, [outerValue])
  useEffect(() => {
    if (Taro.getEnv() === 'WEB') {
      autoFocus && forceFocus()
    }
  }, [autoFocus])
  const renderField = () => {
    return (
      <Input
        className={`${classPrefix}-input ${
          clearable ? `${classPrefix}-input-clear` : ''
        }`}
        ref={searchRef}
        style={style}
        value={(value || '').toString()}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled || readOnly}
        maxlength={maxLength}
        nativeProps={{
          onKeyPress: onKeypress,
        }}
        autoFocus={autoFocus}
        onInput={(e) => change(e)}
        onFocus={(e) => focus(e)}
        onBlur={(e) => blur(e)}
        onClick={(e) => clickInput(e)}
      />
    )
  }
  const clickInput = (e: ITouchEvent) => {
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
