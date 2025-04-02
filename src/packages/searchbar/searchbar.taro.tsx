import Taro from '@tarojs/taro'
import React, { FunctionComponent, useEffect, useRef, useState } from 'react'
import {
  Input as TaroInput,
  ITouchEvent,
  InputProps,
  View,
  BaseEventOrig,
} from '@tarojs/components'
import { ArrowLeft, MaskClose, Search } from '@nutui/icons-react-taro'
import { useConfig } from '@/packages/configprovider/index.taro'
import { ComponentDefaults } from '@/utils/typings'
import { TaroSearchBarProps } from '@/types'

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
} as TaroSearchBarProps
export const SearchBar: FunctionComponent<
  Partial<TaroSearchBarProps> &
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
  const onInput = (event: BaseEventOrig<InputProps.inputEventDetail>) => {
    const eventValue = event?.detail?.value
    if (value === eventValue) return
    onChange && onChange?.(eventValue, event)
    setValue(eventValue)
    eventValue === '' && forceFocus()
  }
  const focus = (event: BaseEventOrig<InputProps.inputForceEventDetail>) => {
    onFocus && onFocus(event?.detail?.value, event)
  }
  const blur = (event: BaseEventOrig<InputProps.inputValueEventDetail>) => {
    const searchSelf: HTMLInputElement | null = searchRef.current
    searchSelf && searchSelf.blur()
    onBlur && onBlur(event?.detail?.value, event)
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
      <TaroInput
        className={`${classPrefix}-input ${
          clearable ? `${classPrefix}-input-clear` : ''
        }`}
        ref={searchRef}
        style={style}
        value={(value || '').toString()}
        placeholder={placeholder || locale.placeholder}
        disabled={disabled || readOnly}
        maxlength={maxLength}
        autoFocus={autoFocus}
        onInput={onInput}
        onFocus={focus}
        onBlur={blur}
        onClick={clickInput}
        onConfirm={onConfirm}
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
  const clearaVal = (event: ITouchEvent) => {
    if (disabled || readOnly) {
      return
    }
    setValue('')
    forceFocus()
    onChange && onChange?.('')
    onClear && onClear(event)
  }
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
